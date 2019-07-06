const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

// Clear Input
taskInput.value = ""; // This will clear out the value from the input

// form.addEventListener('submit', runEvent)

// Keydown - will auto bind on the screen when typing at the same time
// taskInput.addEventListener('keydown', runEvent);

// keyup  - will show when you let off the button
// taskInput.addEventListener("keyup ", runEvent);

// keypress - sum: keydown + keyup
// taskInput.addEventListener('keypress', runEvent)

// Focus - when you click on something on the input box, window etc.
// taskInput.addEventListener('focus', runEvent);

// Blur - when you are clicking out from an input box, window etc.
// taskInput.addEventListener("blur", runEvent);

// Cut - right mouse click and then click on 'cut' function
// taskInput.addEventListener("cut", runEvent);

// Paste - right mouse click and then click on 'paste' function
// taskInput.addEventListener("paste", runEvent);

// Input - will start to fire event when typing, cut or paste.
taskInput.addEventListener("input", runEvent);

// Change Event - Will happen when you click for example on select->option value semantic
select.addEventListener("change", runEvent);

function runEvent(e) {
  // e.preventDefault();
  console.log(`Event Type: ${e.type}`);
  console.log(e.target.value);

  // it's like onChange on react
  // heading.innerText = e.target.value;

  // Get input Value
  // console.log(taskInput.value);
}
