import { Card, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServicesCard({ item }) {
  return (
    <Col xs={12} lg="3" md="3" className="service-card">
      <img src={item.image} alt={item.title} className="img-fluid" />
      <h3>{item.title}</h3>
      <p>{item.text}</p>

      <button>
        <Link to={item.linkTo}>Discover More</Link>
      </button>
    </Col>
  );
}

export default ServicesCard;
