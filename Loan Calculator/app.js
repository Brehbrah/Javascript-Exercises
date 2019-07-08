// Calculate results

const calculateResults = () => {
  console.log("calculating...");

  // UI variables
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value); // this will turn into decimal
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly Payment

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    // toFixed() how many decimal we want to have.
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    // Show Results
    document.getElementById("results").style.display = "block";

    // Hide Loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError(" Please Check your Numbers");
  }
};

// Show Error Message

const showError = error => {
  // Hide Results
  document.getElementById("results").style.display = "none";

  // Hide Loader
  document.getElementById("loading").style.display = "none";

  // Create a Div
  const errorDiv = document.createElement("div"); // We want to create a div-element

  // Get Elements
  const card = document.querySelector(".card"); // This will be the parent
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Create Text Node and Eppend to Div;
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  // The parent is the card
  card.insertBefore(errorDiv, heading); // paramenter (passing what we want, passing before something is going to happen )

  // Clear error After 3 seconds
  setTimeout(clearError, 3000); // Parameter(Function, milliseconds)
};

// Clear Error window
const clearError = () => {
  document.querySelector(".alert").remove();
};

// Listen for submit
document.getElementById("loan-form").addEventListener("submit", e => {
  e.preventDefault();

  // Hide results
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "block";
  setTimeout(calculateResults, 1500);
});
