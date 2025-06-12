import { Card, Col, Container, Row } from "react-bootstrap";
import BreadcrumbApp from "../components/BreadcrumbApp";
import HeadingComponent from "../components/HeadingComponent";
import OurServices from "../components/OurServices";

function Services() {
  return (
    <Container fluid>
      <BreadcrumbApp>Services</BreadcrumbApp>
      <HeadingComponent>Our Services</HeadingComponent>
      <OurServices />
    </Container>
  );
}

export default Services;
