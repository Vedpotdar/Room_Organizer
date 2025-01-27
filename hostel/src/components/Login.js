import { useState } from 'react';
import './Login.css'
import axios from "axios";
import { Form, useNavigate } from "react-router-dom";



function Login_user(){

  const [password, setPassword]=useState()
  const [GRNno, setGRNno]=useState()
  const navigate =useNavigate();

  const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:3003/login',{GRNno,password})
      .then (result=> {
        console.log(result)
        if(result.data === "Success"){
          navigate('/home')
        }
        if(result.data === "Password incorrect"){
          let passwordinput = document.getElementById('password')
          passwordinput.style.borderColor="red"
          alert("Password incorrect");
        }
        if(result.data === "user not exist"){
          let usernameinput=document.getElementById('GRNno')
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
      <h1 className='bg-primary'>Login</h1>
      <form id='form' onSubmit={handleSubmit}>
        <label htmlFor="GRNno">GRN No:</label>
        <input type="text" id="GRNno" name="GRNno" onChange={(e) => setGRNno(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e) => setPassword   (e.target.value)}/>
        <input type="submit" value="Login" />
      </form>
    </div>
    </>

    return element;
}

export default Login_user;