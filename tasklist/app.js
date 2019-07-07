// Define UI Variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load All Event listeners
function loadEventListeners() {
  // DOM Load Event - Display in the ul
  document.addEventListener("DOMContentLoaded", getTasks);

  // Add Task Event
  form.addEventListener("submit", addTask);

  // Remove task event
  taskList.addEventListener("click", removeTask);

  // Clear task Event
  clearBtn.addEventListener("click", clearTasks);

  // Filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

// Get Tasks from Local storage
const getTasks = () => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(task => {
    // Create <li> element
    const li = document.createElement("li");

    // Add Class
    li.className = "collection-item";

    // Create text node and append to <li>
    // li.appendChild(document.createTextNode("HUSK: "));
    li.appendChild(document.createTextNode(task));

    // Create new link element
    const link = document.createElement("a");

    // Add class
    link.className = "delete-item secondary-content";

    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></li>';

    // Append the link to <li>
    li.appendChild(link);

    // Append <li> to the <ul>
    taskList.appendChild(li);
  });
};

// Add Task
const addTask = e => {
  e.preventDefault();
  if (taskInput.value === "") {
    alert("Add a task");
  }

  // Create <li> element
  const li = document.createElement("li");

  // Add Class
  li.className = "collection-item";

  // Create text node and append to <li>
  // li.appendChild(document.createTextNode("HUSK: "));
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const link = document.createElement("a");

  // Add class
  link.className = "delete-item secondary-content";

  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></li>';

  // Append the link to <li>
  li.appendChild(link);

  // Append <li> to the <ul>
  taskList.appendChild(li);

  // Store in Local Storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = "";
  console.log(li);
};

const storeTaskInLocalStorage = task => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Remove Task
const removeTask = e => {
  // We want to use this parentElement, because we want to grab the <a> tag, which is the parent
  // not the <i> which is the child
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      // Remove from Local Storage
      // This is weird, since we don't have any ID. We have to pass in actual element which is the li
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
    // console.log(e.target);
  }
};

// Remove from Local Storage

const removeTaskFromLocalStorage = (taskItem) => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task, index) => {
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
  console.log(taskItem);
}

// Clear Tasks
const clearTasks = e => {
  // Alt. 1 - Slower way to remove
  // taskList.innerHTML = '';

  // Alt 2 - Could loops each one to remove which is faster

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from Local Storage
  clearTasksFromLocalStorage();
};

// Clear tasks from Local Storage
const clearTasksFromLocalStorage = () => {
  localStorage.clear();
}

// Filter Tasks - searching whatever in the Tasks
const filterTasks = e => {
  const text = e.target.value.toLowerCase();

  // If using className, or getElementById() will only return html collection
  // which then we have to convert it to an array in order to use
  // querySelector returns a nodeList
  document.querySelectorAll(".collection-item").forEach(task => {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
};

// Load all event listeners
loadEventListeners();
