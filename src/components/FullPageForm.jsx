import { Container } from "react-bootstrap";
import "./module.FullPageForm.css";

function FullPageForm({ handleShow, show }) {
  function handleCancel() {}

  return (
    <Container fluid className="home-form">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" placeholder="Phone No." />
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
        <textarea id="message" name="message" placeholder="Message"></textarea>
        <button>Send</button>
        {show && (
          <button className="cancel" onClick={() => handleShow()}>
            X
          </button>
        )}
      </form>
    </Container>
  );
}

export default FullPageForm;
