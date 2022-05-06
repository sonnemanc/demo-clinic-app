import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import './App.css';
import Home from "./Components/Home"
import About from "./Components/About"
import Schedule from "./Components/Schedule"
import UserPage from "./Components/UserPage"

// I assume we will do our fetches for doctor/patient/and appointment data here and pass the data in state to our elements below. If we do, we will need useState and useEffect hooks here as well as anywhere we update state/do CRUD actions
function App() {
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
