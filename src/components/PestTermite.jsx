import { useState } from "react";
import { Container } from "react-bootstrap";
import PestPreTermite from "./PestPreTermite";
import PestPostTermite from "./PestPostTermite";
import PestTermiteDefault from "./PestTermiteDefault";

function PestTermite() {
  const [show, setShow] = useState("default");
  return (
    <Container>
      <h2>Termite Control</h2>
      <p>We provide two types of termite control services:</p>
      <select
        className="my-3"
        value={show}
        onChange={(e) => setShow(e.target.value)}
      >
        <option value="default" onChange={(e) => setShow(e.target.value)}>
          -- Select Any --
        </option>
        <option value="pre">Pre-Construction Anti Termite Control</option>
        <option value="post">Post-Construction Pest Control</option>
      </select>

      {show === "default" || (
        <Container fluid className="border my-5 p-5 border-success rounded-5">
          {show === "pre" && <PestPreTermite />}
          {show === "post" && <PestPostTermite />}
        </Container>
      )}

      {show === "default" && <PestTermiteDefault />}
    </Container>
  );
}

export default PestTermite;
