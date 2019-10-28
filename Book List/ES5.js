
const getID = id => document.getElementById(id);


// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor - set of Prototype methods to do things like add/delete/show alerts to book to the list
function UI() {

}

// Add book to the list
UI.prototype.addBookToList = function(book) {
    const list = getID('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cold
    row.innerHTML = `
    <td>${Math.floor(Math.random() * 100)}</td>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>
    `

    list.appendChild(row);
}

// Show alert
UI.prototype.showAlert = function(msg, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text node
    div.appendChild(document.createTextNode(msg));
    // Get parent
    const container = document.querySelector('.container');
    // Get Form
    const form = getID('book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec.
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000)
}

// Delete Book
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// Clear Fields
UI.prototype.clearFields = function() {
    getID('title').value = '';
    getID('author').value = '';
    getID('isbn').value = '';

}


// Event Listeners for adding book(s)
document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = getID('title').value;
    const author = getID('author').value
    const isbn = getID('isbn').value

    // Instantiating a book
    const book = new Book(title, author, isbn);

    // Instantiate UI 
    const ui = new UI();

    if(title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please Fill in all Fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);

        // Show success
        ui.showAlert('Book added!', 'success')

        // Clear Fields
        ui.clearFields();
    }
});

// Event listener for delete 

getID('book-list').addEventListener('click', (e) => {
    e.preventDefault();
    const ui = new UI();

    // Delete the book
    ui.deleteBook(e.target);

    // Show Message
    ui.showAlert('Book Removed!', 'success');
});