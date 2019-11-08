// Async & await is just a synthethical sugar wrapped around making promises easier to work with

// Making request if we want to send location to Google or reject if it not
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making requests to ${location}`)
        if(location === 'Google') {
            resolve('Google says hi!');
        } else {
            reject('We can only talk to Google');
        }
    }); 
}

// This addss a little bit extra information onto String and will always resolve
function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`Extra information + ${response}`);
    });
}
/* 
makeRequest('Facebook').then(response => {
    console.log(response);
    return processRequest(response)
}).then(processResponse => console.log(processResponse))
.catch(err => console.log(err)); */

// Async looks like a synchronous code, but it's actually async
async function doWork() {

    // Using try catch is like .then() and .catch(). That's the biggest difference vs not using async function method
    
    try {
        // This says that the code should wait until makeRequest() is finished and then afterward, it will execute the next thing
        // ! it's important to use await keyword, otherwise it will return promise, but not the result of the promise being executed
         const response = await makeRequest('Facebook');
        console.log(response);
        const processResponse = await processRequest(response);
        console.log(processResponse)
    } catch(err) { // this will return the result of  
        console.log(err)
    }
}

doWork()
