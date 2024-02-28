Book Bucket - React Application

<!-- Overview -->

The Book Bucket React application is designed to allow users to explore and add books to their cart based on selected categories. The application features a clean and intuitive user interface with various components for category selection, book details, and a cart.

<!-- Components -->

1. NavBar - Displays the application logo.
2. Logo - Renders the application logo.
3. Main - Acts as the main container for the application content.
4. Box - Represents a pane component.
5. CategoryList - Displays a list of categories with checkboxes for selection.
6. Category - Represents an individual category with a checkbox.
7. BookList - Renders details of selected books, allowing users to add them to the cart.
8. Cart - Displays the user's cart with added books.

<!-- Functionality -->

1. Category Selection:
   Users can select categories of books they are interested in.

2. Book Details:
   Once categories are selected, the application fetches and displays details of books in those categories in the second pane.

3. Add to Cart:
   Users can add books to their shopping cart which will be displayed in the third pane.

4. Remove from Cart:
   Books can be removed from the cart which can again be added from Book Details pane.

<!-- User Interface -->

1. Category Selection Pane:
   a. Lists available categories with checkboxes for selection.
2. Book Details Pane:
   a. Displays details of books based on selected categories.
   b. Users can add books to the cart.
3. Shopping Cart Pane:
   a. Shows a list of books added to the cart.
   b. Provides an option to remove books from the cart.

<!-- Alerts and Messages -->

1. Empty Book List:
   If no books are available for the selected categories, a message informs the user to add books to the cart.

2. Empty Cart:
   When the cart is empty, a message advises the user to select a category and add books to the cart.

<!-- ******************************************** -->

Express Server for Book Bucket Application

The Node with Express server for the Book Bucket application provides APIs to fetch categories, books, and manage the cart. Below is an overview of the key functionalities and routes implemented in the server.

<!-- Overview -->

Server Setup: The server is set up using Express, with middleware such as body-parser for parsing request bodies, Express methods for handling HTTP requests, and cors for handling Cross-Origin Resource Sharing.

<!-- Routes: -->

1. GET /api/getCategories: Fetches all available book categories.
2. GET /api/books/:categoryId: Fetches books based on the provided category ID.
3. POST /api/cart/add/:bookId: Adds a book to the cart.
4. DELETE /api/cart/remove/:bookId: Removes a book from the cart.
5. Cart: The server maintains an in-memory cart (cart array) to store the books added by users.

<!-- ******************************************** -->

bookdata.js:

To maintain simplicity, book data has been manually entered into the bookdata.js file, featuring fictitious information for 23 books distributed across nine distinct categories. Each book in the books object possesses the following attributes:

1. id: A unique identifier assigned to each book.
2. categoryId: Corresponding to one of the nine predefined categories.
3. image: An image representing the book, such as a poster or album cover.
4. author: The name of the book's author.
5. summary: A brief overview providing insights into the content and theme of the book.

To run the project locally (update the serverURL in App.js under frontend/src to "http://localhost:5001" ) and run below commands

1. npx nodemon - to run the server
2. npm start - to run the client

To view the live project click here - https://book-bucket.netlify.app/ (It might take a few minutes for the application to load.)
