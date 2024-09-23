import React, { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OutletSelector from './components/OutletSelector';
import Menu from './components/Menu';
import Cart from './components/Cart';
import logo1 from './Assets/starbucks-coffee.svg';
import logo2 from './Assets/cafe-coffee-day.svg';
import logo3 from './Assets/dunkin-donuts-1.svg';
import logo4 from './Assets/subway-13.svg';

const App = () => {
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const outlets = [
    { id: 1, name: 'Starbucks', logo: logo1, operationalTime: '9 AM - 9 PM' },
    { id: 2, name: 'Cafe Coffee Day', logo: logo2, operationalTime: '7 AM - 10 PM' },
    { id: 3, name: 'Dunkin Donuts', logo: logo3, operationalTime: '8 AM - 8 PM' },
    { id: 4, name: 'Subway', logo: logo4, operationalTime: '10 AM - 10 PM' },
  ];
  
  const menuItems = {
    1: [
      { id: 1, name: 'Coffee', price: 50 },
      { id: 2, name: 'Sandwich', price: 100 },
      { id: 3, name: 'Tea', price: 30 },
      { id: 4, name: 'Juice', price: 70 },
      { id: 5, name: 'Burger', price: 150 },
      { id: 6, name: 'Pasta', price: 200 },
      { id: 7, name: 'Pizza', price: 250 },
      { id: 8, name: 'Salad', price: 80 },
      { id: 9, name: 'Ice Cream', price: 90 },
      { id: 10, name: 'Fried Rice', price: 120 },
    ],
    2: [
      { id: 11, name: 'Thali', price: 150 },
      { id: 12, name: 'Dal Rice', price: 100 },
      { id: 13, name: 'Paneer Curry', price: 180 },
      { id: 14, name: 'Vegetable Biryani', price: 130 },
      { id: 15, name: 'Roti', price: 20 },
      { id: 16, name: 'Curd', price: 40 },
      { id: 17, name: 'Chaat', price: 60 },
      { id: 18, name: 'Samosa', price: 30 },
      { id: 19, name: 'Spring Roll', price: 50 },
      { id: 20, name: 'Momos', price: 80 },
    ],
    3: [
      { id: 21, name: 'Donut', price: 40 },
      { id: 22, name: 'Bagel', price: 60 },
      { id: 23, name: 'Iced Coffee', price: 70 },
      { id: 24, name: 'Muffin', price: 50 },
    ],
    4: [
      { id: 25, name: 'Sub Sandwich', price: 120 },
      { id: 26, name: 'Salad Bowl', price: 100 },
      { id: 27, name: 'Cookies', price: 30 },
      { id: 28, name: 'Wrap', price: 140 },
    ],
  };
  

  const handleSelectOutlet = (outlet) => {
    setSelectedOutlet(outlet);
    setCartItems([]);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => item.id !== id)
    );
  };

  const handlePlaceOrder = () => {
    console.log('YOUR ORDER IS SUCCESSFULLY PLACED');
    toast.success('YOUR ORDER IS SUCCESSFULLY PLACED');
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Food Ordering System</h1>
      <OutletSelector outlets={outlets} onSelectOutlet={handleSelectOutlet} />
      {selectedOutlet && (
        <div className="content-container">
          <div className="menu-section">
            <h2 className="outlet-name">{selectedOutlet.name}</h2>
            <p className="operational-time">Operational Time: {selectedOutlet.operationalTime}</p>
            <Menu menuItems={menuItems[selectedOutlet.id]} onAddToCart={handleAddToCart} />
          </div>
          <div className="cart-section">
            <Cart 
              cartItems={cartItems} 
              onPlaceOrder={handlePlaceOrder} 
              onRemoveFromCart={handleRemoveFromCart} 
            />
          </div>
        </div>
      )}
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar={true} />
    </div>
  );
};

export default App;
