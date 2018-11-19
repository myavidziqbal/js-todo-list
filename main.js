var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//Form Submit
form.addEventListener("submit", addItem);

//Delete Event
itemList.addEventListener("click", removeItem);

//Filter Event
filter.addEventListener("keyup", filterItems);

//add item
function addItem(e) {
  e.preventDefault();

  //Get Input value
  var newItem = document.getElementById("item").value;
  //Create new li element
  var li = document.createElement("li");
  //add class
  li.className = "list-group-item";
  //add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create del button element
  var deleteBtn = document.createElement("button");
  //add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //Append li button to li
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li);
}
//Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filter Items
function filterItems(e) {
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get List
  var items = itemList.getElementsByTagName("li");
  //Convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
