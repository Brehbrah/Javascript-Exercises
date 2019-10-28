const getID = id => document.getElementById(id);

const getText = () =>  {
    // fetch returns promises
    fetch('test.txt')
    // res.text returns a promise
    .then(res => res.text()) 
    .then((data) => { // To get respond from promises, we have to use .then()
        console.log(data)
        getID('output').innerHTML = data;
    })
    .catch((err) => {
        console.log(err);
        getID('output').innerHTML = err;
    });
}

const getJSON = () =>  {
    // fetch returns promises
    fetch('posts.json')
    // res.text/json returns a promise
    .then((res) => res.json()) // To get respond from promises, we have to use .then()
    .then((data) => {
        console.log(data);
        let output = '';
        data.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        getID('output').innerHTML = output;
    })
    .catch(err => getID('output').innerHTML = err);
}

// Get from external API
const getExternal = () =>  {
    // fetch returns promises
    fetch('https://api.github.com/users')
    .then((res) => {
        return res.json(); // res.text/json returns a promise
    }) // To get respond from promises, we have to use .then()
    .then((data) => {
        console.log(data);
        let output = '';
        data.forEach((user) => {
            output += `<li>${user.login}</li>`;
        });
        getID('output').innerHTML = output;
    })
    .catch((err) => {
        console.log(err);
        getID('output').innerHTML = err;
    });
}



getID('btn1').addEventListener('click', getText);

getID('btn2').addEventListener('click', getJSON);

getID('btn3').addEventListener('click', getExternal);

