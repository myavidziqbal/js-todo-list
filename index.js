// var li = document.getElementsByClassName('li')
// console.log(li);
// console.log(li[1])
// li[1].textContent = 'hello 2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'

// for(var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }

//QUERYSELECTOR-------
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "blue";

// var item = document.querySelector('.list-group-item:last-child(2)');
// secondItem.style.color = 'coral'

//QUERYSELECTORALL-------
// var titles = document.querySelectorAll('.title')

// console.log(titles)
// titles[0].textContent = 'Hello'

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')

// for(var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }

//Travesing The DOM----------------
// var itemList = document.querySelector('#items')
// //parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentNode.parentNode)

//childNOdes
// console.log(itemList.childNodes)

// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'

//FirstChild------
// console.log(itemList.lastChild)
//FirstElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Hello 4'

//NextSibling
// console.log(itemList.nextSibling)
// //nextElementSibling
// console.log(itemList.nextElementSibling)

//previousSibling
// console.log(itemList.previousSibling)
// //previousElementSibling
// console.log(itemList.previousElementSibling.style.color = 'green')

//createElement

//create a div
// var newDiv = document.createElement('div')

// //add class
// newDiv.className = 'hello'

// //add id
// newDiv.id = 'hello'

// //add attr
// newDiv.setAttribute('title','Hello Div')

// //create text node
// var newDivText = document.createTextNode('Hello world')

// // //add text to div
// newDiv.appendChild(newDivText)

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')

// console.log(newDiv)

// newDiv.style.fontSize = '30px'

// container.insertBefore(newDiv, h1)

//EVENT//

// var button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick(e){
//     // document.getElementById('header-title').textContent = 'Changed'
//     // // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
//     // console.log(e.target)
//     // console.log(e.target.id)
//     // console.log(e.target.className)
//     // console.log(e.target.classList)
//     // var output = document.getElementById('output')
//     // output.innerHTML = '<h3>'+e.target.id+'</h3>'

//     // console.log(e.type)

//     // console.log(e.clientX)
//     // console.log(e.clientY)

//     // console.log(e.offsetX)
//     // console.log(e.offsetY)

//     // console.log(e.altKey)
//     // console.log(e.ctrlKey)
//     // console.log(e.shiftKey)
// }

// var button = document.getElementById('button');
// var box = document.getElementById('box');

// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

// box.addEventListener('mouseenter', runEvent)
// // box.addEventListener('mouseleave', runEvent)

// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)

// box.addEventListener('mousemove', runEvent)

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");
var select = document.querySelector("select");

// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)

// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);

// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("input", runEvent);

// select.addEventListener("change", runEvent);
// select.addEventListener("input", runEvent);

form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE: " + e.type);

  //   console.log(e.target.value);

  //   console.log(e.target.value);
  //   document.getElementById("output").innerHTML =
  //     "<h3>" + e.target.value + "</h3>";

  // output = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY</h3>'

  //     document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
}
