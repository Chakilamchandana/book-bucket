const express = require("express");
const { categories, books } = require("./bookdata");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

let cart = [];

//GET all categories on mounting
app.get("/api/getCategories", async (req, res) => {
  res.json(categories);
});

//GET books by categoryId
app.get("/api/books/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;
  const fetchedBooks = books.filter((book) => book.categoryId === categoryId);
  // console.log(fetchedBooks);
  res.json(fetchedBooks);
});

//POST books to cart
app.post("/api/cart/add/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  const selectedBook = books.filter((book) => book.id === bookId);

  if (selectedBook) {
    cart.push(selectedBook);
    res.json({ message: "Successfully added to cart" });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

//DELETE books from cart
app.delete("/api/cart/remove/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  cart = cart.filter((book) => book.id !== bookId);
  res.json({ message: "Successfully removed from cart" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
