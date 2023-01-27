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

//var seconditem = document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.backgroundColor='green';

//var thirditem = document.querySelector('.list-group-item:nth-child(3)');
//thirditem.style.backgroundColor='white';
//thirditem.style.color='white';


//var item=document.querySelectorAll('.list-group-item');
//item[1].style.color='green';
//ar odd = document.querySelectorAll('li:nth-child(odd)');
//for(var i=0; i<odd.length; i++)
 //{
  //   odd[i].style.backgroundColor ='green';
//}
//parentnode
 var items=document.querySelector('#items');
// console.log(items.parentNode);
// items.parentNode.style.backgroundColor= '#f4f4f4';

//parentelement
// var items=document.querySelector('#items');
// console.log(items.parentElement);
// items.parentElement.style.backgroundColor= '#f4f4f4';
// console.log(items.parentElement.parentElement.parentElement);

//childnode
//console.log(items.childNodes);

// console.log(items.children);
// items.children[1].style.backgroundColor='yellow';

// console.log(items.firstChild);
// console.log(items.firstElementChild);
// items.firstElementChild.textContent='hello1';


// console.log(items.lastChild);
// console.log(items.lastElementChild);
// items.lastElementChild.textContent='hello1';
// console.log(items.nextSibling);
// //nextelementsibling
// console.log(items.nextElementSibling);

//previoussibling
// console.log(items.previousSibling);
// console.log(items.previousElementSibling);
// items.previousElementSibling.style.color='green';

//createelement
var newDev=document.createElement('dev');
newDev.className='hello';
newDev.id='hello1';
//set attributes
newDev.setAttribute('title', 'hello dev');
//create text node
var newdevtext=document.createTextNode('hello world');
//addind text to div
newDev.append(newdevtext);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDev);
container.insertBefore(newDev,h1);