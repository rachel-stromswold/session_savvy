function maketbl(names){
	var tbl=document.getElementById("list");
	var li=[];
	
	for(i=0;i<names.length;i++){
	    li.push(document.createElement("tr"));
	    
	    var td=document.createElement("td");
	    td.appendChild(document.createTextNode(names[i]));
	    li[i].appendChild(td);
	    td.style.cursor="pointer";
	    var td1=document.createElement("td");
	    
	    var but=document.createElement("button");
	    but.appendChild(document.createTextNode("delete"));
	    but.addEventListener("click", function(e){
		if(confirm("Are you sure?")){
		    var txt=document.elementFromPoint(20, e.pageY).innerHTML;
		    localStorage["names"]=localStorage["names"].replace(";"+txt+";","");
		    localStorage["names"]=localStorage["names"].replace(";"+txt,"");
		    localStorage["names"]=localStorage["names"].replace(txt,"");
		    localStorage.removeItem(txt);
		}
	    });
	    
	    td1.appendChild(but);
	    li[i].appendChild(td1);
	    tbl.appendChild(li[i]);
		
	    li[i].addEventListener("click", function(e){
		var name=document.elementFromPoint(e.pageX, e.pageY).innerHTML;
		
		if(localStorage[name]!=undefined){
		    var urls=localStorage[name].split(" ");
			for(var i=0;i<urls.length;i++){
			    chrome.tabs.create({ url: urls[i] });
			}
		}
	    });
	}
}

function fetch(){
	var names=localStorage["names"];
	
	if(names==undefined){
		document.getElementById("list").innerHTML="<p>Use this extension to save your sessions!</p>";
	}else{
		maketbl(names.split(";"));
	}
	
	document.getElementById("save").addEventListener("click", function(){
	    var name=prompt("Please enter a name for this session", Date());
	
	    if(names!=undefined){		
		localStorage["names"]=localStorage["names"]+";"+name;
	    }else{
		localStorage["names"]=name;		
	    }

	    chrome.tabs.query({"highlighted":true}, function(tbs){
		if(tbs.length==1){
		    chrome.tabs.query({"currentWindow":true}, function(tabs){
		        var str="";
		        for(var i=0;i<tabs.length;i++){
			    if(tabs[i].url!="")
				str=str+" "+tabs[i].url;
		        }
		        localStorage[name]=str;
		    });
		}else{
		    var str="";
		    for(var i=0;i<tbs.length;i++){
			if(tbs[i].url!="")
			    str=str+" "+tbs[i].url;
		    }
		    localStorage[name]=str;
		}
	    });
	    window.close();
	});
}

window.addEventListener("load", fetch);
