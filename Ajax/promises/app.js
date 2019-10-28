const posts = [
    {title: 'Post One', body: 'This is a post one'},
    {title: 'Post two', body: 'This is post two'}
];

const createPost = (post) => {
    // resolve: When we are done what we are doing
    // reject: We want to call if there is some kind of error we want to throw
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;
            !error ? resolve() : reject('Error: Something went wrong') 
        }, 2000);
    });
}

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post three', body: 'This is post three'})
.then(getPosts)
.catch((err) => {
    console.log(err)
});