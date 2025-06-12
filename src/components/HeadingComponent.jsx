import { Container } from "react-bootstrap";
import "./module.HeadingComponent.css";

function HeadingComponent({ children }) {
  return (
    <Container fluid>
      <Container fluid className="heading-card">
        <Container className="heading-text">
          <h2>{children}</h2>
        </Container>
      </Container>
    </Container>
  );
}

export default HeadingComponent;
