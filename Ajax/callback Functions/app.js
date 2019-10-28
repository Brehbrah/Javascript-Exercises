// This is going to mimick a server. Think of this as this is an API
const posts = [
    { title: 'Post One', body: 'this is a post one'},
    { title: 'Post two', body: 'this is a post two'}
];

/* const createPost = (post) => {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

createPost({title: 'Post three', body: 'This is post Three'});

getPosts(); */

// callback is just a function that can be passed in to another function and then called within in the function
const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

createPost({ title: 'Post three', body: 'This is post Three' }, getPosts);

getPosts();