import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function AdminHeader_Nav()
{
    let element=
      <>
      <Navbar bg="dark" data-bs-theme="dark" className='position-sticky' sticky='top'>
        <Container>
          <Navbar.Brand href="#">TKIT Hostels</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="manage_room_admin">Add or Delete Student</Nav.Link>
            <Nav.Link className='' href="admin_pay_hostel_fees">Pay Hostel Fees</Nav.Link>
            <Nav.Link className='' href="#">Print Previous Recipt</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    return element;
}

export default AdminHeader_Nav;
