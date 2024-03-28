import React, { useState } from "react";
import singup from "./singup";

function Login() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e)
    const name = e.target.name;
    const value = e.target.value;
    
    setUser({
      ...user,
      [name]: value,
    });
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user)
  }

  return (
    <>
      <div className="Log">
        <form action="/" method="post" className="login-container" onSubmit={handleSubmit}>
          <div className="login-header">
            <div>Login</div>
          </div>
          <input
            type="text"
            className="login-input"
            name="name"
            placeholder="enter your name"
            id="username"
            value={user.name}
            onChange={handleChange}
          />
          <input
            type="password"
            className="login-input"
            name="password"
            placeholder="password (Min-8, Max-15)"
            id="password"
            maxLength={10}
            minLength={5}
            value={user.password}
            onChange={handleChange}
          />
          <button className="login-button" id="login-button" type="submit" >
            Login
          </button>
          <div className="singup-section">
            <p>New user </p>
            <a href="singup">SignUp</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
