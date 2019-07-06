// Local storage will stay until you manually clear it out in your setting, or through your program
// Session storage will leave when you go out of your browser by closing it

// Set local storage item
// localStorage.setItem('name', 'John')
// localStorage.setItem("age", "30");

// Set session storage item
// localStorage.setItem("name", "Beth");

// Remove from the storage
// localStorage.removeItem('name');

// Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// Clear local storage
// localStorage.clear();
// console.log(name, age);

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  const task = document.getElementById("task").value;

  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  // JSON.stringify is to wrap it into a string
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task saved!");
  console.log(task);
});

const tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.forEach(task => {
  console.log(task);
});
