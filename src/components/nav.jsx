import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark-subtle">
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
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/remedies">
                  View Remedies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex  search" role="search">
              <input
                className="form-control me-3"
                type="search"
                placeholder="Search Remedies"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <button className="btn btn-outline-success mx-2" type="button">
                <Link className="btn-outline-success" to="/login">
                  Login
                </Link>
              </button>
              <button className="btn btn-outline-success mx-2" type="button">
                <Link className="btn-outline-success" to="/signup">
                  sign-up
                </Link>
              </button>
              {/* <button className="btn btn-outline-success mx-2" type="button">
                <Link className="btn-outline-success" to="/logout">
                  logout
                </Link>
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
