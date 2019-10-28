// This will be our library

function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    // ! This is ES5 to write. Alternative is to use arrow function which is ES6 on the function
    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}

// Make an HTTP POST Request

easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);


    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callback(null, this.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT Request

easyHTTP.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);


    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callback(null, this.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request

easyHTTP.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);

    // ! This is ES5 to write. Alternative is to use arrow function which is ES6 on the function
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, 'Post Deleted!');
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}