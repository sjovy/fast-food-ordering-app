import React from 'react';

const MenuItem = ({ name, image, price, addToOrder }) => {
  const handleAddToOrder = () => {
    addToOrder({ name, price });
  };

  return (
    <div className="card">
      <img src={`images/${image}`} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <button className="btn btn-primary" onClick={handleAddToOrder}>Add to Order</button>
      </div>
    </div>
  );
};

export default MenuItem;
