import React, {useState} from "react";
import './SignUp.css'
import '../Landing/Navbar'
import Navbar from "../Landing/Navbar";
import travelPlanner from '../../Images/travelplanner.jpg';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = ()=>{
  
  let details = [];
  const navigate = useNavigate();
  let regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const [email,setEmail]=useState(" ");
    const[pass1,setPass1]=useState(" ");
    const[pass2,setPass2]=useState(" ");
  let errorEl = document.querySelector('#error-el');

    
  function register() {
    if (pass1 === pass2) {
      if (!regularExpression.test(pass1)) {
        errorEl.textContent =
          'password should contain atleast one number and one special character';
        
      } else {
        Axios.post("http://localhost:3001/signup",
    {email:email, paas1:pass1, pass2:pass2
    }).then((response)=>{
      console.log("signed in")
      console.log("payload",response.data)
      localStorage.setItem('id',response.data.payload._id);
      localStorage.setItem('email',response.data.payload.Email);
      navigate('/Landing')

     });

      }
    } else {
      errorEl.textContent = "Password Doesn't match";
    }
  };

    return(
        <>
        <Navbar/>
        <div className="sign-up-container" >
        
        <form onSubmit={register}>
        <h1>Sign Up</h1>
        <p id = "signup-label">Email</p>
        <input id="email-el" required type="email" onChange={(e)=>{
                    setEmail(e.target.value); }}></input>  
        <p id = "signup-label">Password</p>
        <input id="password-el" required type="password" minlength="8" onChange={(e)=>{
                    setPass1(e.target.value); }}></input>
        <p id = "signup-label">Confirm Password</p>
        <input id="confirm-password-el" required type="password" minlength="8" onChange={(e)=>{
                    setPass2(e.target.value); }}></input>
        <div>
        <button id = "sign-up-el" type="submit">Sign Up</button>
        <p id = "error-el"></p>
        </div>
        </form>
            
        </div></>
        
    );
    
}

export default SignUp;