import React from 'react';

const Cart = ({ cartItems, onPlaceOrder, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container mt-4">
      <h3 className="cart-title">Cart</h3>
      <p className="cart-summary">Items in cart: {cartItems.length}</p>
      <ul className="cart-list list-group">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="item-details">
              {item.name} {item.quantity > 1 && `(X${item.quantity})`} - ₹{item.price * item.quantity}
            </div>
            <button onClick={() => onRemoveFromCart(item.id)} className="btn btn-danger btn-sm">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h5 className="total-price">Total: ₹{totalPrice}</h5>
      <button onClick={onPlaceOrder} className="btn btn-primary btn-block mt-2">
        Place Order
      </button>
    </div>
  );
};

export default Cart;
