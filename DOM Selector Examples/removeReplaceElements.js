// How to remove elements, how to work with classes and manipulate classes and attributes
// How to get attributes in the classes and change them. How to add them, removed them etc.

// REPLACE ELEMENTS

// Create element

const newHeading = document.createElement("h2");

// Add an ID

newHeading.id = "task-title";

// New Text Node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old heading
const oldHeading = document.getElementById("task-title");
// we need a parent to replace the child. This is what we need to call that on the parents

const cardAction = document.querySelector(".card-action");

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

/**********************/
/****REMOVE ELEMENT****/
/**********************/

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove List Item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

/**********************/
/****CLASSES & ATT*****/
/**********************/

const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");

val = link;

// Attributes

val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "Google"); // adding an attribute
val = link.hasAttribute("title"); // Check if there is a attribute that has a name. True or false
link.removeAttribute("title");
val = link;

console.log(val);
