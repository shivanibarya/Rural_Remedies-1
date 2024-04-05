import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../store/auth";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
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
        console.log("res_data" + JSON.stringify(res_data));
        // storetokenInLocalStorage(res_data.token);
        // eslint-disable-next-line no-undef
        storeTokenInLS(res_data.token);
        toast.success("login successfully");
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        toast.error("login unsuccessfull");
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
            type="email"
            className="login-input"
            name="email"
            placeholder="enter your name"
            id="username"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            className="login-input"
            name="password"
            placeholder="password (Min-8, Max-15)"
            id="password"
            maxLength={10}
            minLength={3}
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
