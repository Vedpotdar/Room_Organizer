import React, { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Signup(){
  
    const [name, setname]=useState()
    const [username, setUsername]=useState()
    const [password, setPassword]=useState()
    const [fatherName, setfatherName]=useState()
    const [Mobile,setMobile]=useState()
    const [address,setaddress]=useState()
    const [email, setemail]=useState()
    const [branch, setbranch]=useState()
    const [GRNno, setGRNno]=useState()
    const [DOB, setDOB]=useState()
    const [cast, setcast]=useState()
    const [PMobile, setPMobile]=useState()
    const [Year, setyear]=useState()



    const navigate =useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(name,email,password,DOB,branch,cast,PMobile,fatherName,Mobile,address,Year);
        await axios.post('http://localhost:3003/register',{GRNno,name,username,password,email,DOB,branch,cast,fatherName,Mobile,address,PMobile,Year})
        .then (result=> {
          console.log(result)
          navigate('/login')    
          
          if(result.data === "no"){
            alert("Please Choose Different Username")
          }
          if(result.data === "ok"){
            navigate('/login')
          }
        })
        .catch(err=> console.log(err))
    }

    return(
        <>
        <div id="login-form">
      <h1 className='bg-primary'>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={(e) => setname(e.target.value)}/>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>



        <label htmlFor="fatherName">Father Name:</label>
        <input type="text" id="fatherName" name="fatherName" onChange={(e) => setfatherName(e.target.value)}/>

        <label htmlFor="Mobile">Mobile:</label>
        <input type="number" id="Mobile" name="Mobile" onChange={(e) => setMobile(e.target.value)}/>
        <label htmlFor="PMobile">Parent Mobile:</label>
        <input type="number" id="PMobile" name="PMobile" onChange={(e) => setPMobile(e.target.value)}/>

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" onChange={(e) => setaddress(e.target.value)}/>

        <label htmlFor="email">Email id:</label>
        <input type="email" id="email" name="email" onChange={(e) => setemail(e.target.value)}/>

        <label htmlFor="branch">Branch:</label>
        <input type="text" id="branch" name="branch" onChange={(e) => setbranch(e.target.value)}/>
        <label htmlFor="year">Year:</label>
        <input type="text" id="year" name="year" onChange={(e) => setyear(e.target.value)}/>
        
        <label htmlFor="GRNno">GRN No:</label>
        <input type="text" id="GRNno" name="GRNno" onChange={(e) => setGRNno(e.target.value)}/>
        <label htmlFor="DOB">Date of birth :</label>
        <input type="date" id="DOB" name="DOB" onChange={(e) => setDOB(e.target.value)}/>
        <label htmlFor="cast">Cast :</label>
        <select id="cast" name="cast" onChange={(e) => setcast(e.target.value)}>
          <option value=""></option>
          <option value="Open">Open</option>
          <option value="OBC">OBC</option>
          <option value="SC">SC</option>
          <option value="NT">NT</option>
          <option value="Other">Other</option>
        </select>



        <input type="submit" value="Register" />
      </form>
      <p className="col-12 text-center">Already have an account</p>
      <Link to='/login' className="btn col-12">Login</Link>
    </div>
        </>
    )
}

export default Signup;