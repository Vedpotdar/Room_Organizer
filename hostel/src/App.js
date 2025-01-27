
import './App.css';
import Home from './Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Intro from './components/enter';
import Login_admin from './components/AdminLogin';
import AdminPanel from './components/AdminPannel';
import Manage_room from './manage_room';
import HostelRoomOLD from './components/oldbuild';
import HostelRoomNEW from './components/newbuild';
import RoomDetails from './components/RoomDetails';
import Hostel_fees from './components/pay_hostel_fees';
import Hostel_fees_Ad from './components/admin_pay_hostel_fees';
import Manage_room_admin from './components/manage_room_admin';
import AdminHostelRoomNEW from './components/newbuildAdmin';
import AdminHostelRoomOLD from './components/oldbuildAdmn';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Intro />}></Route>
      <Route path='/adminLogin' element={<Login_admin />}></Route>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/AdminPanel' element={<AdminPanel />}></Route>
      <Route path='/manage_room' element={<Manage_room />}></Route>
      <Route path='/oldbuild' element={<HostelRoomOLD />}></Route>
      <Route path='/newbuild' element={<HostelRoomNEW />}></Route>
      <Route path='/oldbuildAdmn' element={<AdminHostelRoomOLD />}></Route>
      <Route path='/newbuildAdmin' element={<AdminHostelRoomNEW/>}></Route>
      <Route path='/pay_hostel_fees' element={<Hostel_fees />}></Route>
      <Route path='/admin_pay_hostel_fees' element={<Hostel_fees_Ad />}></Route>
      <Route path='/manage_room_admin' element={<Manage_room_admin />}></Route>
      {/* <Route path='/RoomDetails' element={<RoomDetails />}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
