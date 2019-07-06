// Traverse means moving up and down
// We are going to deal with parent and children with a specific node, or whatever we are going to select

let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - DocType

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodetype;

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = "Hello";

// Children of children
val = list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild; // Most cased will be used this

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling

val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
