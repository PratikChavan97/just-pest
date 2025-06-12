import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PestDefault from "./PestDefault";
import PestBirds from "./PestBirds";
import PestWood from "./PestWood";
import PestTermite from "./PestTermite";
import PestCockroach from "./PestCockroach";
import PestBugs from "./PestBugs";
import PestAnt from "./PestAnt";

function PestControl() {
  const [show, setShow] = useState("default");
  return (
    <Container fluid className="other-services">
      <Container>
        <Row className="py-5">
          <Col xs={12} md="3" className="other-button-container">
            <button onClick={() => setShow("termite")}>Termite</button>
            <button onClick={() => setShow("bugs")}>Bed Bugs</button>
            <button onClick={() => setShow("cockroach")}>Cockroach</button>
            <button onClick={() => setShow("ants")}>Ants</button>
            <button onClick={() => setShow("wood")}>Wood Boarer</button>
            <button onClick={() => setShow("birds")}>Birds</button>
          </Col>
          <Col xs={12} md="9">
            {show === "default" && <PestDefault />}
            {show === "termite" && <PestTermite />}
            {show === "bugs" && <PestBugs />}
            {show === "cockroach" && <PestCockroach />}
            {show === "ants" && <PestAnt />}
            {show === "wood" && <PestWood />}
            {show === "birds" && <PestBirds />}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PestControl;
