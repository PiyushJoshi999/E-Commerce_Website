import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity, handlePurchase }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleQuantityChange = (item, quantity) => {
    updateQuantity(item, quantity);
  };

  const handlePurchaseClick = () => {
     handlePurchase();
  }

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>
                {item.title} - ${item.price}
                <input
                  type="number"
                  min="1"
                  placeholder='Quantity'
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                />
                <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </p>
            </div>
          ))}
          <p>Total: ${calculateTotalPrice()}</p>
          <button onClick={handlePurchaseClick}>Purchase</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
