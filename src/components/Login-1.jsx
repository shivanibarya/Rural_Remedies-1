import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      //  send data to server
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("loginform", response);
      if (response.ok) {
        const res_data = await response.json();
        // storetokenInLocalStorage(res_data.token);
        // eslint-disable-next-line no-undef
        storeTokenInLS(res_data.token);
        toast("login successfully");
        setUser({
          name: "",
          password: "",
        });
        navigate("/");
      } else {
        toast("login unsuccessfull");
      }
      console.log();
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <>
      <div className="Log">
        <form className="login-container" onSubmit={handleSubmit}>
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
          <button className="login-button" id="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
