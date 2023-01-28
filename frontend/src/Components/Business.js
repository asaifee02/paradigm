import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { items } from './items'; // import the items from a separate file
import QuoraHeader from './QuoraHeader';
import axios from 'axios';
import "./css/check.css";
import {  selectUser } from "../feature/userSlice";
const BuisCheckoutPage = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState('');
  const [questions,setQuestions]=useState([]);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const user = useSelector(selectUser);
  const handleSubmit = async (e) => {
    await axios.get(`https://5000-amitpareshm-hackathonsn-nn5lss8fogm.ws-us84.gitpod.io/api/business/${user.email}`)
    .then(async (res)=>{
        console.log(res.data);
        const bid = res.data[0]._id
        console.log(bid)
        await axios.get(`https://5000-amitpareshm-hackathonsn-nn5lss8fogm.ws-us84.gitpod.io/api/warehouses/${bid}`)
        .then((res)=>{
        setQuestions(res.data);
        console.log(questions);
    })})
    .catch((e)=>{
        console.log(e);
    })
  }

  return (
    <>
   
    <QuoraHeader/>
    <div className="business-checkout-page">
      <form  className="business-checkout-form">
        <label className='business-label'>
          Select:
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
          Source:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)}  className="business-input-text"/>
        </label>
        <br />
        <label className='business-label'>
          email:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} className="business-input-text"/>
        </label>
        <br />
        <label className='business-label'>
          Destination:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)}className="business-input-text" />
        </label>
        <br />
        <button type="submit" className='business-button-submit' onClick={handleSubmit}>Calculate</button>
      </form>
    </div>
    </>
  );
};

export default BuisCheckoutPage;

