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
			alert(name);
			//document.write(e.pageX);
			//chrome.tabs.create({ url: "http://"+i+".com" });
		});
	}
}

function fetch(){
	var names=localStorage["names"];
	names="asdf;fjfjf;uiuiuiu;xdxD";
	if(names==undefined){
		document.getElementById("list").innerHTML="<p>Use this extension to save your sessions!</p>";
	}else{
		maketbl(names.split(";"));  
	}
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
