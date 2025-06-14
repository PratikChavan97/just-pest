import { Breadcrumb, Container } from "react-bootstrap";
import "./module.BreadcrumbApp.css";
import { Link } from "react-router-dom";

function BreadcrumbApp({ children }) {
  return (
    <Container fluid className="breadcrumb-app">
      {/* <p>
        <Link to="/">Home</Link>
      </p>
      <p>{children}</p> */}
    </Container>
  );
}

export default BreadcrumbApp;
