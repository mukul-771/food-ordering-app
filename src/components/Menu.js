import React, { useState } from 'react';

const Menu = ({ menuItems, onAddToCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) + delta, 0) // Ensure quantity doesn't go below 0
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 0;
    if (quantity > 0) {
      onAddToCart({ ...item, quantity });
      // Instead of resetting here, we'll handle it after adding all
    }
  };

  const handleAddAllToCart = () => {
    menuItems.forEach(item => {
      const quantity = quantities[item.id] || 0;
      if (quantity > 0) {
        onAddToCart({ ...item, quantity });
      }
    });
    // Reset quantities after adding all
    setQuantities({});
  };

  return (
    <div className="menu-container">
      <h3 className="menu-title">Menu</h3>
      <ul className="menu-list list-group">
        {menuItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="menu-item-info">
              {item.name} - ₹{item.price}
            </div>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item.id, -1)} className="btn btn-light btn-sm">-</button>
              <span>{quantities[item.id] || 0}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)} className="btn btn-light btn-sm">+</button>
            </div>
          </li>
        ))}
      </ul>
      <button 
        onClick={handleAddAllToCart} 
        className="btn btn-primary btn-block mt-3"
      >
        Add Selected to Cart
      </button>
    </div>
  );
};

export default Menu;
