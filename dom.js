// //var items=document.getElementsByClassName("list-group-item");
// console.log(items);
// // items[1].style.backgroundColor='green';
// for(var i=0; i<items.length; i++)
// {
//     items[i].style.fontWeight ='bold';
// }

// var it=document.getElementsByTagName("li");
// console.log(items);
// items[1].style.backgroundColor='green';
// for(var i=0; i<items.length; i++)
// {
//     items[i].style.fontWeight ='bold';
// }

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';

var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.backgroundColor='white';
thirditem.style.color='white';


var item=document.querySelectorAll('.list-group-item');
item[1].style.color='green';
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++)
 {
     odd[i].style.backgroundColor ='green';
}
