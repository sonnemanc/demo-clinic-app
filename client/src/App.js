import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import './App.css';
import Home from "./Components/Home"
import About from "./Components/About"
import Schedule from "./Components/Schedule"
import UserPage from "./Components/UserPage"
import { useEffect, useState } from 'react'

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


  return (
    <div >
      <Routes>
       {/* <Link to="/invoices">Invoices</Link> |{" "} */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About/>} />
        <Route path="schedule" element={<Schedule/>} />
        <Route path="user_page" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
