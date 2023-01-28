import React  from "react";
import {Avatar} from "@material-ui/core";
import "./css/QuoraBox.css";
import {  selectUser } from "../feature/userSlice";
import { useSelector } from "react-redux";
function QuoraBox(props){
    const user = useSelector(selectUser);
 return(   
 <div className="quoraBox">
<div className="quoraBox__info">
    {/* <Avatar src={user?.photo}/> */}
</div>
<div className="quoraBox__quora">
 <h2 >{props.text}</h2>
</div>
    </div>
)}
export default QuoraBox;