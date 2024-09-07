const express = require("express");
const router = express.Router();

let books = [];

// Create a new book subscription
router.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).json(book);
});

// Read all book subscriptions
router.get("/books", (req, res) => {
  res.json(books);
});

// Read a single book subscription by ID
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

// Update a book subscription by ID
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

// Delete a book subscription by ID
router.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const bookIndex = books.findIndex(b => b.id === bookId);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Book subscription not found" });
    res.status(404).json({ message: "Book not found" });
  }
});

module.exports = router;
