function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request

easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  this.http.onload = () => {
    // ! Uncaught TypeError: Cannot read property 'status' of undefined at XMLHttpRequest.http.onload
    // ! Reason is because are inside an anon. function. The 'this'-keyword pertains since,
    // ! it's in a Different scope. Solution is use arrow funtion by adding something called,
    // ! Lexical. Instead of using function() {}, use rather () => {}
    // ! If you wish to use function, then create a 'let self = this', so it will capture in this scope

    // let self = this;
    if (this.http.status === 200) {
        // null will check the error first
      callback(null, this.http.responseText);
    } else {
        callback('Error: ' + this.http.status);
    }
  };
  this.http.send();
};

// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request
