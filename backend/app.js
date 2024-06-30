const express = require("express");
const { categories, books } = require("./bookdata");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

let cart = [];

/**
 * Redirects to /api/getCategories endpoint.
 * @name Redirect to getCategories
 * @route GET /
 * @function
 * @memberof module:app
 * @inner
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get("/", async (req, res) => {
  res.redirect("/api/getCategories");
});

/**
 * Retrieves all categories.
 * @name Get Categories
 * @route GET /api/getCategories
 * @function
 * @memberof module:app
 * @inner
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get("/api/getCategories", async (req, res) => {
  res.json(categories);
});

/**
 * Retrieves books by categoryId.
 * @name Get Books by CategoryId
 * @route GET /api/books/:categoryId
 * @function
 * @memberof module:app
 * @inner
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {string} req.params.categoryId - The category ID to filter books.
 */
app.get("/api/books/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;
  const fetchedBooks = books.filter((book) => book.categoryId === categoryId);
  // console.log(fetchedBooks);
  res.json(fetchedBooks);
});

/**
 * Adds a book to the cart.
 * @name Add Book to Cart
 * @route POST /api/cart/add/:bookId
 * @function
 * @memberof module:app
 * @inner
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {string} req.params.bookId - The ID of the book to add to cart.
 */
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

/**
 * Removes a book from the cart.
 * @name Remove Book from Cart
 * @route DELETE /api/cart/remove/:bookId
 * @function
 * @memberof module:app
 * @inner
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {string} req.params.bookId - The ID of the book to remove from cart.
 */
app.delete("/api/cart/remove/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  cart = cart.filter((book) => book.id !== bookId);
  res.json({ message: "Successfully removed from cart" });
});

/**
 * Starts the Express server.
 * @name Start Server
 * @function
 * @memberof module:app
 * @inner
 * @param {number} PORT - The port on which the server will listen.
 * @param {function} callback - Optional callback function to run once the server starts.
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
