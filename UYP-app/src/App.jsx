import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login';
import ContactUs from './components/ContactUs/ContactUs';
import UserList from './components/Admin/UserList/UserList';
import UserDetailForm from './components/Admin/UserDetail/UserDetailForm';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path='/contact' element={<ContactUs />}/>
      <Route exact path='/userList' element={<UserList />}/>
      <Route exact path='/userForm' element={<UserDetailForm />}/>
      
    </Routes>
     
    </>
  )
}

export default App
