import { Link } from "react-router-dom";
import Button from "./Button";
import "./module.NavBar.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useState } from "react";
import FullPageForm from "./FullPageForm";

function NavBar() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow((show) => !show);
  }

  return (
    <Container className="navigation">
      <div className="navbar-container">
        <Link to="/">
          <img src="/assets/logo/logo-1.png" alt="logo-1" />
        </Link>

        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="nav-collapse" />
          <Navbar.Collapse id="nav-collapse">
            <Nav className="nav-links">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <button onClick={handleShow} className="nav-button-show">
                Enquire Now
              </button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <button onClick={handleShow} className="nav-button-hide">
          Enquire Now
        </button>

        {show && <FullPageForm handleShow={handleShow} show={show} />}
      </div>
    </Container>
  );
}

export default NavBar;
