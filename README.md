# Library Management System Pt.2

## Overview

This repository continues the development of a Library Management System using JavaScript. In this version, you'll extend the basic system by adding functionalities for **borrowing** and **returning** books.

## Task

1. **Extend the `Book` Class**:
   - Add a **parameterized constructor** to initialize the book’s `title`, `author`, `year`, `borrower`, and `isBorrowed` properties when creating a new book object.
   - Add two new methods:
     - `borrowBook(borrowerName)`: Handles the borrowing process. Checks if the book is already borrowed. If not, it assigns the `borrower` and marks the book as borrowed.
     - `returnBook()`: Handles returning a borrowed book. Ensures the book can only be returned if it has been borrowed in the first place.

2. **Update the `Library` Class**:
   - Make sure the `Library` class interacts with the new borrow and return methods.

## Features

- **Set Book Properties**: Set title, author, and year using the constructor when creating a book.
- **Borrowing Books**: Check if a book can be borrowed and mark it as borrowed if available.
- **Returning Books**: Check if a book is borrowed before returning it to the library.

## Getting Started

1. **Fork the Repository**: Click the "Fork" button at the top right corner of this page.

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/<yourusername>/Library-Management-System.git
   ```

3. **Open the Code**: Use your favorite code editor to start coding.

4. **Extend the `Book` Class**: 
   - Define properties for `title`, `author`, `year`, `borrower`, and `isBorrowed`.
   - Implement methods to handle book borrowing and returning functionality.

5. **Modify the `Library` Class**: 
   - Ensure the library can add books and handle borrowing/returning books through interaction with the `Book` class.


Good Luck!
