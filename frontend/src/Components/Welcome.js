import React from "react";
import "./css/Welcome.css";
import logo from "./welcome.gif";
function myGreeting() {
    window.location.href="/main"
}
function Welcome(){
    return(
        <>
        <img src={logo} className="welcome_img"/>
        {
             setTimeout(myGreeting, 2000)
        }
        </>
    )
}
export default Welcome;