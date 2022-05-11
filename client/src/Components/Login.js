import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Login({handleLogin}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        const user = {
          username,
          password
      }
      console.log("user", user)
        fetch('http://localhost:3000/api/v1/login',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
          .then((r) => {
            if (r.ok) {
              r.json().then((user) => handleLogin(user));
             
            }
            
          });
        }
            
  return (
     <> 
     
         {/* <Link to= './signup' > Click to sign up</Link> */}
        <h1>Your Family Medical Clinic</h1>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Username
   
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
       
        <input type="submit" value="Login!" />
      </form>

    
        </>
  )
}