import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import './App.css';
import Home from "./Components/Home"
import About from "./Components/About"
import Schedule from "./Components/Schedule"
import UserPage from "./Components/UserPage"


function App() {
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
