/**
 * 
 * EasyHTTP Library
 * Library for making HTTP Requests
 * 
 * @version 3.0.0
 * @author Khoi Hoang
 * @license MIT
 * 
 * **/

class EasyHTTP {

    // Make an HTTP GET Requests
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    }

    // Make an HTTP POST request
    async post(url, data) {

        // We have to use the 2nd param. if we want to post data
        const response = await fetch(url, { 
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data) // The body will send the data
        });

        return await response.json();
    }

    // Make an PUT (Update) request

    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data) // The body will send the data
        });

        return await response.json();
    }

    // Make an HTTP DELETE Request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        return await 'Resource deleted...'; 
    }
}