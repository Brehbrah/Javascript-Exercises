// ! This script is made with ES5. There is example of ES6

// TODO: Book Constructor - To handle creating the actual book object

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// TODO: UI Constructor - Be a set of prototype methods to do things by:
// TODO: adding, deleting, showing alert books to the list

function UI() {
  // Add Book To List
  UI.prototype.addBookToList = function(book) {
    const list = document.getElementById("book-list");
    // Create tr-element
    const row = document.createElement("tr");
    // Insert columns
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>;`;

    // We want to append the list
    list.appendChild(row);
  };

  UI.prototype.showAlert = function(message, className) {
    // We want to create Elements by using a div-tag
    const div = document.createElement("div");
    // Add Classes
    div.className = `alert ${className}`;
    // Add TextNode
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");

    // * Insert alert - We want to use the container which is the parent
    container.insertBefore(div, form); // * Takes two param.(class, what we want to insert before)

    // Timeout after 3 sec.
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  };

  // Clear Fields after submitted
  UI.prototype.clearFields = function() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  };

  // Delete Books
  UI.prototype.deleteBook = function(target) {
      // TODO We want to delete the parent tag which is the <tr>, not <td>
    if(target.className === 'delete') {
        // We want to go up, but have to start from bottom and up (Delegation concept)
        // * ParentElement 1: <td>
        // * ParentElement 2: <tr>
        target.parentElement.parentElement.remove();
    }
  }
}



// Event Listeners for Adding Book
document.getElementById("book-form").addEventListener("submit", e => {
  // Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // TODO: Instantiate the book constructor or book objects
  const book = new Book(title, author, isbn);

  // TODO: Instantiate UI
  const ui = new UI();

  console.log(ui);

  // TODO: Validate the form
  if (title === "" || author === "" || isbn === "") {
    // * Showing Error Alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // TODO: Add Book to List
    ui.addBookToList(book);

    // Showing Success 
    ui.showAlert('Book Added!', 'success')

    // TODO: Clear the input Fields after submitted
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener For delete
document.getElementById('book-list').addEventListener('click', (e) => {

    const ui = new UI();
    
    // Delete the book
    ui.deleteBook(e.target);

    // Show Message alert
    ui.showAlert('Book Removed!', 'success');
    e.preventDefault();
})
