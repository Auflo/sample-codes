const express = require("express");
const router = express.Router();

let users = [];

// Create a new user
router.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

// Read all users
router.get("/users", (req, res) => {
  res.json(users);
});

// Read a single user by ID
router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Update a user by ID
router.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = req.body;
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Delete a user by ID
router.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;
