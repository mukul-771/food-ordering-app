import React, { useState } from 'react';

const Merchant = () => {
  // Initial Orders Data
  const [orders, setOrders] = useState([
    { id: 1, outlet: 'Starbucks', item: 'Coffee', status: 'Preparing' },
    { id: 2, outlet: 'Cafe Coffee Day', item: 'Paneer Curry', status: 'Completed' },
    { id: 3, outlet: 'Subway', item: 'Sub Sandwich', status: 'Preparing' },
  ]);

  // Handler to update order status
  const handleStatusChange = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="merchant-container">
      <h2 className="mb-4">Merchant Dashboard - Track Orders</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Outlet</th>
            <th>Item</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.outlet}</td>
              <td>{order.item}</td>
              <td>
                <select
                  className="form-select"
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option value="Preparing">Preparing</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Merchant;
