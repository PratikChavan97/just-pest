import { Link } from "react-router-dom";
import Button from "./Button";
import "./module.NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="navigation container">
        <div className="col-3">
          <Link className="navbar-brand" to="/">
            <img src="src/assets/logo/logo-1.png" alt="logo-1" />
          </Link>
        </div>

        <div className="col-lg-9">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto col-10 nav-container">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Plans and Pricing
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/services"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">
                    Pest Control
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Nest Control
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">
                    Other Services
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Contact Us
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0 col-2">
              <Button>Discover More</Button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
