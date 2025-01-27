import { useState } from 'react';
import './Login.css'
import axios from "axios";
import { Form, useNavigate } from "react-router-dom";



function Login_admin(){

  const [AdminUsername, setUsername]=useState()
  const [AdminPassword, setPassword]=useState()
  const navigate =useNavigate();

  const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:3003/adminLogin',{AdminUsername,AdminPassword})
      .then (result=> {
        console.log(result)
        if(result.data === "Success"){
          navigate('/AdminPanel')
        }
        if(result.data === "Password incorrect"){
          let passwordinput = document.getElementById('password')
          passwordinput.style.borderColor="red"
          alert("Password incorrect");
        }
        if(result.data === "Fail"){
          let usernameinput=document.getElementById('username')
          usernameinput.style.borderColor="red"
          let passwordinput = document.getElementById('password')
          passwordinput.style.borderColor="red"
          alert("user not exist");
        }
        
      })
      .catch(err=> console.log(err))
  }

   let element=
    <>
<div id="login-form">
      <h1>Admin Login</h1>
      <form id='form' onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e) => setPassword   (e.target.value)}/>
        <input type="submit" value="Login" />
      </form>
    </div>
    </>

    return element;
}

export default Login_admin;