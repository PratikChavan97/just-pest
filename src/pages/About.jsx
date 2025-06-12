import { Accordion, Container, Row, Col } from "react-bootstrap";
import ContactDetails from "../components/ContactDetails";
import BreadcrumbApp from "../components/BreadcrumbApp";
import "./module.About.css";

function About() {
  return (
    <Container fluid>
      <BreadcrumbApp>About</BreadcrumbApp>
      <Row className="about gx-5">
        <Col xs={12} lg="6" md="12">
          <img src="src/assets/images/ser-2.jpg" alt="ser-2" />
        </Col>
        <Col xs={12} lg="6" md="12">
          <h4>Who we are?</h4>
          <h2>Effective solutions for your pest problems offered</h2>
          <p>
            Just Pest Management Services is a full pest control service, for
            residential, commercial and industrial pest control. It is a company
            serving Mumbai and surrounding areas in the state of Maharashtra,
            providing pest control service since a number of years. We have used
            our resources to give back to the community through our pest control
            services to the society. Our staff is dedicated to providing our
            customer the best, with professional service and respect. We have an
            outstanding reputation as a pest control service providing company.
          </p>
        </Col>
      </Row>

      <Row className="about-2 gx-5">
        <Col xs={12} lg="6" md="12">
          <img src="src/assets/images/ser-1.jpg" alt="ser-1" />
        </Col>
        <Col xs={12} lg="6" md="12">
          <h2>We Are Among The Best Pest Control Company in India</h2>
          <p>
            At Just Pest Management Services we are committed to ongoing
            training and re-certification for our technicians. We use the most
            up-to-date products and techniques as well as past proven solutions
            for all of your pest control needs. Homeowner’s safety for children
            and pets is a priority with all of our applications. We customize
            treatment options for each and every customer, single applications
            for your home or business, and the ability to service large
            multi-acre commercial accounts. We can handle most needs, large or
            small.
          </p>
        </Col>
      </Row>

      <div className="about-accord">
        <h2 className="mb-5 h1 text-center">We love what we do</h2>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span className="accord-head">
                We provide guaranteed pest control service, to our customers:
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <span className="accord-text">
                At Just Pest Management Services we are committed to ongoing
                training and re-certification for our technicians. We use the
                most up-to-date products and techniques as well as past proven
                solutions for all of your pest control needs. Homeowner’s safety
                for children and pets is a priority with all of our
                applications. We customize treatment options for each and every
                customer, single applications for your home or business, and the
                ability to service large multi-acre commercial accounts. We can
                handle most needs, large or small.
              </span>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span className="accord-head">
                We provide safety for you from pests and harmful pesticides:
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <span className="accord-text">
                We get rid of pests without the use of harmful chemicals. Our
                pest control reagents are derived from natural substances that
                repel and kill bugs. These treatments areof less smell and
                low-impact, so they are safer for application in your home or
                business, even when you havedomestic pets or small children
                present.
              </span>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <span className="accord-head">
                Our pest control service is budget friendly service:
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <span className="accord-text">
                We provide a budget-friendly pest control service to our
                customers, and our expert technicians will provide a free
                estimate over the phone for residential customers and perform a
                thorough inspection to create a customized pest control
                maintenance plan to fit the needs of commercial facilities.
              </span>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <span className="accord-head">
                Our pest control service is ecology friendly service:
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <span className="accord-text">
                The organic and natural pest treatments we use are derived from
                natural bug-repelling substances like rosemary, mint and thyme.
                These treatments biodegrade, so outdoor applications do not
                threaten plants or animals in the ecosystem.
              </span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <ContactDetails />
    </Container>
  );
}

export default About;
