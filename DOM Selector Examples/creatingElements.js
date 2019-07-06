// Create element

const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add id
li.id = "new-item";

// Add Attribute
li.setAttribute("title", "new Item");

// Create text node and append
li.appendChild(document.createTextNode("Hello World")); // Append means you want to put something inside of something

// Create new link element
const link = document.createElement("a");

// Add classes we need
link.className = " delete-item secondary-content";

// Add icon html
link.innerHTML = ' <i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);
console.log(li);
