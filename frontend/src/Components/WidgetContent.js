import React from "react";
import "./css/WidgetContent.css";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import Shipment from "./Shipment";
import makeshipment from "./makeshipment.png";
import trackshipment from "./trackshipment.png";
import viewpro from "./view.png";
import { useNavigate } from 'react-router-dom';
function WidgetContent(){
   
    return(
      <>
     
     
        <div className="widget__contents">
             <Link to="/shipment" target="_blank"> 
            <div className="widget__content">
                <img src={makeshipment} className="img"/>
                <div className="widget__contentTitle">
                  <h5 onClick={()=>{
                   
                  }}>Make Shipment</h5>
                    {/* <p>The best mobile app development company</p> */}
                </div>
            </div>
            </Link>
            <Link to="">
            <div className="widget__content">
                <img src={trackshipment} className="img"/>
                <div className="widget__contentTitle">
                  <h5 onClick={()=>{
                    
                  }}>Track Shipment</h5>
                    {/* <p>The best mobile app development company</p> */}
                </div>
            </div>
            </Link>
            <div className="widget__content">
                <img src={viewpro} className="img"/>
                <div className="widget__contentTitle">
                  <h5 onClick={()=>{
                    
                  }}>View Products</h5>
                    {/* <p>The best mobile app development company</p> */}
                </div>
            </div>
        </div>
       
        </>
      
    )
}
export default WidgetContent;