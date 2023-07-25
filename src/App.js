import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Home from './Pages/Home';
import About from './Pages/About';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showPurchaseAlert, setShowPurchaseAlert] = useState(false);

  const handleAddToCart = (product, quantity) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.title === product.title);

    if (existingProduct) {
      // If the product already exists in the cart, update its quantity
      const updatedCartItems = cartItems.map((item) =>
        item.title === product.title ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with the given quantity
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    // Filter out the item to be removed from the cartItems array
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.title !== item.title);
    setCartItems(updatedCartItems);
  };

  const handleUpdateQuantity = (item, quantity) => {
    // Update the quantity of the item in the cart
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.title === item.title ? { ...cartItem, quantity } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const handlePurchase = () => {
    setCartItems([]);
    setShowPurchaseAlert(true);

  }

  const productsArr = [

    {

      title: 'Colors',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {

      title: 'Black and white Colors',

      price: 50,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

      title: 'Blue Color',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }
  ];

  return (
    <Router>
      <div>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<ProductList products={productsArr} addToCart={handleAddToCart} />} />
          <Route path="/cart" element={<div>
            <Cart
              cartItems={cartItems}
              removeFromCart={handleRemoveFromCart}
              updateQuantity={handleUpdateQuantity}
              handlePurchase={handlePurchase}
            />
            {showPurchaseAlert && (
              <Alert variant="dark" onClose={() => setShowPurchaseAlert(false)} dismissible>
                <Alert.Heading>Thanks for purchasing!</Alert.Heading>
                <p>Visit again for more exciting deals.</p>
              </Alert>
            )}
          </div>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;
