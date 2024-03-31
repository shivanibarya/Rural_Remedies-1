// Contact.jsx
import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

const defaultContact = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [contactData, setContactData] = useState(defaultContact);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setContactData({
        name: user.name,
        email: user.email,
        message: "",
      });
    }
  }, [user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
  
      if (response.ok) {
        setContactData(defaultContact);
        alert("Contact submitted");
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Error submitting contact:", error);
      alert("Error submitting contact");
    }
  };
  

  return (
    <>
      <div className="main">
        <div className="Log">
          <form className="login-container" onSubmit={handleSubmit}>
            <div className="login-header">
              <div>Contact-us</div>
            </div>
            <input
              type="text"
              className="login-input"
              name="name"
              id="username"
              onChange={handleInput}
              value={contactData.name}
            />
            <input
              type="email"
              className="login-input"
              name="email"
              id="email"
              onChange={handleInput}
              value={contactData.email}
            />
            <textarea
              name="message"
              id="message"
              cols="42"
              rows="2"
              value={contactData.message}
              onChange={handleInput}
            ></textarea>
            <button className="login-button" id="login-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
