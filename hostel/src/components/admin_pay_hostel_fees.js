import AdminHeader_Nav from "./AdminHeader_Nav";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Hostel_fees(){

    const [name, setname]=useState()
    const [Branch, setBranch]=useState()
    const [Class, setClass]=useState()
    const [GrnNo, setGrnNo]=useState()
    const [Amount, setAmount]=useState()

    
    const navigate =useNavigate()

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        axios.post('http://localhost:3003/feesData',{name,Branch,Class,GrnNo,Amount})
        .then (result=> {console.log(result)
            alert("SuccessFull .. !");
            navigate('/AdminPanel')
        })
        .catch(err=> console.log(err))
    }

    return(
        <>
        <AdminHeader_Nav/>
        <div id="login-form">
        <h1 className='bg-primary'>Pay Your Hostel Fees</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={(e) => setname(e.target.value)}/>

        <label htmlFor="branch">Branch:</label>
        <input type="text" id="branch" name="branch" onChange={(e) => setBranch  (e.target.value)}/>

        <label htmlFor="class">Class:</label>
        <input type="text" id="class" name="class" onChange={(e) => setClass  (e.target.value)}/>

        <label htmlFor="grnno">GR Number:</label>
        <input type="text" id="grnno" name="grnno" onChange={(e) => setGrnNo   (e.target.value)}/>

        
        <label htmlFor="amount">Amount:</label>
        <input type="text" id="amount" name="amount" onChange={(e) => setAmount (e.target.value)}/>

        <input type="submit" value="Proceed to Pay" />
        </form>
        </div>
        </>
    )
}

export default Hostel_fees;