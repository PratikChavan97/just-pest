import { Col, Container, Row } from "react-bootstrap";
import Button from "./Button";
import "./module.Footer.css";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <Container fluid>
      <FooterBottom />
      {/* <section className="container-fluid">
        <div className="row footer-top">
          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <h3>About</h3>
            <div className="footer-links">
              <a href="#" target="_blank">
                Pricing
              </a>
              <a href="#" target="_blank">
                Careers
              </a>
              <a href="#" target="_blank">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <h3>Help</h3>
            <div className="footer-links">
              <a href="#" target="_blank">
                Terms & Conditions
              </a>
              <a href="#" target="_blank">
                Customer Support
              </a>
              <a href="#" target="_blank">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
            <h3>Useful Links</h3>
            <div className="footer-links">
              <a href="#" target="_blank">
                Cleaning Services
              </a>
              <a href="#" target="_blank">
                Disinfection & Sanitization
              </a>
              <a href="#" target="_blank">
                Anti Termite Services
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 container-fluid">
            <h3 className="newsletter col-12">Subscribe To Our Newsletter</h3>
            <div className="row ">
              <div className="col-lg-9 col-md-10 col-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="email-input rounded-4 form-control"
                />
              </div>
              <div className="col-lg-3 col-md-2 col-12">
                <Button classname="btn btn-lg rounded-3">Send</Button>
                {/* <button className="btn btn-lg rounded-3">Send</button> */}
      {/* </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="container-fluid">
        <div className="row footer-bottom ">
          <div className="copyright col-lg-10 col-md-10 col-sm-12 col-12">
            <p>
              &copy; 2022 Just Pest - Pest Control Company Inc. All Rights
              Reserved
            </p>
          </div>
          <div className="footer-social-icons col-lg-2 col-md-2 col-sm-12 col-12">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </section> */}
    </Container>
  );
}

export default Footer;
