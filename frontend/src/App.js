import React, { useEffect, useState } from "react";

export default function App() {
  // const serverURL = "http://localhost:5001";
  const serverURL = "https://book-bucket-rsf8.onrender.com";
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  //Fetching all categories during initial mount
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(`${serverURL}/api/getCategories`);
        if (!res.ok) {
          throw new Error(`Failed to fetch categories`);
        }
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    }
    fetchCategories();
  }, []);

  //Fetching the books associated with the categories selected
  async function fetchBooks(selectedCatIds) {
    try {
      if (selectedCatIds.length === 0) {
        setBooks([]); // Clear the books if no categories are selected
        return;
      }
      const promises = selectedCatIds.map((categoryId) =>
        fetch(`${serverURL}/api/books/${categoryId}`).then((res) => res.json())
      );

      const booksByCat = await Promise.all(promises);
      const allBooks = booksByCat.flat();
      setBooks(allBooks);
    } catch (error) {
      console.error("Error fetching book");
    }
  }

  //Function to handle the category selection
  function handleCheckChange(categoryId) {
    setSelectedCategories((prevCat) => {
      const updatedCategories = prevCat.includes(categoryId)
        ? prevCat.filter((id) => id !== categoryId)
        : [...prevCat, categoryId];

      // Fetch books after updating the selected categories
      fetchBooks(updatedCategories);

      return updatedCategories;
    });
  }

  //Function to add a book to the cart
  async function addToCart(bookId) {
    try {
      const response = await fetch(`${serverURL}/api/cart/add/${bookId}`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to add to cart.");
      }
      setCart((prevCart) => {
        const updatedCart = [
          ...prevCart,
          books.find((book) => book.id === bookId),
        ];
        return updatedCart;
      });
    } catch (error) {
      console.error("Couldn't add the book to cart");
    }
  }

  async function removeBook(bookId) {
    try {
      const response = await fetch(`${serverURL}/api/cart/remove/${bookId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to remove from cart");
      }
      setCart((prevCart) => prevCart.filter((book) => book.id !== bookId));
    } catch (error) {
      console.error("Failed to remove book from cart");
    }
  }

  return (
    <div>
      <NavBar />
      <Main>
        <Box>
          <CategoryList
            categories={categories}
            selectedCategories={selectedCategories}
            onCheckChange={handleCheckChange}
          />
        </Box>
        <Box>
          <BookList books={books} onAdd={addToCart} cart={cart} />
        </Box>
        <Box>
          <Cart cart={cart} onDelete={removeBook} />
        </Box>
      </Main>
      <Footer />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h1>Book Bucket 🪣</h1>
    </div>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  return <div className="pane">{children}</div>;
}

function CategoryList({ categories, selectedCategories, onCheckChange }) {
  return (
    <>
      <h2>Select your favourite genre 🎨</h2>
      <ul className="list list-items">
        {categories?.map((category) => (
          <Category
            key={category.id}
            category={category}
            isChecked={selectedCategories.includes(category.id)}
            onCheckChange={onCheckChange}
          />
        ))}
      </ul>
    </>
  );
}

function Category({ category, isChecked, onCheckChange }) {
  return (
    <li key={category.id}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheckChange(category.id)}
        />
        <h3>{category.name}</h3>
      </label>
    </li>
  );
}

function BookList({ books, onAdd, cart = [] }) {
  return (
    <>
      <h2>Details 📚</h2>
      <div className="details">
        {books?.length === 0 ? (
          <p className="alert">
            Select the category to preview details of the books
          </p>
        ) : (
          <ul className="details-overview">
            {books?.map((book) => {
              const isInCart = cart.some((item) => item.id === book.id);
              return (
                <li key={book.id}>
                  <img className="poster" src={book.image} alt={book.title} />
                  <h3>{book.title}</h3>
                  <p>
                    by<p className="author">{book.author}</p>
                  </p>
                  <p>{book.summary}</p>
                  {!isInCart && (
                    <button className="btn-add" onClick={() => onAdd(book.id)}>
                      Add to Cart
                    </button>
                  )}
                  {isInCart && <em>Added to Cart</em>}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

function Cart({ cart, onDelete }) {
  return (
    <div className="list list-items">
      <h2>Your Cart 🛒 </h2>
      {cart.length === 0 ? (
        <p className="alert">
          Your cart is empty. Select your category and add books to cart
        </p>
      ) : (
        <ul>
          {cart.map((book) => (
            <li className="cart-items" key={book.id}>
              <img
                src={book.image}
                className="thumbnail-img"
                alt={book.title}
              />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button className="btn-delete" onClick={() => onDelete(book.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p> ~ Made wholly for learning purposes ~</p>
      <p>
        <span>
          <a href="https://chandanachakilam.netlify.app/">Chandana Chakilam</a>
        </span>
        &copy;2024
      </p>
    </footer>
  );
}
