// We want to mimick our server in our database

const postsMimick = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post Two" },
];

// This is to mimick the server response time with setTimeOut in a synchronus way
/* function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

function getPost() {
  setTimeout(() => {
      let output = '';
      posts.forEach((post) => {
        output += `<li>${post.title}</li>`
      });
      document.body.innerHTML = output;
  }, 1000);
} */

// createPost({ title: "Post Three", body: "This is post Three" });
// getPost();

// This is to mimick the server response time with setTimeOut in a asynchronus way

function createPost(post, callback) {
  setTimeout(() => {
    postsMimick.push(post);
    callback(); // <-- Ths is async. with callback function
  }, 2000);
}

function getPost() {
  setTimeout(() => {
    let output = "";
    postsMimick.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}


createPost({title: 'Post Three', body: 'This is post Three', feet: 'Smelly Feets'}, getPost);
