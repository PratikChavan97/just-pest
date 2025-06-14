import { Container, Row, Col } from "react-bootstrap";
import "./module.ChooseUS.css";

function ChooseUS() {
  return (
    <Container fluid className="choose">
      <Container className="sub-hero">
        <Row className="choose-container">
          <Col xs={12} md="3">
            <img
              src="/assets/images/sub-hero.jpg"
              alt="sub-hero"
              className="choose-img"
            />
          </Col>
          <Col xs={12} md="5" className="choose-why">
            <h2>Why Choose Us?</h2>
            <p>
              We are among the best and certified pest control companies that
              offer guaranteed control of all kinds of pests Rats, Cockroaches,
              Mosquitoes, Flies, Bees, Ticks, Bed Bugs, Rodentsand more.
            </p>

            <div>
              <div>
                <i className="fa-solid fa-arrow-right"></i>
                <span>Non-toxic solutions</span>
              </div>
              <div>
                <i className="fa-solid fa-arrow-right"></i>
                <span>Approved onshore offshore</span>
              </div>
              <div>
                <i className="fa-solid fa-arrow-right"></i>
                <span>We offer proactive and proven</span>
              </div>
            </div>
          </Col>
          <Col xs={12} md="4">
            <form>
              <div className="hero-form-header">
                <h3 className="h2">Book Your Service</h3>
              </div>
              <div className="input-first">
                <div>
                  <label htmlFor="username">Name</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label for="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="5"
                    cols="30"
                  ></textarea>
                </div>
                <button type="submit">Send</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ChooseUS;
