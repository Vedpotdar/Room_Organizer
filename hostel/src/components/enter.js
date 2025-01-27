import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Intro(){

    let element=
      <>
     <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
        <Tab eventKey="Admin" title="Admin">
        <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Login As a Admin
        <Link to='/adminLogin' className="btn col-12">Login</Link>
      </Button>

    </div>
      </Tab>
      <Tab eventKey="User" title="User">
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Login As a User
        <Link to='/login' className="btn col-12">Login</Link>
      </Button>
      <Button variant="secondary" size="lg">
        Sign-up As a User
        <Link to='/register' className="btn col-12">Sign up</Link>
      </Button>
    </div>
      </Tab>
    </Tabs>
    </>
    return element;
}

export default Intro;
