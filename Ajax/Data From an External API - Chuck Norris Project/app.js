const getID = id => document.getElementById(id);

const getJokes = (e) => {
    e.preventDefault();
    const numbers = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${numbers}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);

            let output = '';
            if(response.type === 'success') {
                response.value.forEach(listOfJokes => {
                    output += `
                    <li>${listOfJokes.joke}</li>
                    `;
                });
            } else {
                output += '<li>Something went wrong!</li>';
            }
            document.querySelector('.jokes').innerHTML = output;

        }
    }

    xhr.send();
}

document.querySelector('.get-jokes').addEventListener('click', getJokes);