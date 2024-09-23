# 🥡 Food Ordering System

A responsive web-based Food Ordering System where users can select an outlet, browse the menu, and place an order. Merchants can track and update the status of customer orders in real-time through a dedicated Merchant Dashboard.

This project is a combined effort of **Mukul Meena**, **Om Gupta**, and **Kailash Dusad**.

## 🚀 Features

- **Outlet Selection**: Choose from various outlets like Starbucks, Cafe Coffee Day, Dunkin' Donuts, and Subway.
- **Dynamic Menu**: View the menu items for the selected outlet with prices and add them to the cart.
- **Cart Management**: Easily add, remove, and update items in the shopping cart before placing the order.
- **Payment Page**: Review your order and proceed with the payment.
- **Merchant Dashboard**: Merchants can view all incoming orders and change their status (e.g., Preparing, Pending, Completed).
- **Real-time Order Status Updates**: The merchant can dynamically change the order status through a dropdown menu.

## 🛠️ Project Structure

```bash
food-ordering-system/
├── public/              # Public assets
│   ├── index.html       # Main HTML file
│   └── assets/          # Image and media assets
├── src/                 # Main project source code
│   ├── components/      # React components
│   │   ├── Cart.js      # Cart component
│   │   ├── Menu.js      # Menu component
│   │   ├── OutletSelector.js  # Outlet selection component
│   │   ├── Payment.js   # Payment review component
│   │   ├── Merchant.js  # Merchant Dashboard component
│   │   └── ThankYou.js  # Thank you page component
│   ├── App.js           # Main app component
│   ├── App.css          # Global CSS styling
│   ├── index.js         # App entry point
├── .gitignore           # Files to ignore in git
├── package.json         # Project metadata and npm dependencies
└── README.md            # Project documentation0
```
## 📖 Features Breakdown
**Outlet Selection**
- Users can select from a list of available outlets such as Starbucks, Cafe Coffee Day, Dunkin' Donuts, and Subway.
- Each outlet shows its operating hours.<br>
**Menu and Cart Management**
- After selecting an outlet, users can browse the menu for that outlet.
- Users can add items to their cart, modify quantities, and remove items.
- Cart summary is updated in real-time.<br>
**Payment Page**
- Users can review the items in their cart along with the total amount.
- A confirmation page is shown once the order is placed.<br>
**Merchant Dashboard**
- Merchants can view a table of all orders placed by customers.
- The status of each order (Preparing, Pending, Completed) can be changed using a dropdown.<br>
## 🔧 Future Enhancements
- Backend Integration: Integrate a backend (Node.js, Express, MongoDB) for persistent data storage and real-time updates.
- Authentication: Add user and merchant authentication to restrict access to the dashboard.
- Order History: Allow users to view their past orders and track their current order status.
- Payment Gateway Integration: Connect with a payment gateway for processing payments.
- UI Improvements: Enhance the UI with more animation and design improvements.