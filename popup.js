function maketbl(names){
  var str="<table>";
  for(i=0;i<names.length;i++){
		str=str+"<tr><th onmouseover='highlight(this)' onmouseout='unhighlight(this)' onmouseclick='opentabs()'>"+names[i]+"</th></tr>";
  }
  str=str+"</table>";
  document.getElementById("list").innerHTML=str;
}

function fetch(){
  var names=localStorage["names"];
  if(names==undefined){
    document.getElementById("list").innerHTML="<p>Use this extension to save your sessions!</p>";
  }
}

function highlight(x){
  x.backgroundColor="blue";
}

function unhighlight(x){
  x.backgroundColor="white";
}

function opentabs(){}

/*window.onload = function(){
fetch();
}*/
