import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import RatsControl from "./RatsControl";
import Rodents from "./Rodents";

function RodentControl() {
  const [field, setField] = useState("rodent");

  return (
    <Container fluid className="rodent other-services">
      <Container>
        <Row className="py-5">
          <Col xs={12} md="3" className="other-button-container">
            <button onClick={() => setField("rodent")}>Rodent Control</button>
            <button onClick={() => setField("rats")}>Rat-Mice-Control</button>
          </Col>
          <Col xs={12} md="9">
            {field === "rats" ? <RatsControl /> : <Rodents />}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default RodentControl;
