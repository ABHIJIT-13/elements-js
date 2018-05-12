var head=document.getElementById("temp");
var ourList=document.getElementById("list");
var utton=document.getElementById("here");
var list=document.getElementById("list").getElementsByTagName("li");
ourList.addEventListener("click", activateItem);

function activateItem(e)
{ 
	if(e.target.nodeName == "LI")
	{
		head.innerHTML=e.target.innerHTML;
	    
	}
}	

utton.addEventListener("click",createNewItem);

function createNewItem()
{
	ourList.innerHTML += "<li>New element</li>";
}