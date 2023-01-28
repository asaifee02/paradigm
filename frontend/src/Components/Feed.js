import React, { useEffect, useState } from "react";
import QuoraBox from "./QuoraBox";
import "./css/feed.css";
import Post from "./Post";
import axios from "axios";
import {  selectUser } from "../feature/userSlice";
import {  useSelector } from "react-redux";
function Feed(){
    const user = useSelector(selectUser);
    const [Questions,setQuestions]=useState([]);
    console.log(user);
    useEffect(()=>{
        const questions = async () => {
            await axios.get(`https://api.asaifee.ml/api/business/${user.email}`)
            .then(async (res)=>{
                console.log(res.data);
                const bid = res.data[0]._id
                console.log(bid)
                await axios.get(`https://api.asaifee.ml/api/warehouses/${bid}`)
                .then((res)=>{
                console.log("Amit");
                console.log(res.data);
                console.log("yo");
                setQuestions(res.data);
            })})
            .catch((e)=>{
                console.log(e);
            })
        }
        // const questions = async () => {
            

        //     })
        //     .catch((e)=>{
        //         console.log(e);
        //     })
        // }

        questions()
    },[user.email])
    console.log(Questions)
    if(Questions.length!==0){
        return(
            <div className="feed">
            <QuoraBox text="Warehouses" />
            {
                
                Questions.map((wh,index)=> (<Post key={index} questions={wh.name} time={wh.createdAt} id={wh._id
                }/>)) 
            }        
            </div>
        )
    }
    else{
        return(
            <>
            <QuoraBox style={{width:"700px"}} text="😢 Sorry No warehouses Found"/>
            </>
        )
    }
   
}
export default Feed;