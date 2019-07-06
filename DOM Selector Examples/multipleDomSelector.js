/* // document.getElementsByClassName

// This will get html-collection
const items = document.getElementsByClassName('collection-item');
console.log(items);

console.log(items[0])
items[0].style.color = "red";
items[3].textContent = 'Hello World';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems)
 */
// document.getElementsByTagName

let lis = document.getElementsByTagName("li");
/* console.log(lis);
console.log(lis[0]);
 */
/* 
// console.log(items[0]);
lis[0].style.color = "red";
lis[3].textContent = "Hello World";

// Convert HTML Collection into an array!

lis = Array.from(lis);
lis.reverse();

lis.forEach((li, index) => {
  console.log(li.className);
  li.textContent = `${index}: Hello!`;
});

console.log(lis);
 */

// querySelectorAll returns a node list. A Node list comes not just from elements but, but text nodes
// It allow us to do things like forEach and do some other array Methods without having to convert it

// Can put any css selector in here just if it's a jQuery
// This is not html collection. It's a node List!

const items = document.querySelectorAll("ul.collection li.collection-item");

// Didn't need to convert to an Array.from(), because we are using a nodeList
items.forEach((items, index) => {
  items.textContent = `${index}: Hello!`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach((li, index) => {
  li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "green";
}

console.log(items);
