import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Home from './Pages/Home';
import About from './Pages/About';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.title === product.title);

    if (existingProduct) {
      // If the product already exists in the cart, update its quantity
      const updatedCartItems = cartItems.map((item) =>
        item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

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
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
  
  );
};

export default App;
