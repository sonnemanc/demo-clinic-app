import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import './App.css';
import Home from "./Components/Home"
import About from "./Components/About"
import Schedule from "./Components/Schedule"
import UserPage from "./Components/UserPage"
import Login from "./Components/Login"
import Logout from "./Components/Logout"
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router";
import Navigation from "./Components/Navigation";

// I assume we will do our fetches for doctor/patient/and appointment data here and pass the data in state to our elements below. If we do, we will need useState and useEffect hooks here as well as anywhere we update state/do CRUD actions
function App() {

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/users')
    .then(r => r.json())
    .then(visitData => console.log(visitData))
  }, []);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  const [user, setUser] = useState([])
  const [visit, setVisit] = useState([])
  const nav = useNavigate()

  function handleLogin(user) {
  
    setUser(user);
    nav("/")
    
  }

  function handleLogOutClick(e) {
    console.log("click", e)
    
    fetch("/api/v1/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        nav("/");
      }
    });
  }

  return (
    <div >
       {user ? `Welcome, ${user.attributes.first_name}` : ``}
                  {user ? <Logout/> : <Login  handleLogin={handleLogin}/>} 
      <button> Sign Up </button>
      <Routes>
        if user <Navigation/>
       {/* <Link to="/invoices">Invoices</Link> |{" "} */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="schedule" element={<Schedule/>} />
        <Route path="user_page" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
