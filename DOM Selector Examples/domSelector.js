// document.getElementById();

// console.log(document.getElementById('task-title'));

// Get things from the element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");

// Changing Styling - used to events such as hovering, to show/dissapear.
// Should not used for styling. Use CSS for it
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
// taskTitle.style.display = "none";

// Change content

taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks";
// We want to use it to tech something through fetch API or AJAX and insert it into a chunk of html
taskTitle.innerHTML = "<span style='color:red;'>Task List</span>";

// querySelector is newer and much more powerful, because we have don't have to select things such as ID.
// This works like jQuery and put any css selector in here

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5")); // If there is more than h5. It will only get the first one

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "purple";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccc";

for (let i = 0; i < textTitle.querySelector("li: nth-child(odd)"); i++) {
  document.querySelector("li:nth-child(odd)").style.background = "red";
}
document.querySelector("li:nth-child(even )").style.background = "#f4f4f4";

