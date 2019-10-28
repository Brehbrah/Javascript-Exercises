const getID = id => document.getElementById(id);

const loadCustomer = () => {
    const xhr = new XMLHttpRequest();

    // True is for asynchronous
    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            // ! Reason we use JSON.parse, is that the content of the .JSON file is just strings
            const customer = JSON.parse(this.responseText);

            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `;
            getID('customer').innerHTML = output;
        }
    }

    xhr.send()
}

const loadCustomers = () => {
    const xhr = new XMLHttpRequest();

    // True is for asynchronous
    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            // ! Reason we use JSON.parse, is that the content of the .JSON file is just strings
            const customers = JSON.parse(this.responseText);

            let output = '';
            customers.forEach((list) => {
                output += `
                    <ul>
                        <li>ID: ${list.id}</li>
                        <li>Name: ${list.name}</li>
                        <li>Company: ${list.company}</li>
                        <li>Phone: ${list.phone}</li>
                    </ul>
                `;
            });
            
            getID('customers').innerHTML = output;
        }
    }

    xhr.send()
}

getID('btn1').addEventListener('click', loadCustomer);
getID('btn2').addEventListener('click', loadCustomers);