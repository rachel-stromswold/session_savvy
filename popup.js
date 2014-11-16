function maketbl(names){
	var tbl=document.getElementById("list");
	var li=[];
	
	for(i=0;i<names.length;i++){
		li.push(document.createElement("li"));
		var node=document.createTextNode(names[i]);
		li[i].appendChild(node);
		tbl.appendChild(li[i]);
	
		/*li[i].addEventListener("mouseover", function(){
			li[i].backgroundColor="blue";
			//document.write("baseball");
		});
	
		li[i].addEventListener("mouseout", function(){
			li[i].backgroundColor="white";
		});*/
		
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
	
	document.getElementById("save").addEventListener("click",function(){
		var name=prompt("Please enter a name for this session", Date());
		
		if(names!=undefined){		
			localStorage["names"]=localStorage["names"]+";"+name;
		}else{
			localStorage["names"]=name;		
		}
		
		chrome.tabs.query({}, function(tabs){
			var str="";
			for(var i=0;i<tabs.length;i++){
				str=str+" "+tabs[i].url;
			}
			localStorage[name]=str;
		});
	});
}

function highlight(x){
	x.backgroundColor="blue";
}

function unhighlight(x){
	x.backgroundColor="white";
}
function opentabs(){}

function savetabs(){}

window.addEventListener("load", fetch);

document.getElementById("save").addEventListener("click", savetabs)
