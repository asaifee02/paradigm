import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TimeAgo from 'javascript-time-ago'
import {Provider} from "react-redux";
import Shipment from './Components/Shipment';
import en from 'javascript-time-ago/locale/en.json';
import CheckoutPage from './Components/Checkout';
import BuisCheckoutPage from './Components/Business';
// import ru from 'javascript-time-ago/locale/ru.json'
import store from "./app/store";
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(en);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CheckoutPage/> */}
      {/* <BuisCheckoutPage/> */}
    <App />
    {/* <Shipment/> */}
    </Provider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
