import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import VectorDefault from "./VectorDefault";
import VectorHouseFly from "./VectorHouseFly";
import VectorMosquitoes from "./VectorMosquitoes";

function VectorControl() {
  const [show, setShow] = useState("default");
  return (
    <Container fluid className="other-services">
      <Container>
        <Row className="py-5">
          <Col xs={12} md="3" className="other-button-container">
            <button onClick={() => setShow("default")}>Vector Control</button>
            <button onClick={() => setShow("house")}>House Fly Control</button>
            <button onClick={() => setShow("mosquitoes")}>
              Mosquitoes Control - Spray Killer
            </button>
          </Col>
          <Col xs={12} md="9">
            {show === "default" && <VectorDefault />}
            {show === "house" && <VectorHouseFly />}
            {show === "mosquitoes" && <VectorMosquitoes />}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default VectorControl;
