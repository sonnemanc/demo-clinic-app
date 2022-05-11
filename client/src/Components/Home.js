import React from 'react'
import {  Link } from "react-router-dom";
function Home({user}) {
  console.log(user)
  return (
    <div>Home
    <nav>
    {/* <Link to="/">Home</Link> */}
    <br/>
    <h3>Hello, {user}</h3>
    </nav>
  </div>
  )
}

export default Home