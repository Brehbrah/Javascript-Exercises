// Load Customer
const loadCustomer = e => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "ajaxJSONDataCustomer.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);

      // ! Reason we use JSON.parse, is that the JSON is strings
      const customer = JSON.parse(this.responseText);

      const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
        `;
      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
};

// Load Customers
const loadCustomers = e => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "ajaxJSONDataCustomers.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);

      // ! Reason we use JSON.parse, is that the JSON is strings
      const customers = JSON.parse(this.responseText);

      let output = "";

      customers.forEach(customer => {
        // If using only equals, then we will overwrite the output var. above
        output += `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
        `;
      });

      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
};

document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);
