import { useState } from "react";
import { Container } from "react-bootstrap";
import AboutAnts from "./AboutAnts";
import AntTypes from "./AntTypes";

function PestAnt() {
  const [show, setShow] = useState("about");

  return (
    <Container fluid>
      <h2>Ants Control</h2>
      <p>
        Ant Pest Control is now a necessary form of pest control activity,
        especially in residential and commercial complexes, since ants are
        causing maximum harm to human habitat in both such premises.
      </p>
      <p>
        Ants are a form of social insects, which live in organised colonies. The
        ants are of many types. Most commonly found ants in and around human
        habitats are House Ants.
      </p>
      <hr />

      <h3>Harmful effects caused by Ants to Humans</h3>
      <p>
        Ants are harmful to humans in multiple ways. Different species of ants
        cause different damages. Some species of ants are so poisonous that hey
        can kill a human only by their poisonous bites. Tropical fire ants can
        cause pain and swelling through their venomous bites. Some ants can
        spread diseases since they carry harmful bacteria on them, such as E.
        coli, Shigella, Streptococcus, Salmonellaand Staphylococcus. Ants
        generally destroy house hold goods. Ants feed on stored food materials.
        Ants are also responsible for causing great material loss to humans,
        both in residential and commercial areas.
      </p>
      <p>
        Some ant species can cause damage to human habitat by destroying the
        wooden structures in the house. These are Carpenter ants. Red Fire ants
        can damage electrical appliances as they gather around such places where
        electric current flows.
      </p>
      <p>
        Ants are a domestic nuisance when they crawl free over the food,
        furniture, bed and on the floor, in a human house.
      </p>

      <hr />

      <h3>Ant Pest Control</h3>
      <p>
        Ant Control can be achieved by use of ant repellents, and ant spray,
        which are very helpful in getting rid of ants and ant removal from
        homes. There are baited ant traps available for ant pest control, at
        homes. Pest control for ants are always made available by professional
        pest control service provider companies, such as Just Pest Management
        Services, which does everything it takes to solve the ant problems of
        their clients.
      </p>
      <p>
        For more information Contact:
        <span className="phone"> +91 86920 14333</span>
      </p>
      <hr />

      <select value={show} onChange={(e) => setShow(e.target.value)}>
        <option value="about">About Ants</option>
        <option value="types">Types of Ants</option>
      </select>

      <Container fluid className="border rounded-5 border-info my-5 p-5">
        {show === "about" && <AboutAnts />}
        {show === "types" && <AntTypes />}
      </Container>
    </Container>
  );
}

export default PestAnt;
