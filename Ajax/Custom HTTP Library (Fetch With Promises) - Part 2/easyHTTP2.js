/**
 * 
 * EasyHTTP Library
 * Library for making HTTP Requests
 * 
 * @version 2.0.0
 * @author Khoi Hoang
 * @license MIT
 * 
 * **/

class EasyHTTP {

    // Make an HTTP GET Requests
    get(url) {
        // We use the return to wrap our fetch(), then() and catch() in order to work
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    // Make an HTTP POST request
    post(url, data) {
        return new Promise((resolve, reject) => {
            // We have to use the 2nd param. if we want to post data
            fetch(url, { 
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data) // The body will send the data
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // Make an PUT (Update) request

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data) // The body will send the data
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    // Make an HTTP DELETE Request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Resource Deleted...'))
            .catch(err => reject(err))
        })     
    }
}