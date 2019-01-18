function celsius() {
  var cels = document.getElementById('celsius').value;

  var toFahr = cels * 1.8 + 32;

  if(isNaN(cels)) {
    document.getElementById('msg').innerHTML = "<p>Not a number!</p>";
  } else {
    document.getElementById('msg').innerHTML = "<p>To Fahrenheit: " + toFahr + " °F</p>";
  }
}

function fahrenheit() {
  var fahr = document.getElementById('fahrenheit').value;

  var convert = (fahr - 32) * 5/9;
  var toCels = convert.toFixed(1);

  if(isNaN(fahr)) {
    document.getElementById('msg').innerHTML = "<p>Not a number!</p>";
  } else {
    document.getElementById('msg').innerHTML = "<p>To Fahrenheit: " + toCels + " °C</p>";
  }
}
