import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import OrderSummary from './components/OrderSummary';
// import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

const AppContent = () => {
  const { theme } = useTheme();
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    const existingItem = order.find(orderItem => orderItem.name === item.name);
    if (existingItem) {
      setOrder(order.map(orderItem =>
        orderItem.name === item.name ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      ));
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (name, quantity) => {
    if (quantity <= 0) {
      setOrder(order.filter(item => item.name !== name));
    } else {
      setOrder(order.map(item =>
        item.name === name ? { ...item, quantity } : item
      ));
    }
  };

  const removeItem = (name) => {
    setOrder(order.filter(item => item.name !== name));
  };

  const removeAllItems = () => {
    setOrder([]);
  };

  return (
    <div className={`App ${theme}`}>
      <div className="header-container">
        <Header />
        <div className="order-summary-container">
          <OrderSummary 
            order={order} 
            updateQuantity={updateQuantity} 
            removeItem={removeItem} 
            removeAllItems={removeAllItems} 
          />
        </div>
      </div>
      <Menu addToOrder={addToOrder} />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
