const http = new EasyHTTP;

// User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}


// Get Users
/* const users = http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err)); */

// Create Post
/* http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err)); */

// Update post    
/* http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err)); */

// Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));