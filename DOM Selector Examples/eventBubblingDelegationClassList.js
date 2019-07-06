// Event bubbling is up of events through the DOM. When event happens on a particular element
// in the DOM and actually will bubble up through the parents. Example: if you have a child 1,2,3
// When mousingover or clicking on child element 1, it will go to the child element 2, child element 3 etc.

// Delegation is almost the opposite of event bubbling. It's where we put the listener
// on one of the parent elements and then we use logic inside of the event handler
// to target the element that we actually want click for whatever type of event it is

/**********************/
/****EVENT BUBBLING****/
/**********************/
/* 
document.querySelector('.card-title').addEventListener('click', function() {
    console.log('Card title');
});

document.querySelector(".card-content").addEventListener("click", function() {
  console.log("Card content");
});

document.querySelector(".card").addEventListener("click", function() {
  console.log("Card");
});

document.querySelector(".col").addEventListener("click", function() {
  console.log("col");
});
*/
/************************/
/****EVENT DELEGATION****/
/************************/

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // console.log(e.target);

  /* 
  // this is not the most optimal way to code, because on the 
  // 'delete-item secondary-content', if you add 'delete-item secondary-content test', it will not work! 
  
  if (e.target.parentElement.className === "delete-item secondary-content") {
    console.log("delete Item");
  } 
  */

  // Best way to code compared to the previous
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete Item");
    // e.target is from the <i> tag
    // parentElement is from the <a> tag element
    // and then parentElement which is from the list item
    // Then simply remove()
    e.target.parentElement.parentElement.remove();
  }
}
