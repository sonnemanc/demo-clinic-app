import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import './App.css';
import Home from "./Components/Home"
import About from "./Components/About"
import Schedule from "./Components/Schedule"
import UserPage from "./Components/UserPage"
import { useEffect, useState } from 'react'


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
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="user_page" element={<UserPage />} />
   
      </Routes>
    </div>
  );
}

export default App;
