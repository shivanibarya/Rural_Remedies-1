import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Navbar from "./components/nav";
import About from "./components/About";
import Remedies from "./components/Remedies";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Error from "./components/Error";
import Login from "./components/Login-1";
import Logout from "./components/Logout";


function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Remedies" element={<Remedies />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} /> {/* Correct */}
          <Route path="/Login" element={<Login />} /> {/* Corrected */}
          <Route path="/Logout" element={<Logout />} /> {/* Corrected */}
          <Route path="*" element={<Error />} /> {/* Corrected */}
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
