function multiply() {
  var first = document.getElementById('first').value;
  var second = document.getElementById('second').value;

  var sum = first * second;

  if(isNaN(first) && isNaN(second)) {
    document.getElementById('msg').innerHTML  = "Not a number!";
  } else {
    document.getElementById('msg').innerHTML = "The Result is: " + sum;
  }
}

function divide() {
  var first = document.getElementById('first').value;
  var second = document.getElementById('second').value;

  var sum = first/second;

  if(isNaN(first) && isNaN(second)) {
    document.getElementById('msg').innerHTML = "<p>Not a number</p>";
  } else {
    document.getElementById('msg').innerHTML = "The Result is: " + sum;
  }
}
