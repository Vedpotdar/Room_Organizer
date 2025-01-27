import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function hostel_Nav(){
    let element=
      <>
      <Navbar bg="dark" data-bs-theme="dark" className='position-sticky' sticky='top'>
        <Container>
          <Navbar.Brand href="#">TKIT Hostels</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="manage_room">Manage_Rooms</Nav.Link>
            <Nav.Link className='' href="pay_hostel_fees">pay hostel fees</Nav.Link>
            <Nav.Link className='' href="#">Print Previous Recipt</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    return element;
}

export default hostel_Nav;
