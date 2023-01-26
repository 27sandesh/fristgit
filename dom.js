var items=document.getElementsByClassName("list-group-item");
console.log(items);
items[1].style.backgroundColor='green';
for(var i=0; i<items.length; i++)
{
    items[i].style.fontWeight ='bold';
}

var it=document.getElementsByTagName("li");
console.log(it);
it[1].style.backgroundColor='green';
for(var i=0; i<it.length; i++)
{
    it[i].style.fontWeight ='bold';
}