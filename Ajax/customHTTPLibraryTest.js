const http = new easyHTTP();

// Get Posts
const posts = http.get("https://jsonplaceholder.typicode.com/posts", (error, postResponse) => {
    if (error) {
      console.log(error);
    } else {
      console.log(postResponse);
    }
  }
);
