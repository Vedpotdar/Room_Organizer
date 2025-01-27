import React from "react";
import { useState } from "react";
import "./Login.css";
import "./Formhide.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function RoomDetails(props) {
  console.log(`this is Room number ${props.roomNumber}`);
  console.log(props.capacity);
  console.log("This is YEAR And branch");
  console.log(props.name1);
  if(props.name1 != null){
    const list = document.getElementById("Student_list")
    list.style.display="block"
  }


  let capacity = props.capacity;
  let currentcap = props.currentCap;
  let roomnum = props.roomNumber;

  let decideNo = capacity - currentcap;
  console.log(decideNo);
  console.log(roomnum);
  const [GRNno, setGRNno] = useState();

  const book = () => {
    const form_open = document.getElementById("login-form");
    if (currentcap == 0) {
      alert(
        "Capacity of student is Full in this Room. Please check another Room"
      );
    } else {
      form_open.style.display = "block";
    }
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let GRN;
    switch (decideNo) {
      case 0:
        GRN = "http://localhost:3003/stdone";
        break;
      case 1:
        GRN = "http://localhost:3003/stdtwo";
        break;
      case 2:
        GRN = "http://localhost:3003/stdthree";
        break;
      case 3:
        GRN = "http://localhost:3003/stdfour";
        break;
      case 4:
        GRN = "http://localhost:3003/stdfive";
        break;
    }

    axios.post(GRN, { GRNno, roomnum }).then((result) => {
      console.log(result);
      if (result.data == "Success") {
        navigate("/home");
      }
    });
    // axios.post('http://localhost:3003/roomdetailsTwo',{GRNno,roomnum})
    // .then (result=> {
    // console.log(result)
    // if(result.data == "Success"){
    //   navigate('/home')
    // }

    //   })
  };
  return (
    <div>
        <div className="showingdata">
      <h2>Room No: <span>{props.roomNumber}</span></h2>
      <h2>Capacity of Student : <span>{props.capacity}</span></h2>
      <h2>Current Capacity : <span>{props.currentCap}</span></h2>
      </div>
      <div id="Student_list" className="Student_list">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>GRN No.</th>
              <th>Branch</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.name1}</td>
              <td>{props.STD1}</td>
              <td>{props.branch1}</td>
              <td>{props.Year1}</td>
            </tr>
            <tr>
              <td>{props.name2}</td>
              <td>{props.STD2}</td>
              <td>{props.branch2}</td>
              <td>{props.Year2}</td>
            </tr>
            <tr>
              <td>{props.name3}</td>
              <td>{props.STD3}</td>
              <td>{props.branch3}</td>
              <td>{props.Year3}</td>
            </tr>
            <tr>
              <td>{props.name4}</td>
              <td>{props.STD4}</td>
              <td>{props.branch4}</td>
              <td>{props.Year4}</td>
            </tr>
            <tr>
              <td>{props.name5}</td>
              <td>{props.STD5}</td>
              <td>{props.branch5}</td>
              <td>{props.Year5}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div id="form_fees">
        <div id="login-form" className="form_fees">
          <h1 className='bg-primary'>Book Room</h1>
          <form id="form" onSubmit={handleSubmit}>
            <label htmlFor="GRNno">GRN No:</label>
            <input
              type="text"
              id="GRNno"
              name="GRNno"
              onChange={(e) => setGRNno(e.target.value)}
            />

            <input type="submit" value="Click Here" />
          </form>
        </div>
        <button className="btn btn-primary" onClick={book}>
          Book Now
        </button>
      </div>
      {/* Add more details as needed */}
      <br />
    </div>
  );
}

export default RoomDetails;
