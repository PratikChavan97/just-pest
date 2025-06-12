import { Col, Container, Row } from "react-bootstrap";
import BreadcrumbApp from "../components/BreadcrumbApp";
import HeadingComponent from "../components/HeadingComponent";

import "./module.Contact.css";
import FullPageForm from "../components/FullPageForm";

function Contact() {
  return (
    <Container fluid>
      <BreadcrumbApp>CONTACT</BreadcrumbApp>
      <HeadingComponent>Contact US</HeadingComponent>
      <Container className="contact">
        <Row className="gx-5">
          <Col xs={12} lg="6" md="12" className="contact-container">
            <div className="contact-card">
              <i class="fa-solid fa-location-dot"></i>
              <div>
                <h4>Address:</h4>
                <ul>
                  <li>
                    Shop no.07, BMC Bldg, Khatauwadi,Sleater Road, Near 155 Bus
                    stop, Grant Road (West), Mumbai - 400007
                  </li>
                  <hr />
                  <li>
                    Office no.4, 2nd floor, Nav Durga Soc, Opp. TJSB Bank, Dr.
                    R.P road, Near Phadke watch center, Chaar rasta, Dombivali
                    East.
                  </li>
                  <hr />
                  <li>
                    Office no.5, A wing, Panchvati Building, Panch Shrishti
                    Complex, IRB road, Opp.Shiv Bhagtani Manor, Nr. SM shetty
                    School, Powai, Kanjurmarg West.
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-card w-100">
              <i class="fa-solid fa-phone"></i>
              <div>
                <h4>Hotline:</h4>
                <p> +91 86920 14333</p>
              </div>
            </div>
            <div className="contact-card w-100">
              <i class="fa-solid fa-store"></i>
              <div>
                <h4>Opening Time:</h4>
                <p>Monday - Friday 10AM - 11PM</p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg="6" md="12">
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Name" />
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone No."
              />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" />
              <label htmlFor="service">Service</label>
              <select>
                <option value="">-- Select Service --</option>
                <option value="general">General Pest Control</option>
                <option value="home">Home Pest Control</option>
                <option value="office">Office Pest Control</option>
              </select>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
              ></textarea>
              <button>Send</button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
