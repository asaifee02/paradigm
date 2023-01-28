import Rect from "react";
import { Link } from "react-router-dom";
import QuoraHeader from "./QuoraHeader";
import logo from "./customer.png";
import business from "./business.png";
import "./css/Shipment.css";
import CheckoutPage from "./Checkout";
import { Route, Routes, useNavigate } from 'react-router-dom';
function Shipment(){
    return(
        <div>
           <QuoraHeader/>
           <div className="box-container">
           <Link to="/customer"  style={{ textDecoration: 'none !important' , color:"black" }}>
          
  <div className="box"><img src={logo}/>
  <br/><b style={{ textDecoration: 'none' }} >Customer</b>
  </div>
  </Link>
  <Link to="/business"  >
  <div className="box">
  <img src={business}/>
  <br/><b style={{ textDecoration: 'none' ,color:"black" }}>Business</b>
  </div>
  </Link>

</div>

        </div>
    )
}

export default Shipment;