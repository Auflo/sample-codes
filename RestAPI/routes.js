const express = require("express");
const router = express.Router();

let books = [];

/**
 * POST /books
 * 
 * This route creates a new book subscription.
 * It expects a book object in the request body and adds it to the books array.
 * Responds with the created book object and a status code of 201.
 */
router.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).json(book);
});

/**
 * GET /books
 * 
 * This route retrieves all book subscriptions.
 * It responds with the entire books array in JSON format.
 */
router.get("/books", (req, res) => {
  res.json(books);
});

/**
 * GET /books/:id
 * 
 * This route retrieves a single book subscription by its ID.
 * It searches the books array for a book with the matching ID.
 * If found, it responds with the book object; otherwise, it responds with a 404 status and an error message.
 */
router.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const book = books.find(b => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book subscription not found" });
    res.status(404).json({ message: "User not found" });
  }
});

/**
 * PUT /books/:id
 * 
 * This route updates a book subscription by its ID.
 * It finds the book in the books array by ID and replaces it with the new data from the request body.
 * If the book is found and updated, it responds with the updated book object; otherwise, it responds with a 404 status and an error message.
 */
router.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const bookIndex = books.findIndex(b => b.id === bookId);
  if (bookIndex !== -1) {
    books[bookIndex] = req.body;
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: "Book subscription not found" });
    res.status(404).json({ message: "User not found" });
  }
});


module.exports = router;
