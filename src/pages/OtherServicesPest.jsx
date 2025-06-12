import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OtherHerbal from "../components/OtherHerbal";
import OtherOneTime from "../components/OtherOneTime";
import OtherAnnual from "../components/OtherAnnual";
import OtherCommercial from "../components/OtherCommercial";
import OtherHealth from "../components/OtherHealth";
import OtherWooden from "../components/OtherWooden";
import OtherFood from "../components/OtherFood";
import OtherWarehouse from "../components/OtherWarehouse";
import OtherRetail from "../components/OtherRetail";
import OtherCenter from "../components/OtherCenter";

import "./module.OtherServicesPest.css";

function OtherServicesPest() {
  const [field, setField] = useState("default");
  return (
    <Container fluid className="other-services">
      <Container>
        <Row className="gx-5 p-5">
          <Col xs={12} md={3} className="other-button-container">
            <button onClick={() => setField("herbal")}>
              Herbal Pest Control Service
            </button>
            <button onClick={() => setField("one-time")}>
              One Time Pest Control Service
            </button>
            <button onClick={() => setField("annual")}>
              Annual Maintenance Service
            </button>
            <button onClick={() => setField("commercial")}>
              Commercial Pest Control Service
            </button>
            <button onClick={() => setField("health")}>
              Pest Control Service in Health Care Services
            </button>
            <button onClick={() => setField("wooden")}>
              Wooden Furniture Pest Control
            </button>
            <button onClick={() => setField("food")}>
              Pest Control For Food & Beverages
            </button>
            <button onClick={() => setField("warehouse")}>
              Warehouses, Stores & Godowns
            </button>
            <button onClick={() => setField("retail")}>
              Pest Control For Retail Centers
            </button>
            <button onClick={() => setField("centers")}>
              Pest Control For IT Centers
            </button>
          </Col>
          <Col xs={12} md="9">
            {field === "herbal" ? (
              <OtherHerbal />
            ) : field === "one-time" ? (
              <OtherOneTime />
            ) : field === "annual" ? (
              <OtherAnnual />
            ) : field === "commercial" ? (
              <OtherCommercial />
            ) : field === "health" ? (
              <OtherHealth />
            ) : field === "wooden" ? (
              <OtherWooden />
            ) : field === "food" ? (
              <OtherFood />
            ) : field === "warehouse" ? (
              <OtherWarehouse />
            ) : field === "retail" ? (
              <OtherRetail />
            ) : field === "centers" ? (
              <OtherCenter />
            ) : (
              <OtherServicesDefault />
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

function OtherServicesDefault() {
  return (
    <Container>
      <h2>Our Pest Control Services</h2>
      <p>
        Pest Control Services Inc, Indore is offering a variety of specialized
        services to its clients, to suit their specific pest control
        requirements. These services are customized and tailor-made for the
        clients, who want to get an exclusive pest control service to be
        rendered at their premises, as a solution to their very specific problem
        of pest infestations
      </p>
    </Container>
  );
}

export default OtherServicesPest;
