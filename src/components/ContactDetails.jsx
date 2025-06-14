import { Col, Container, Row } from "react-bootstrap";

import "./module.ContactDetails.css";

function ContactDetails() {
  return (
    <Container fluid className="contact-us">
      <Container>
        <h2 className="text-center">Contact Details</h2>
        <Row className="why-us-contact-row">
          <Col xs={12} lg="6" md="6">
            <div className="why-us-contact">
              <img src="/assets/logo/logo-1.png" alt="just-pest-logo" />
              <p>
                Just Pest Management Services is the leading pest management
                company, which provides pest control services in eliminating Bed
                Bugs, Termites, Cockroaches, Mosquitoes, Lizard, Ants, House
                Flies, Rat, Rodent, Spider, Mice etc.
              </p>
              <div className="contact-social-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </Col>
          <Col xs={12} lg="6" md="6">
            <h4>Our Branch:</h4>
            <div className="location">
              <i class="fa-solid fa-location-dot"></i>
              <span>Grant Road:</span>
              <p>
                Shop no.07, BMC Bldg, Khatauwadi,Sleater Road, Near 155 Bus
                stop, Grantroad (West), Mumbai - 400007
              </p>
            </div>
            <div className="location">
              <i class="fa-solid fa-location-dot"></i>
              <span>Dombivali:</span>
              <p>
                Office no.4, 2nd floor, Nav Durga Soc, Opp. TJSB Bank, Dr. R.P
                road, Near Phadke watch center, Chaar rasta, Dombivali East.
              </p>
            </div>
            <div className="location">
              <i class="fa-solid fa-location-dot"></i>
              <span>Powai:</span>
              <p>
                Office no.5, A wing, Panchvati Building, Panch Shrishti Complex,
                IRB road, Opp.Shiv Bhagtani Manor, Nr. SM shetty School, Powai,
                Kanjurmarg West.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactDetails;
