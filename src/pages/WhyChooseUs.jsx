import { Breadcrumb, Container } from "react-bootstrap";
import ContactDetails from "../components/ContactDetails";
import BreadcrumbApp from "../components/BreadcrumbApp";

function WhyChooseUs() {
  return (
    <Container fluid>
      <BreadcrumbApp>Why Choose Us</BreadcrumbApp>
      <ContactDetails />
    </Container>
  );
}

export default WhyChooseUs;
