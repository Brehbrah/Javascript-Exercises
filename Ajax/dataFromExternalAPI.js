const getJokes = e => {
  e.preventDefault();
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
      if(this.status === 200) {
          // response is an object in this Chuck Norris Jokes API.
        const response = JSON.parse(this.responseText);
         console.log(response);

        let output = "";
        if(response.type === "success") {
            // * forEach has an array. The Chuck Norris Joke has an array as an value
            // array.forEach(element => {});
            response.value.forEach((valArr) => {
                output += `<li>${valArr.joke}</li>`;
            })
        } else {
            output += '<li>Someting Went Wrong</li>';
        }

        document.querySelector('.jokes').innerHTML = output;
      }
  }

  xhr.send();
};

document.querySelector(".get-jokes").addEventListener("click", getJokes);
