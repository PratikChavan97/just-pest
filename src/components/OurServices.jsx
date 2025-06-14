import { Container, Row } from "react-bootstrap";
import ServicesCard from "./ServicesCard";
import "./module.OurServices.css";

function OurServices() {
  const servicesData = [
    {
      image: "/assets/images/ser-1.jpg",
      altText: "ser-1",
      title: "Pest Control",
      text: "Get protected from Viruses & Diseases causing bacteria with a deep sanitization and Disinfection service.",
      linkTo: "/services/pest-control",
    },
    {
      image: "/assets/images/ser-2.jpg",
      altText: "ser-2",
      title: "Vector Control",
      text: "Get protected from Viruses & Diseases causing bacteria with a deep sanitization and Disinfection service.",
      linkTo: "/services/vector-control",
    },
    {
      image: "/assets/images/ser-3.jpg",
      altText: "ser-3",
      title: "Rodent Controls",
      text: "Get protected from Viruses & Diseases causing bacteria with a deep sanitization and Disinfection service.",
      linkTo: "/services/rodent-control",
    },
    {
      image: "/assets/images/ser-1.jpg",
      altText: "ser-4",
      title: "Other Services",
      text: "Get protected from Viruses & Diseases causing bacteria with a deep sanitization and Disinfection service.",
      linkTo: "/services/other-services",
    },
  ];

  return (
    <Container fluid className="services text-center">
      <div className="">
        <h2>Our Services</h2>
        <p>
          Get protected from Viruses & Diseases causing bacteria with a deep
          sanitization and Disinfection service.
        </p>
        <Container>
          <Row className="g-5">
            {servicesData.map((item) => (
              <ServicesCard item={item} key={item.title} />
            ))}
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default OurServices;
