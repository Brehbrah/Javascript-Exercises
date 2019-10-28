const getID = id => document.getElementById(id);

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Constructor - Mmethods to do things like add/delete/show alerts to book to the list
class UI {
    addBookToList = book => {
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
    `;
        list.appendChild(row);
    }

    showAlert = (msg, className) => {
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

    deleteBook = (target) => {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields = () => {
        getID('title').value = '';
        getID('author').value = '';
        getID('isbn').value = '';
    }
}

// Local Storage Class

class Store {

    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }

    static displayBooks() {

    }
    static addBook(book) {
        const books = Store.getBooks()
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeBook(isbn) {

        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books))
    }
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

    if (title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please Fill in all Fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);

        // Add to Local Storage
        Store.addBook(book)

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

    // Remove from Local Storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show Message
    ui.showAlert('Book Removed!', 'success');
});