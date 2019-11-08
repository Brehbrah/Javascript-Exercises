// This is an exercises to mimick a server
// This is the old school way
const posts = [
    {title: 'Post One', body: 'this is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

const createPost = (addPost, callback) => {
    setTimeout(() => {
        posts.push(addPost);
        callback();
    }, 2000);
}

// This is to get the post
getPosts();

// The callback function just "painted" on the document.body. The reason is that we use getPosts as the second parameter
// Is because after we post everything, then it will "refresh" by displaying the new getPosts
createPost({ title: 'post Three', body: 'This is post three' }, getPosts);