import React from 'react'
import { useNavigate } from "react-router";
import {  useState } from 'react'
// this will handle the user auth and then rerout to the home page OR login. Do you prefer once you create your account to be auto logged in OR would you prefer they instead have to login?
// Route HOME
// no password confirmation (div appears when login fails or its a class that gets flagged)
function Authentication({user, setUser}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstname] = useState("")
    const [last_name, setLastname] = useState("")
    const handleUsername = (e) => setUsername(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleFirstname = (e) => setFirstname(e.target.value)
    const handleLastname= (e) => setLastname(e.target.value)
    const nav = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
    
      const newUser = { username, email, password, first_name, last_name}
      if (newUser.username !== "") {
          if (newUser.password.length >= 5 && newUser.password.length <= 10) {
          fetch(`localhost:3000/api/v1/users`, {
              method: "POST",
              headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify(newUser),
                  }).then((r) => r.json());
                  console.log(newUser)
                  setUser(user)
              
                  console.log(user)
                  nav("/");
                }
              } else {
                  alert(
                  "Your must be between 5 and 10 characters"
                  );
              }
              } 

          

  
    return (
        <> 
        <h1>Sign UP</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Username
   
          <input type="text" value={username} onChange={(e) => handleUsername(e)} />
        </label>
        <label>
         email
    
        <input type="text" value={email} onChange={(e) => handleEmail(e)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => handlePassword(e)} />
        </label>
        <label>
         first name
    
        <input type="text" value={first_name} onChange={(e) => handleFirstname(e)} />
        </label>
        <label>
         last name
    
        <input type="text" value={last_name} onChange={(e) => handleLastname(e)} />
        </label>
       
        <input type="submit" value="Sign up!" />
      </form>
      
        </>
    )
}

export default Authentication