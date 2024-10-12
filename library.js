class Book {
  
  // Step 1: Create parameterized constructor with the properties

  // Set book details
  setTitle(title) {
    this.title = title;
  }

  setAuthor(author) {
    this.author = author;
  }

  setYear(year) {
    this.year = year;
  }

  
  // Step 2: Create two methods one to borrow and other to return
  
  
  // Get book details
  getDetails() {
    return `${this.title}, written by ${this.author} in ${this.year}`;
  }
}

// Library class managing books
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`${title} has been removed from the library.`);
    } else {
      console.log(`Book not found.`);
    }
  }

  searchBook(title) {
    const book = this.books.find(book => book.title === title);
    if (book) {
      console.log(`Found: ${book.getDetails()}`);
    } else {
      console.log(`Book not found.`);
    }
  }

  listBooks() {
    if (this.books.length === 0) {
      console.log('No books in the library.');
    } else {
      this.books.forEach(book => console.log(book.getDetails()));
    }
  }
}

// Example usage:
const myLibrary = new Library();

// Create new books
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('1984', 'George Orwell', 1949);

// Add books to library
myLibrary.addBook(book1);
myLibrary.addBook(book2);

// List all books
myLibrary.listBooks();

// Borrow a book
book1.borrowBook('Alice');

// Try borrowing the same book again
book1.borrowBook('Bob');

// Return the book
book1.returnBook();

// Try returning the book again
book1.returnBook();

// List books again to verify status
myLibrary.listBooks();
