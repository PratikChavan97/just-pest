import { Breadcrumb, Container } from "react-bootstrap";
import "./module.BreadcrumbApp.css";

function BreadcrumbApp({ children }) {
  return (
    <Container fluid>
      <Breadcrumb className="breadcrumb-app">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{children}</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}

export default BreadcrumbApp;
