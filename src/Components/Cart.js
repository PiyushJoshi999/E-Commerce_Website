import React from 'react';

const Cart = ({ cartItems }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h4>Cart</h4>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>
                {item.title} - ${item.price}
              </p>
            </div>
          ))}
          <p>Total: ${calculateTotalPrice()}</p>
          {/* Add buttons or icons for removing items from the cart */}
        </div>
      )}
    </div>
  );
};

export default Cart;
