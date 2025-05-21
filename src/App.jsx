import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <TopHeader />
      <NavBar />
      <Card />
      <ChooseUS />
      <OurServices />
      <AllServices />
      <OtherServices />
      <ReliablePest />
      <Qualities />
      <FlexiblePlans />
      <Footer />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <img
        src="src/assets/images/slider.jpg"
        alt="slider"
        className="card-img img-fluid"
      />
      <div className="card-title card-img-overlay h-100 d-flex flex-column justify-content-center align-items-start">
        <h3 className="card-title h1">
          We Are Among The Best Pest Control Company
        </h3>
        <p className="card-text">
          Our pest control services are proactive and employ proven IPM
          (Integrated Pest Management)
        </p>
        <div className="d-flex">
          <button className="btn btn-lg btn-primary">Book Now</button>
          <button className="btn btn-lg">Discover More</button>
        </div>
      </div>
    </div>
  );
}

function ChooseUS() {
  return (
    <div className="container d-flex justify-content-center align-items-center py-5">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-12">
          <img
            src="src/assets/images/sub-hero.jpg"
            alt="sub-hero"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-5 col-md-5 col-12">
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
        </div>

        <div className="col-lg-4 col-md-4 col-12 choose">
          <form>
            <div className="hero-form-header">
              <p>Book Your Service</p>
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
        </div>
      </div>
    </div>
  );
}

function OurServices() {
  const servicesData = [
    {
      image: "src/assets/images/ser-1.jpg",
      altText: "ser-1",
      title: "Anti Termite Services",
      text: "Get protected from Viruses & Diseases causing bacteria with a deep sanitization and Disinfection service.",
    },
    {
      image: "src/assets/images/ser-2.jpg",
      altText: "ser-2",
      title: "Cleaning Services",
      text: "Get protected from Viruses & Diseases causing bacteria with a deep sanitization and Disinfection service.",
    },
    {
      image: "src/assets/images/ser-3.jpg",
      altText: "ser-3",
      title: "General Services",
      text: "Get protected from Viruses & Diseases causing bacteria with a deep sanitization and Disinfection service.",
    },
  ];

  return (
    <div className="container-fluid services text-center">
      <h2>Our Services</h2>
      <p>
        Get protected from Viruses & Diseases causing bacteria with a deep
        sanitization and Disinfection service.
      </p>
      <div className="container">
        <div className="row">
          {servicesData.map((item) => (
            <ServicesCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesCard({ item }) {
  return (
    <div className="card bg-white p-3 col-lg-4 col-md-6 col-12">
      <img
        src={item.image}
        alt={item.altText}
        className="card-top-img img-fluid"
      />
      <h3 className="card-title">{item.title}</h3>
      <p className="card-text">{item.text}</p>
    </div>
  );
}

function AllServices() {
  const allServicesData = [
    {
      image: "src/assets/icons/ladybug-icon.png",
      altText: "ladybug-icon",
      title: "LadyBugs",
    },
    {
      image: "src/assets/icons/mosquitos-icon.png",
      altText: "mosquitos-icon",
      title: "Mosquitos",
    },
    {
      image: "src/assets/icons/flies-icon.png",
      altText: "flies-icon",
      title: "Flies",
    },
    {
      image: "src/assets/icons/wharf-roach-icon.png",
      altText: "wharf-roach-icon",
      title: "Wharf-roach",
    },
    {
      image: "src/assets/icons/horned-atlas-icon.png",
      altText: "horned-atlas-icon",
      title: "Horned-atlas",
    },
    {
      image: "src/assets/icons/scorpion-icon.png",
      altText: "scorpion-icon",
      title: "Scorpion",
    },
    {
      image: "src/assets/icons/firefly-icon.png",
      altText: "firefly-icon",
      title: "Firefly",
    },
    {
      image: "src/assets/icons/stinkbug-icon.png",
      altText: "stinkbug-icon",
      title: "Stinkbug",
    },
  ];
  return (
    <div className="container cards-section">
      <div className="row g-4 justify-content-center">
        {allServicesData.map((item, i) => (
          <AllServicesCard item={item} key={item.title} index={i} />
        ))}
      </div>
    </div>
  );
}

function AllServicesCard({ item, index }) {
  return (
    <div className="col-lg-3">
      <div className="cards">
        <div>
          <img src={item.image} alt={item.altText} />
          <h2>0{index + 1}</h2>
        </div>
        <h3 className="h2">{item.title}</h3>
        <button className="card-btn">Discover More</button>
      </div>
    </div>
  );
}

function OtherServices() {
  const otherServicesData = [
    {
      image: "src/assets/icons/mosquitos-control-icon.png",
      altText: "mosquitos-control-icon",
      title: "Mosquito Control",
      text: "Enjoy Your Outdoor Spaces Mosquito-Free",
    },
    {
      image: "src/assets/icons/termite-control-icon.png",
      altText: "termite-control-icon",
      title: "Termite Control",
      text: "Protect Your Home from Termite Damage",
    },
    {
      image: "src/assets/icons/bed-bug-control-icon.png",
      altText: "bed-bug-control-icon",
      title: "Bed Bug Control",
      text: "Sleep Tight with Our Bed Bug Solutions",
    },
    {
      image: "src/assets/icons/ant-control-icon.png",
      altText: "ant-control-icon",
      title: "Ant Control",
      text: "Eliminate Ants for a Cleaner Home",
    },
  ];
  return (
    <div className="container-fluid small-card">
      <div className="row">
        {otherServicesData.map((item) => (
          <OtherServicesCard item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

function OtherServicesCard({ item }) {
  return (
    <div className="inner-card col-lg-3 col-md-3 col-12">
      <img src={item.image} alt={item.altText} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  );
}

function ReliablePest() {
  const reliablePestData = [
    {
      image: "fa-regular fa-gem",
      title: "Our Value",
    },
    {
      image: "fa-solid fa-eye",
      title: "Our Vision",
    },
    {
      image: "fa-regular fa-bullseye",
      title: "Our Mission",
    },
  ];
  return (
    <div className="container text-center py-5">
      <h2>Reliable Pest Defense, Every Time</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa
        doloremque. Aliquid expedita ut, consectetur pariatur veritatis corrupti
        dolores ab rerum provident molestiae delectus illo voluptate ex
        voluptatum debitis recusandae!
      </p>
      <div className="container">
        <div className="row">
          {reliablePestData.map((item) => (
            <ReliablePestCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReliablePestCard({ item }) {
  return (
    <div className="inner-service-card col-lg-4 col-12">
      <i className={item.image}></i>
      <h3>{item.title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus
      </p>
    </div>
  );
}

function Qualities() {
  return (
    <div className="container-fluid qualities">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <h2>Make your home safe and clean</h2>
          <p className="qualities-text">
            We are among the best and certified pest control companies that
            offer guaranteed control of all kinds of pests Rats, Cockroaches,
            Mosquitoes, Flies, Bees, Ticks, Bed Bugs, Rodentsand more.
          </p>

          <div className="row">
            <div className="col-md-6">
              <div>
                <i className="fa-solid fa-greater-than"></i>
                <span>Safe Pesticides</span>
              </div>
              <div>
                <i className="fa-solid fa-greater-than"></i>
                <span>Eco-Friendly Pesticides</span>
              </div>
              <div>
                <i className="fa-solid fa-greater-than"></i>
                <span>Odorless Pesticide</span>
              </div>
            </div>

            <div className="col-md-6">
              <div>
                <i className="fa-solid fa-greater-than"></i>
                <span>Sofas cleaning</span>
              </div>
              <div>
                <i className="fa-solid fa-greater-than"></i>
                <span>Eco-Friendly Pesticides</span>
              </div>
              <div>
                <i className="fa-solid fa-greater-than"></i>
                <span>Villa Cleaning</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <img
            className="img-fluid p-4 rounded-5"
            src="src/assets/images/about.jpg"
            alt="about"
          />
        </div>
      </div>
    </div>
  );
}

function FlexiblePlans() {
  const flexiblePlansData = [
    // {
    //   image: "src/assets/icons/ladybug-icon.png",
    //   altText: "ladybug-icon",
    //   title: "Pest Control",
    // },
    {
      image: "fa-solid fa-bell",
      altText: null,
      title: "One Time/ On Demand",
    },
    {
      image: "fa-solid fa-table-list",
      altText: null,
      title: "Monthly Sessions",
    },
    {
      image: "fa-solid fa-calendar-days",
      altText: null,
      title: "Bi-Monthly Sessions",
    },
    {
      image: "fa-solid fa-check",
      altText: null,
      title: "Quaterly Sessions",
    },
  ];
  return (
    <div className="container py-5">
      <div className="card">
        <img
          src="src/assets/images/slider.jpg"
          alt="slider"
          className="card-img"
        />

        <div className="card-img-overlay tiles-section d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center h2">
            Choose from the Flexible Plans that Include
          </h2>
          <div className="container">
            <div className="row tiles py-5">
              <div className="tile col-lg-2 col-md-3 col-4">
                <img
                  src="src/assets/icons/ladybug-icon.png"
                  alt="ladybug-icon"
                  className="tile-img"
                />
                <h4>Pest Control</h4>
              </div>
              {flexiblePlansData.map((item) => (
                <FlexiblePlansCard item={item} key={item.image} />
              ))}
            </div>
          </div>

          <p className="card-text">
            Mokab Pest Control also Offer Professional Cleaning Services Across
            in world.
          </p>
          <a href="#" target="_blank" className="tile-button">
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
}

function FlexiblePlansCard({ item }) {
  return (
    <div className="tile col-lg-2 col-md-3 col-12">
      <i className={item.image}></i>
      <h4>{item.title}</h4>
    </div>
  );
}
export default App;
