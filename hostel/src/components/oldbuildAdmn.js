import React, { useEffect, useState } from 'react';
import './styles.css'; // Import CSS file
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'; // Import necessary Bootstrap components
import axios from 'axios';
import AdminRoomDetails from './RoomDetailsAdmin';

function AdminHostelRoomOLD() {
    
    
    const navigatebtn= useNavigate();
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [capacity, setCapacity] = useState(null);
    const [currentCap, setCurrentCap] = useState(null);
    const [Std1, setStd1] = useState(null);
    const [Std2, setStd2] = useState(null);
    const [Std3, setStd3] = useState(null);
    const [Std4, setStd4] = useState(null);
    const [Std5, setStd5] = useState(null);

    const [Studentname1, setStudentname1] = useState(null);
    const [StudentBranch1, setStudentBranch1] = useState(null);
    const [StudentYear1, setStudentYear1] = useState(null);


    const [Studentname2, setStudentname2] = useState(null);
    const [StudentBranch2, setStudentBranch2] = useState(null);
    const [StudentYear2, setStudentYear2] = useState(null);

    const [Studentname3, setStudentname3] = useState(null);
    const [StudentBranch3, setStudentBranch3] = useState(null);
    const [StudentYear3, setStudentYear3] = useState(null);   

    const [Studentname4, setStudentname4] = useState(null);
    const [StudentBranch4, setStudentBranch4] = useState(null);
    const [StudentYear4, setStudentYear4] = useState(null);

    const [Studentname5, setStudentname5] = useState(null);
    const [StudentBranch5, setStudentBranch5] = useState(null);
    const [StudentYear5, setStudentYear5] = useState(null);

    
    console.log("thwrw is fasxvjafdsuuakfuydcuakgyefguy");
    console.log(Studentname1);
    console.log(StudentBranch1);


    const back = () => {
        navigatebtn(-1)
    };

    const cancle = () =>{
        console.log("cancle");
        const box= document.getElementById('roomDetailBox')
        box.style.display="none"
        // navigatebtn("/manage_room")
        window.location.reload();
        
    }

    const partners = async ()=>{
    let studentDataArray = [];
    let StduntPath;
    let decideNo = capacity-currentCap;
        for(let i=0;i<decideNo;i++){
            
            switch (i) {
                case 0:
                     StduntPath=Std1;
                    break;
                case 1:
                    StduntPath=Std2;
                    break;
                case 2:
                    StduntPath=Std3;
                    break;
                case 3:
                    StduntPath=Std4;
                    break;
                case 4:
                    StduntPath=Std5;
                    break;
            }
            console.log(StduntPath)

            try {
                const result = await axios.post('http://localhost:3003/allStdone', { StduntPath });
                console.log(result.data);
                if (result.data && result.data.length > 0) {
                    const StudentDetail = result.data[0];
                    studentDataArray.push(StudentDetail);
                    
                } else {
                    console.log('No student data found');
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        }
    

        
        console.log(studentDataArray);
        console.log(studentDataArray[0].Name);
        let deside=capacity-currentCap;

        console.log("asdjhejwehwjwegufywguefygfuygefuywgfuyegfuygfuygfuywgfuy");
        console.log(deside);
        if(deside==1){
            setStudentname1(studentDataArray[0].Name)
            setStudentBranch1(studentDataArray[0].branch)
            setStudentYear1(studentDataArray[0].Year)
        }

        if(deside==2){
            setStudentname1(studentDataArray[0].Name)
            setStudentBranch1(studentDataArray[0].branch)
            setStudentYear1(studentDataArray[0].Year)
            setStudentname2(studentDataArray[1].Name)
            setStudentBranch2(studentDataArray[1].branch)
            setStudentYear2(studentDataArray[1].Year)
        }
        if(deside==3){
            setStudentname1(studentDataArray[0].Name)
            setStudentBranch1(studentDataArray[0].branch)
            setStudentYear1(studentDataArray[0].Year)
            setStudentname2(studentDataArray[1].Name)
            setStudentBranch2(studentDataArray[1].branch)
            setStudentYear2(studentDataArray[1].Year)
            setStudentname3(studentDataArray[2].Name)
            setStudentBranch3(studentDataArray[2].branch)
            setStudentYear3(studentDataArray[2].Year)
        }
        if(deside==4){
            setStudentname1(studentDataArray[0].Name)
            setStudentBranch1(studentDataArray[0].branch)
            setStudentYear1(studentDataArray[0].Year)
            setStudentname2(studentDataArray[1].Name)
            setStudentBranch2(studentDataArray[1].branch)
            setStudentYear2(studentDataArray[1].Year)
            setStudentname3(studentDataArray[2].Name)
            setStudentBranch3(studentDataArray[2].branch)
            setStudentYear3(studentDataArray[2].Year)
            setStudentname4(studentDataArray[3].Name)
            setStudentBranch4(studentDataArray[3].branch)
            setStudentYear4(studentDataArray[3].Year)
        }
        if(deside==5){
            setStudentname1(studentDataArray[0].Name)
            setStudentBranch1(studentDataArray[0].branch)
            setStudentYear1(studentDataArray[0].Year)
            setStudentname2(studentDataArray[1].Name)
            setStudentBranch2(studentDataArray[1].branch)
            setStudentYear2(studentDataArray[1].Year)
            setStudentname3(studentDataArray[2].Name)
            setStudentBranch3(studentDataArray[2].branch)
            setStudentYear3(studentDataArray[2].Year)
            setStudentname4(studentDataArray[3].Name)
            setStudentBranch4(studentDataArray[3].branch)
            setStudentYear4(studentDataArray[3].Year)
            setStudentname5(studentDataArray[4].Name)
            setStudentBranch5(studentDataArray[4].branch)
            setStudentYear5(studentDataArray[4].Year)
        }


        

    }

    useEffect(() => {
        // Define room ranges for each floor
        const floors = {
            'Ground Floor': { start: 40, end: 76 },
            'First Floor': { start: 1, end: 39 },
            'Second Floor': { start: 77, end: 88 }
        };

        

        // Function to generate room elements
        function generateRooms(floorSelector, start, end) {
            const container = document.querySelector(floorSelector);
            const allRoomsDiv = container.querySelector('.all-rooms');
            allRoomsDiv.innerHTML = ''; // Clear existing content if any

            for (let i = start; i <= end; i++) {
                const roomDiv = document.createElement('div');
                roomDiv.className = 'room';
                roomDiv.id = 'room';
                roomDiv.textContent = `R ${i}`;
                roomDiv.addEventListener('click', function() {
                    this.classList.toggle('selected'); // Toggle the 'selected' class on click
                    console.log(i)
                    axios.post('http://localhost:3003/roomdetails',{i})
                    .then (result=> {
                        console.log(result.data);
                        const roomDetails = result.data[0]; // Access the first object in the array
                        const capacity = roomDetails.capacity; // Access the capacity property
                        const roomNumber = roomDetails.roomNum; // Access the 
                        const currentCap = roomDetails.currentCap; // Access the current capacity 
                        const STD1 = roomDetails.GRNno1;
                        const STD2 = roomDetails.GRNno2;
                        const STD3 = roomDetails.GRNno3;
                        const STD4 = roomDetails.GRNno4;
                        const STD5 = roomDetails.GRNno5;
                        
                        

                        setStd1(STD1);
                        setStd2(STD2);
                        setStd3(STD3);
                        setStd4(STD4);
                        setStd5(STD5);
                        setSelectedRoom(i);
                        
                        setCapacity(capacity);
                        setCurrentCap(currentCap)
                        console.log('Capacity:', capacity);
                        console.log('Room Number:', roomNumber);
                        console.log('CurrentCapacity:', currentCap);
                        // setStudentname()
                        const box= document.getElementById('roomDetailBox')
                        box.style.display="block"
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                        // navigatebtn("/RoomDetails")
                        
                    })
                });
                allRoomsDiv.appendChild(roomDiv);

                
            }

        }

        // Generate rooms for each floor
        generateRooms('.book-selector:nth-child(1)', floors['Ground Floor'].start, floors['Ground Floor'].end);
        generateRooms('.book-selector:nth-child(2)', floors['First Floor'].start, floors['First Floor'].end);
        generateRooms('.book-selector:nth-child(3)', floors['Second Floor'].start, floors['Second Floor'].end);
    }, []); // Run only once when the component mounts

    return (
    <>
        <Container>
            <Row className="main">
                <Col>
                    <div className="books">
                        {/* Ground Floor */}
                        <div className="book-selector">
                            <div className="title">Old Building - Ground Floor</div>
                            <div className="rooms">
                                <div className="status">
                                    <div className="item empty"><span className="status-color"></span>Empty</div>
                                    <div className="item full"><span className="status-color"></span>Full</div>
                                    <div className="item partial"><span className="status-color"></span>Partial</div>
                                    <div className="item selected"><span className="status-color"></span>Selected</div>
                                </div>
                                <div className="all-rooms"></div>
                            </div>
                        </div>

                        {/* First Floor */}
                        <div className="book-selector">
                            <div className="title">Old Building - First Floor</div>
                            <div className="rooms">
                                <div className="all-rooms"></div>
                            </div>
                        </div>

                        {/* Second Floor */}
                        <div className="book-selector">
                            <div className="title">Old Building - Second Floor</div>
                            <div className="rooms">
                                <div className="all-rooms"></div>
                            </div>
                        </div>
            <Row>
            <Button className="primary" onClick={back}>Back</Button>
            </Row>
                    </div>
                </Col>
            </Row>

            <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog id='roomDetailBox'>
        <Modal.Header className='bg-secondary'>
          <Modal.Title>Room Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <AdminRoomDetails
        roomNumber={selectedRoom} 
        capacity={capacity} 
        currentCap={currentCap} 
        STD1={Std1} 
        STD2={Std2} 
        STD3={Std3} 
        STD4={Std4} 
        STD5={Std5}
        name1={Studentname1}
        name2={Studentname2}
        name3={Studentname3}
        name4={Studentname4}
        name5={Studentname5}
        branch1={StudentBranch1}
        branch2={StudentBranch2}
        branch3={StudentBranch3}
        branch4={StudentBranch4}
        branch5={StudentBranch5}
        Year1={StudentYear1}
        Year2={StudentYear2}
        Year3={StudentYear3}
        Year4={StudentYear4}
        Year5={StudentYear5}
        
        />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={partners}>Show Srudent Details</Button>
          <Button variant="secondary" onClick={cancle}>Cancel</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </Container>   
    </>
    );
}

export default AdminHostelRoomOLD;
