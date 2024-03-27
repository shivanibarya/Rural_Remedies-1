import React from 'react'
import singup from './singup'
function login() {
  return (
   <>
<div className="Log">
    <form action='/' method='post' className="login-container">
     <div className="login-header">
      <div>Login</div>
     </div>
    <input type="text" className="login-input" name="email" placeholder="Email" id="username"/>
    <input type="password" className="login-input" name='pass' placeholder="Password (Min-8, Max-15)" id="password" maxLength={10} minLength={5}/>
    <button className="login-button" id="login-button" type='submit'>Login</button>
    <div className="singup-section">
      <p>New user </p>
      <a href="singup">singup</a>
    </div>
   
   </form>

</div>
   </>
  )
}

export default login
