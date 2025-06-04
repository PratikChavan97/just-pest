import { Container } from "react-bootstrap";
import BreadcrumbApp from "../components/BreadcrumbApp";
import ContactDetails from "../components/ContactDetails";

import "./module.ShippingPolicy.css";

function ShippingPolicy() {
  return (
    <Container fluid>
      <BreadcrumbApp>Shipping & Refund Policy</BreadcrumbApp>
      <Container className="shipping">
        <h2>Shipping Policy</h2>
        <p>
          We Deliver services in Mumbai, Navi Mumbai,Thane, Pune, Nashik,
          Kolkata, Ahmedabad, Vadodra, Delhi NCR, Goa. Through a vast network of
          vendors spread across the country, Just Pest guarantees to deliver
          Services safely and in the best of the condition within a maximum of 8
          working days.
        </p>
        <p>Track Orders</p>
        <p>
          Once an order is placed, a verification e-mail is sent to the
          customer’s e-mail id with the tracking details. Whenever at any time a
          customer wishes to know the status of the order to track the delivery,
          instead of he/she can easily log on to the website and check the
          status using the tracking details.
        </p>

        <h2>Refund Policy</h2>
        <p>
          Thank you for your purchase. We hope you are happy with your purchase.
          However, if you are not completely satisfied with your purchase for
          any reason, you may return it to us for a full refund, store credit,
          or an exchange
        </p>
      </Container>

      <ContactDetails />
    </Container>
  );
}

export default ShippingPolicy;
