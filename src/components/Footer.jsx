import { Col, Container, Row } from "react-bootstrap";
import Button from "./Button";
import "./module.Footer.css";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <Container fluid>
      <Row className="footer-top">
        <Col xs={12} lg="3" md="4">
          {/* <h3>About</h3> */}
          <div className="footer-links">
            <Link to="/" target="_blank">
              <img
                src="/assets/logo/logo-1.png"
                alt="logo-1"
                style={{
                  display: "block",
                  margin: "0 auto",

                  height: "10rem",
                }}
              />
            </Link>
            <p>
              Just Pest Management Services is a full pest control service, for
              residential, commercial and industrial pest control.
            </p>
          </div>
        </Col>
        <Col xs={12} lg="3" md="4">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="services">Services</Link>
            <Link to="contact">Contact Us</Link>
          </div>
        </Col>
        <Col xs={12} lg="3" md="4">
          <h3>Our Services</h3>
          <div className="footer-links">
            <Link to="#" target="_blank">
              Pest Control
            </Link>
            <Link to="#" target="_blank">
              Vector Control
            </Link>
            <Link to="#" target="_blank">
              Rodents Control
            </Link>
          </div>
        </Col>
        <Col xs={12} lg="3" md="12">
          <h3 className="newsletter col-12">Our Locations</h3>
          <div className="row location">
            <p>Grant Road</p>
            <p>Dombivali</p>
            <p>Powai</p>
            <p>Pune</p>
          </div>
        </Col>
      </Row>
      <FooterBottom />
    </Container>
  );
}

export default Footer;
