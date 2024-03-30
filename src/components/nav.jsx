import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

function Nav() {
  const { isLoggedIn, logoutUser } = useAuth(); // Destructure the logoutUser function from the useAuth hook

  const handleLogout = () => {
    logoutUser(); // Call the logoutUser function when the logout button is clicked
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <img className="logo" src="src/assets/logo.webp" alt="Logo" />
          <h2 className="Nav-title">Remedies</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item ">
                <Link className="nav-link nav-link1 text-primary active d-block" aria-current="page" to="/">
                  Home
                  {/* <p className="nav-sty"></p> */}
                </Link> 
               
              </li>
            
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/about">
                  About
                </Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link text-primary" to="/remedies">
                  View Remedies
                </Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link text-primary" to="/contact">
                  Contact Us
                </Link>
              </li>
              
            </ul>
            <form className="d-flex search align-items-center" role="search">
              <input
                className="form-control me-3 h-25 w-50"
                type="search"
                placeholder="Search Remedies"
                aria-label="Search"
              />
              <button className="btn btn-outline-success search-btn" type="submit">
                Search
              </button>

              {isLoggedIn ? (
                <button
                  className="mx-2 h-25"
                  type="button"
                  onClick={handleLogout} // Add onClick handler for logout button
                >
                  Logout
                </button>
              ) : (
                <>
                  <p className="mx-2 my-0 " type="button">
                    <Link className="text-decoration-none hover:white d-flex " to="/login">
                      Login
                    </Link>
                  </p>
                  <p className=" mx-2 my-0 " type="button">
                    <Link className="text-decoration-none" to="/signup">
                      Sign-Up
                    </Link>
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
