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
 //var items=document.querySelector('#items');
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
// var newDev=document.createElement('dev');
// newDev.className='hello';
// newDev.id='hello1';
// //set attributes
// newDev.setAttribute('title', 'hello dev');
// //create text node
// var newdevtext=document.createTextNode('hello world');
// //addind text to div
// newDev.append(newdevtext);

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// console.log(newDev);
// container.insertBefore(newDev,h1);

// var form=document.getElementById('addForm');
// var itemlist=document.getElementById('items');
// var filter=document.getElementById('filter');
//  //add eventlistener
//  form.addEventListener('submit',addItem);
//  itemlist.addEventListener('click',removeItem);
//  filter.addEventListener('keyup',filteritems);

//  function addItem(e){
//     e.preventDefault();
//     console.log(1);
//     var items=document.getElementById('item').value;
//     var li=document.createElement('li');
//  li.className='list-group-item';
// //add text node
// li.appendChild(document.createTextNode(items));
// //create delete button
// var deletebtn=document.createElement('button');
// deletebtn.className='btn btn-danger btn-sm float-right delete';
// //append text node

// deletebtn.appendChild(document.createTextNode('x'));
// li.append(deletebtn);
// itemlist.append(li);
//  }

//  function removeItem(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm('are you sure?')){
//             var li=e.target.parentElement;
//             itemlist.removeChild(li);
//             //create delete button
// var editbtn=document.createElement('button');
// editbtn.className='btn btn-danger btn-sm float-right delete';
// //append text node
// var items=document.getElementById('item').value;
//     var li=document.createElement('li');
//  li.className='list-group-item';
// //add text node
// li.appendChild(document.createTextNode(items));
// //create delete button
// var editbtn=document.createElement('button');

// editbtn.appendChild(document.createTextNode('edit'));
// li.append(editbtn);
// itemlist.append(li);
//         }
//     }

//  }

//  function filteritems(e){
//     var text=e.target.value.toLowerCase();
//     console.log(text);
//      var items=itemlist.getElementsByTagName('li');
//      Array.from(items).forEach(function(item){
//         var itemName=item.firstChild.textcontent;
//         console.log(itemName);
//     //   if(itemName.toLowerCase().indexOf(text) !=-1)
//     //   {
//     //      item.style.display='block';
//     //   }
//     //       else{
//     //     item.style.display='none';
//     //  }
//     });
    
//     }
 

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}