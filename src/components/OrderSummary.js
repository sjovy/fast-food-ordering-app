import React from 'react';

const OrderSummary = ({ order, updateQuantity, removeItem, removeAllItems }) => {
  const totalPrice = order.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);

  return (
    <div className="order-summary">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Order Summary</h2>
        <button className="btn btn-danger btn-sm" onClick={removeAllItems}>Remove All Items</button>
      </div>
      <ul className="list-group mt-3">
        {order.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.name} - ${item.price}</span>
            <span className="order-controls">
              <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.name, item.quantity - 1)}>-</button>
              <span className="mx-2">{item.quantity}</span>
              <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.name, item.quantity + 1)}>+</button>
              <button className="btn btn-sm btn-danger ml-2" onClick={() => removeItem(item.name)}>Remove</button>
            </span>
          </li>
        ))}
      </ul>
      <h2 className="mt-3">Total: ${totalPrice}</h2>
    </div>
  );
};

export default OrderSummary;
