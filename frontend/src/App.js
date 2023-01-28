import {React,useEffect} from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import Login from "./Components/auth/Login";
import Quora from './Components/Quora';
import {login,selectUser} from "./feature/userSlice";
import {getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Route ,Routes } from "react-router-dom";
import Shipment from "./Components/Shipment";
import CheckoutPage from "./Components/Checkout";
import BuisCheckoutPage from "./Components/Business";
function App() {
  const auth=getAuth();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();;
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);
  return (
   <>
  <BrowserRouter>
  <div className="App">
 
  </div>
  <Routes>
  <Route exact path="/" element= {user ? <Quora/> : <Login/>} />
      <Route exact path="/shipment" element={<Shipment/>} />
      <Route exact path="/customer" element={<CheckoutPage/>} />
      <Route exact path="/business" element={<BuisCheckoutPage/>} />
      </Routes>
      
     
      </BrowserRouter>
    </>
  );
}

export default App;
