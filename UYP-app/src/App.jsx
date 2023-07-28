import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login';
import UserDetail from './components/Admin/UserDetail/UserDetail'
import UserDetailForm from './components/Admin/UserDetail/UserDetailForm';
import UserList from "./components/Admin/UserList/UserList"
<<<<<<< HEAD
=======
import ContactUs from './components/ContactUs/ContactUs';
>>>>>>> 76975703bf0de173dfc211030985631959024326

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/detail" element={<UserDetail />} />
      <Route exact path="/userForm" element={<UserDetailForm />} />
      <Route exact path="/userList" element={<UserList />} />
<<<<<<< HEAD
=======
      <Route exact path="/contacto" element={<ContactUs />} />
>>>>>>> 76975703bf0de173dfc211030985631959024326
    </Routes>
     
    </>
  )
}

export default App
