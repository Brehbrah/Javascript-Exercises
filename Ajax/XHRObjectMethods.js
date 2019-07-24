// ! Ajax and XHR is more complicated than the fetch! Fetch is the newer standard

const loadData = () => {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN - specify the type of request we want to make and the URL, or the filename that we want to make it to
  xhr.open("GET", "data.txt", true); // 3rd Param. is async.

  // console.log('READYSTATE', xhr.readyState)

  // Optional - Used for Spinners/loaders - Will display when you are loading

  xhr.onprogress = function() {
        console.log("READYSTATE", xhr.readyState);

  }
  // We want to check the http Status 200 is OK!
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"

  // ! This is older syntax way to code. 
  /* xhr.onreadystatechange  = function() {
        console.log("READYSTATE", xhr.readyState);

      if(this.status === 200 && this.readyState === 4) {
        console.log(this.responseText);
      }
  } */

  // ! This is newer way to code which is better
   xhr.onload = function() {
         console.log("READYSTATE", xhr.readyState);

    // this is referred to the XHR object and has a property of a status
    if (this.status === 200) {
      //console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  } ;

  xhr.onerror = function() {
      console.log('Request error...')
  }
  xhr.send();

  // Ready State Values
  // 0: Request not Initialized
  // 1: Server Connection Established
  // 2: Request Received
  // 3: Processing Request
  // 4: Request finished and Response is Ready
};

document.getElementById("button").addEventListener("click", loadData);
