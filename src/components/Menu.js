import React from 'react';
import MenuItem from './MenuItem';

const menuItems = [
  { name: 'Burgers', image: 'burger.jpg', price: '5.99' },
  { name: 'Pizza', image: 'pizza.jpg', price: '7.99' },
  { name: 'Sushi', image: 'sushi.jpg', price: '9.99' },
  { name: 'Hotdogs', image: 'hotdog.jpg', price: '4.99' },
  { name: 'Kebabs', image: 'kebab.jpg', price: '6.99' },
  { name: 'French fries', image: 'french_fries.jpg', price: '2.99' },
  { name: 'Salads', image: 'salad.jpg', price: '4.99' },
  { name: 'Soft drinks', image: 'soft_drink.jpg', price: '1.99' },
  { name: 'Milkshake', image: 'milkshake.jpg', price: '3.99' },
  { name: 'Burrito', image: 'burrito.jpg', price: '6.99' },
  { name: 'Desserts', image: 'dessert.jpg', price: '3.99' },
  { name: 'Chicken wings', image: 'chicken_wings.jpg', price: '5.99' },
];

const Menu = ({ addToOrder }) => {
  return (
    <div className="container">
      <div className="row">
        {menuItems.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <MenuItem name={item.name} image={item.image} price={item.price} addToOrder={addToOrder} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
