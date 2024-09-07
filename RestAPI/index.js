const express = require("express");
const userRoutes = require("./routes");
const app = express();


app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/msg", (req, res, next) => {
  res.json({ message: "Hello, World!" });
});

app.use(express.json());

app.post("/msg", (req, res, next) => {
  const message = req.body.message;
  res.json({ receivedMessage: message });
});

class Message {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

app.post("/msg", (req, res, next) => {
  const newMessage = new Message(req.body.message);
  res.json({ receivedMessage: newMessage.getContent() });
});
