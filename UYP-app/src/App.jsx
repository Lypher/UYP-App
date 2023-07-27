import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login';
import UserDetail from './components/Admin/UserDetail/UserDetail'
import UserDetailForm from './components/Admin/UserDetail/UserDetailForm';

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
    </Routes>
     
    </>
  )
}

export default App
