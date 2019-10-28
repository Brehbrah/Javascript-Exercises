const loadData = () => {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN - Specify what kinda request we want to make of URL or filename e.g.
    xhr.open('GET', 'data.txt', true);

    /**
     * Ready State Values
     * 0: Request not Initialized
     * 1: Server Connection established
     * 2: Request received
     * 3: Processing request
     * 4: Request Finished and response is ready
     */

    console.log('READYSTATE', xhr.readyState);

    /** HTTP Status 
     *  200 = Everything is Okey!
     *  403: Forbidden
     *  404: Not Found
     **/

     // TODO - Optional used tor spinners/loaders to display it actually loading when fetching data
     xhr.onprogress = function() {
         console.log('READYSTATE', xhr.readyState);
     }

    xhr.onload = function() {
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200) {
            console.log("ok", this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    /* // ! This is the old school way. Have to type more to check if ready state is OKi!
    xhr.onreadystatechange = function() {
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200 && this.readyState === 4) {
            console.log(this.responseText)
        }
    } */

    // We want to have this just in case if something goes wrong
    xhr.onerror = function () {
        console.log('Request error...')
    }
    
    xhr.send();
}

document.getElementById('button').addEventListener('click', loadData);

