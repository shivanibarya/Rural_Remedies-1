import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


const RegistrationForm = () => {
  const [User, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    isDoctor: false,
    speciality: "",
  });

  const handleInput = (e) => {
    console.log(e);
    const name = e.target.name;
    let value = e.target.value;
    if (name === "contact") {
      value = value.trim();
      if (value !== "") {
        value = parseInt(value);
      }
    }

    setUser({
      ...User,
      [name]: value,
    });
  };

  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    const doctorSelect = document.getElementById("doctor");

    const handleDoctorChange = (event) => {
      setIsDoctor(event.target.value === "yes");
    };

    if (doctorSelect) {
      doctorSelect.addEventListener("change", handleDoctorChange);

      return () => {
        doctorSelect.removeEventListener("change", handleDoctorChange);
      };
    }
  }, []);

  const navigate = useNavigate(); //konse page par navigaet karvana hai
  const { storeTokenInLS } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(User);
    try {
      const response = await fetch(`http://localhost:3000/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(User),
      });

      const res_data = await response.json();
      console.log("this is data", res_data.message);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        // localStorage.setItem("token", res_data.token);
        setUser({
          name: "",
          email: "",
          contact: "",
          password: "",
          isDoctor: false,
          speciality: "",
        });
        toast.success("you are successfully registered")
        navigate("/"); //submit hone ke baad yaha navigate ho gaya
      } else {
        toast.error("not a valid registration");
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <div className="sign-main">
      <div className="sign-container">
        <h1 className="text-white">User Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={User.name}
              onChange={handleInput}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={User.email}
              onChange={handleInput}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact*</label>
            <input
              className="contact-input"
              type="number"
              id="contact"
              name="contact"
              required
              value={User.contact}
              onChange={handleInput}
              placeholder="Enter your Phone No."
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={User.password}
              onChange={handleInput}
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="doctor">Are you a doctor?</label>
            <select
              id="doctor"
              name="doctor"
              value={User.isDoctor ? "yes" : "no"}
              onChange={handleInput}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          {isDoctor && (
            <div className="form-group">
              <label htmlFor="specialty">Specialty</label>
              <select
                id="specialty"
                name="specialty"
                value={User.specialty}
                onChange={handleInput}
              >
                <option value="ayurveda">Ayurveda</option>
                <option value="homeopathy">Homeopathy</option>
              </select>
            </div>
          )}

          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
