function maketbl(names){
  var str="<table>";
  for(i=0;i<names.length;i++){
		str=str+"<tr><th id='names[i]>"+names[i]+"</th></tr>";
  }
  str=str+"</table>";
  document.getElementById("list").innerHTML=str;
  
  for(i=0;i<names.length;i++){
  		item=document.getElementById(names[i]);
		item.addEventListener("mouseover", function(){
			item.backgroundColor="blue";
		});
		item.addEventListener("mouseout", function(){
			item.backgroundColor="white";
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
