import { Link } from "react-router-dom";
import "./module.TopHeader.css";
import { Container } from "react-bootstrap";

function TopHeader() {
  return (
    <Container fluid className="header-top">
      <Container className="header-top-container">
        <div className="header-top-info">
          <div className="header-info">
            <i className="fa-solid fa-envelope-open"></i>
            <Link to="mailto:info@justpest.in">info@justpest.in</Link>
          </div>
          <div className="header-info">
            <i className="fa-solid fa-phone-volume"></i>
            <span>+91 123467890</span>
          </div>
          <div className="header-info">
            <i className="fa-solid fa-bell"></i>
            <span>Office Hour: 8AM to 11PM</span>
          </div>
        </div>
        <div className="header-social-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </Container>
    </Container>
  );
}

export default TopHeader;
