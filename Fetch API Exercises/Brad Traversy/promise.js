// This is a modern version
// A lot of libraries dealing with responses instead we have to deal by creating yourself of callback.js

const posts = [
    {title: 'Post One', body: 'this is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

const createPost = (addPost) => {
    // This is to creating by dealing promises
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            posts.push(addPost);

            const err = false;

            if(!err) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 5000)
    
    });
}
/* 
createPost({ title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(err => console.log(err));; 
*/

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye');
});

// fetch API returns promise
// Fetch needs to use 2x '.then()'
// first '.then()' needs to format it to JSON
// second '.then()' gives you the data
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

// Promise.all is better to use than using multiples of .then().then().then() etc.
Promise.all([promise1, promise2, promise3, promise4])
.then(val => console.log("Promise.all(): ", val))
.catch(err => console.log(err));

// async await is a way to handle responses. 

async function init() {
    // We wait first this to be done
    await createPost({ title: 'Post Three', body: 'This is post three'});

    // when await is done then we move to getPosts()
    getPosts();
}

// Async await is just more elegant and cleaner way to handle promises instead of .then() etc.
init();

// Async await with fetch

async function fetchUsers() {
    const res =  await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log("async with fetch API: ", data)
}


fetchUsers();
