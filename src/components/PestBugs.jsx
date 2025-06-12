import { useState } from "react";
import { Container } from "react-bootstrap";
import BugsAbout from "./BugsAbout";
import BugsFacts from "./BugsFacts";
import BugsInfection from "./BugsInfection";
import BugsExtermination from "./BugsExtermination";

function PestBugs() {
  const [show, setShow] = useState("about");
  console.log(show);
  return (
    <Container>
      <h2>Extermination of bed bugs and bed bugs control service</h2>
      <p>
        Removal of bed bugs is one of the most challenging pest extermination
        services. It makes hiring a professional pest control company most
        important for getting rid of bed bugs. The professional pest control
        services provide many effective options for bed bugs eradication.
      </p>
      <p>
        “Bed bug is a word that can make anyone irritated and tense. On any
        symptom of a probable bed bug infestation in the house, one must
        immediately contact a professional pest control company, who will offer
        the suitable measure of controlling bed bug in that premises, after
        making the necessary inspection.
      </p>
      <hr />

      <h3>Symptoms of Bed Bugs</h3>
      <p>
        It first starts with small red bite marks. Usually, small, red bite
        marks on different parts of the body are the first sign of a problem.
        Since these bugs are nocturnal, the bites occur at night. One can also
        closely inspect the seams of the bed mattress, looking for black or
        brown spots or smears that represent bed bugs faecal stains. It is
        important to note that beyond mattresses, bed bugs love upholstered
        furniture, linens, rugs, and other areas. This inspection is best be
        done by a professional pest control company for best results.
      </p>
      <hr />

      <h3>Elimination the Bed Bugs Problem</h3>
      <p>
        A reputable exterminator uses unique detection methods and tools, since
        bed bugs are difficult to see with naked eyes during the day. Often, the
        discovery of these bugs is far worse than imagined. Eradicating the bed
        bugs is just as difficult, although certainly not impossible, especially
        for a trained professional. The professional pest control company looks
        for both live and dead bugs, shed skin from the molting process, spots
        or streaks of dark brown faecal matter, and small off-white eggs.
      </p>
      <p>
        After the inspection, the pest controller will suggest for the
        appropriate bed bug elimination method. The combination of innovative
        tools and experience allows the exterminator to choose an effective and
        safe treatment for exterminating bed bugs from the house. Regardless of
        which treatment the exterminator uses, the goal is to target the bugs
        and their larvae. That way, the larvae cannot mature into adults that
        breed, bite, and cause potentially dangerous disease.
      </p>
      <p>
        <span>Just Pest Management Services</span> is a leading exterminator of
        pests, which is serving the Mumbai and the surrounding area. For
        eradicating bed bugs, as well as a host of other unwanted houseguests,
        the pest control technicians have the necessary experience, training,
        and expertise. Please visit JPMS website or call JPMS today to learn
        more about pest control.
      </p>
      <hr />

      <select value={show} onChange={(e) => setShow(e.target.value)}>
        <option value="about">About Bed Bugs</option>
        <option value="facts">Facts about Bed Bugs</option>
        <option value="infection">Infection Signs</option>
        <option value="extermination">Bed Bug Extermination</option>
      </select>

      <Container fluid className="border border-info rounded-3 p-5 my-5">
        {show === "about" && <BugsAbout />}
        {show === "facts" && <BugsFacts />}
        {show === "infection" && <BugsInfection />}
        {show === "extermination" && <BugsExtermination />}
      </Container>
    </Container>
  );
}

export default PestBugs;
