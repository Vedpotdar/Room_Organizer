import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AdminBuildings(){

    let element=
      <>
     <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
        <Tab eventKey="OLD Building" title="OLD Building">
        <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Old Building
        <Link to='/oldbuildAdmn' className="btn col-12">Click here to check Old building Rooms</Link>
      </Button>

    </div>
      </Tab>
      <Tab eventKey="NEW Building" title="NEW Building">
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
      New Building
        <Link to='/newbuildAdmin' className="btn col-12">Click here to check New building Rooms</Link>
      </Button>
    </div>
      </Tab>
    </Tabs>
    </>
    return element;
}

export default AdminBuildings;
