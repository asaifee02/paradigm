import React, { useEffect, useState } from "react";
import QuoraBox from "./QuoraBox";
import "./css/feed.css";
import axios from "axios";
import {  selectUser } from "../feature/userSlice";
import {  useSelector } from "react-redux";
import AdminPosts from "./adminpost";
function Admin(){
    const user = useSelector(selectUser);
    const [Questions,setQuestions]=useState([]);
    console.log(user);
    // useEffect(()=>{
    //     const questions = async () => {
    //         await axios.get(`https://api.asaifee.ml/api/business/${user.email}`)
    //         .then(async (res)=>{
    //             console.log(res.data);
    //             const bid = res.data[0]._id
    //             console.log(bid)
    //             await axios.get(`https://api.asaifee.ml/api/warehouses/${bid}`)
    //             .then((res)=>{
    //             console.log("Amit");
    //             console.log(res.data);
    //             console.log("yo");
    //             setQuestions(res.data);
    //         })})
    //         .catch((e)=>{
    //             console.log(e);
    //         })
    //     }
    //     // const questions = async () => {
            

    //     //     })
    //     //     .catch((e)=>{
    //     //         console.log(e);
    //     //     })
    //     // }

    //     questions()
    // },[user.email])
    console.log(Questions)
    if(Questions.length===0){
        return(
            <div className="feed">
            <QuoraBox text="Admin Panel" sub="All Shipments" /> 
            <AdminPosts questions="IQ_344" source="Bharain" destination="Afghanistan" date="23/1/2023" Volume="23000 m3" price="Estimated Price 3069.71082338008 "/>
            <AdminPosts questions="IQ_345 " date="11/1/2023" source="Barbados" destination="Andoraa" Volume="120000 m3" price="Estimated Price 1475.82251124042 "/>
            <AdminPosts questions="IQ_346" date="7/1/2023" Volume="12340 m3" source="Belgium" destination="Argentina" price="Estimated Price 7083.94805395403"/>
            <AdminPosts questions="IQ_347" date="3/1/2023" Volume="12342m3"  source="Bolivia" destination="Argentina"price="Estimated Price 7851.37575979905"/>
            <AdminPosts questions="IQ_348" date="1/1/2023" Volume="2123m3" source="Brazil" destination ="Azerbaijan"price="Estimated Price 8978.90415838673"/>      
            </div>
        )
   }
    else{
        return(
            
            <div className="feed">
            <QuoraBox text="Admin Panel" sub="All Shipments"/>
              
            <AdminPosts questions="IQ_344" source="Bharain" destination="Afghanistan" date="23/1/2023" Volume="23000 m3" price="Estimated Price 3069.71082338008 "/>
            <AdminPosts questions="IQ_345 " date="11/1/2023" source="Barbados" destination="Andoraa" Volume="120000 m3" price="Estimated Price 1475.82251124042 "/>
            <AdminPosts questions="IQ_346" date="7/1/2023" Volume="12340 m3" source="Belgium" destination="Argentina" price="Estimated Price 7083.94805395403"/>
            <AdminPosts questions="IQ_347" date="3/1/2023" Volume="12342m3"  source="Bolivia" destination="Argentina"price="Estimated Price 7851.37575979905"/>
            <AdminPosts questions="IQ_348" date="1/1/2023" Volume="2123m3" source="Brazil" destination ="Azerbaijan"price="Estimated Price 8978.90415838673"/>    
            </div>
        )
    }
   
}
export default Admin;