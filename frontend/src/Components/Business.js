import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { items } from './items'; // import the items from a separate file
import QuoraHeader from './QuoraHeader';
import axios from 'axios';
import "./css/check.css";
const BuisCheckoutPage = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add the selected item to the cart
    //   dispatch({ type: 'ADD_ITEM', payload: { item: selectedItem, quantity } });
    //   // Make a POST request to submit the data
    //   await axios.post('/api/checkout', { cart, location });
      alert('Order placed successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to place order');
    }
  }

  return (
    <>
   
    <QuoraHeader/>
    <div className="business-checkout-page">
      <form onSubmit={handleSubmit} className="business-checkout-form">
        <label className='business-label'>
          Select Item:
          <select value={selectedItem} onChange={e => setSelectedItem(e.target.value)} className="business-select">
            <option value="" disabled>Select an item</option>
            {items.map(item => (
              <option key={item.name} value={item.name}>{item.name}</option>
            ))}
          </select>
        </label>
        <br />
        <label className='business-label'>
          Quantity:
          <input type="number" min={1} value={quantity} onChange={e => setQuantity(e.target.value)} className="business-input-number"/>
        </label>
        <br />
        <label className='business-label'>
          Location:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)}  className="business-input-text"/>
        </label>
        <br />
        <label className='business-label'>
          Destination:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} className="business-input-text"/>
        </label>
        <br />
        <label className='business-label'>
          Weight:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)}className="business-input-text" />
        </label>
        <br />
        <button type="submit" className='business-button-submit'>Submit</button>
      </form>
    </div>
    </>
  );
};

export default BuisCheckoutPage;

