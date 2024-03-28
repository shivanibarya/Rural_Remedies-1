import React, { useState, useEffect } from "react";

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
    const value = e.target.value;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(User)
  };

  return (
    <div className="container">
      <h1>User Registration</h1>
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
            type="text"
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
  );
};

export default RegistrationForm;
