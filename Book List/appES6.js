// ! This is Written in ES6. Small changes, but more cleaner look comparing to the ES5 when looking at
// ! the classes. Reminds of how React is written
// TODO: Needs to add local storage

// TODO: Book Constructor - To handle creating the actual book object
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// TODO: UI Constructor - Be a set of prototype methods to do things by:
// TODO: adding, deleting, showing alert books to the list
class UI {
  addBookToList(book) {
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
  }

  showAlert(message, className) {
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
  }

  deleteBook(target) {
    if (target.className === "delete") {
      // We want to go up, but have to start from bottom and up (Delegation concept)
      // * ParentElement 1: <td>
      // * ParentElement 2: <tr>
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Local Storage Class

class Store {
  // This will fetch from the local storage
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      // We need to make it javascript object
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(book => {
      const ui = new UI(); // Here we instantiate the class

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbnArr, index) {
    // We get the arrays from the local storage
    const books = Store.getBooks();

    // ! This is really tricky, because we don't have ID or anything.
    // ! We need to make something that is unique which is the ISBN

    books.forEach(book => {
      if (book.isbn === isbnArr) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// DOM Load Event
document.addEventListener("DOMContentLoaded", Store.displayBooks);

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

    // Add to Local Storage - We don't need to instantiate it, since it's already static
    Store.addBook(book);

    // Showing Success
    ui.showAlert("Book Added!", "success");

    // TODO: Clear the input Fields after submitted
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener For delete
document.getElementById("book-list").addEventListener("click", e => {
  const ui = new UI();

  // Delete the book
  ui.deleteBook(e.target);

  // Remove from Local Storage
  // ! We don't want to get the a-tag, but the previous isbn which is the textContent (console.log() to see!)
  // * parentElement: the a-tag
  // * previousElementSibling: isbn = document.getElementById("isbn").value; from the book-form ID
  // * textContent: the value which is inside the textContent, ergo the "isbn";
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show Message alert
  ui.showAlert("Book Removed!", "success");
  e.preventDefault();
});
