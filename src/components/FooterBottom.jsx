import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./module.FooterBottom.css";

function FooterBottom() {
  return (
    <Row className="footer-bottom">
      <Col xs={12} lg="3" md="6">
        <p className="text-center">
          &copy; 2025 - Just Pest Management Services. All Rights Reserved.
        </p>
      </Col>
      <Col xs={12} lg="6" md="6" className="footer-bottom-links">
        <Link to="privacy-policy">Privacy Policy</Link>
        <Link to="shipping">Shipping & Refund Policy</Link>
        <Link to="terms">Terms & Conditions</Link>
      </Col>
      <Col xs={12} lg="3" md="3" className="footer-social-icons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
      </Col>
    </Row>
  );
}

export default FooterBottom;
