import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        <img
          src="src/assets/logo/logo.png"
          alt="logo"
          className="logo img-fluid"
        />
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <NavLinks path="/" content="Home" />
          <NavLinks path="/about" content="About" />
          <NavLinks path="/services" content="Services" />
          <NavLinks path="/pages" content="Pages" />
          <NavLinks path="/contact" content="Contact" />
        </ul>
      </div>
    </nav>
  );
}

function NavLinks({ path, content }) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link active" aria-current="page" to={path}>
        {content}
      </NavLink>
    </li>
  );
}

export default NavBar;
