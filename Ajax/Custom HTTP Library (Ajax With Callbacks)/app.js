// This will be used to test our library

const http = new easyHTTP;

// Get Posts
/* http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
    if(err) {
        console.log(err);
    } else {
        console.log(posts)
    }
});
 */

// Get Single Post
/* http.get('https://jsonplaceholder.typicode.com/posts/3', (err, posts) => {
    if (err) {
        console.log(err);
    } else {
        console.log(posts)
    }
});
 */
// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

/* // Create post 
http.post('https://jsonplaceholder.typicode.com/posts', data, (err, posts) => {
    if (err) {
        console.log(err);
    } else {
        console.log(posts)
    }
}); */

// Update Post 
/* http.put('https://jsonplaceholder.typicode.com/posts/1', data, (err, posts) => {
    if (err) {
        console.log(err);
    } else {
        console.log(posts)
    }
}); */

// Delete Post

http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(response)
    }
});