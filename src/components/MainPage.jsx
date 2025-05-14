import CardOverlay from "./CardOverlay";

function MainPage() {
  return (
    <main>
      <CardOverlay />

      {/* <section className="sub-hero row">
        <div className="col-md-4 col-sm-12 sub-image">
          <img src="src/assets/images/sub-hero.jpg" alt="sub-hero" />
        </div>

        <div className="col-md-4 col-sm-12">
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

        <form className="col-md-4 col-sm-12">
          <div className="hero-form-header">
            <p>Book Your Service</p>
          </div>
          <div className="input-first">
            <div>
              <label for="username">Name</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Name"
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div>
              <label for="phone">Phone</label>
              <input type="text" id="phone" name="phone" placeholder="Phone" />
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
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <p>
          Get protected from Viruses & Diseases causing bacteria with a deep
          sanitization and Disinfection service.
        </p>
        <div className="row card-container">
          <div className="service-card col-md-4 col-sm-12">
            <div className="top-yellow"></div>
            <div>
              <img src="src/assets/images/ser-1.jpg" alt="ser-1" />
            </div>
            <div className="card-image">
              <img
                src="src/assets/icons/flies-icon.png"
                className="card-top-image"
                alt="flies-icon"
              />
            </div>
            <div>
              <h3>Anti Termite Services</h3>
              <p>
                Get protected from Viruses & Diseases causing bacteria with a
                deep sanitization and Disinfection service.
              </p>
              <button>Discover More</button>
            </div>
          </div>

          <div className="service-card col-md-4 col-sm-12">
            <div className="top-yellow"></div>

            <div>
              <img src="src/assets/images/ser-2.jpg" alt="ser-2" />
            </div>
            <div className="card-image">
              <img
                src="src/assets/icons/mosquitos-icon.png"
                className="card-top-image"
                alt="mosquitos-icon"
              />
            </div>
            <div>
              <h3>Cleaning Services</h3>
              <p>
                Get protected from Viruses & Diseases causing bacteria with a
                deep sanitization and Disinfection service.
              </p>
              <button>Discover More</button>
            </div>
          </div>

          <div className="service-card col-md-4 col-sm-12">
            <div className="top-yellow"></div>
            <div>
              <img src="src/assets/images/ser-3.jpg" alt="ser-3" />
            </div>
            <div className="card-image">
              <img
                src="src/assets/icons/ladybug-icon.png"
                className="card-top-image"
                alt="ladybug"
              />
            </div>
            <div>
              <h3>General Maintenance</h3>
              <p>
                Get protected from Viruses & Diseases causing bacteria with a
                deep sanitization and Disinfection service.
              </p>
              <button>Discover More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="cards">
          <div>
            <img src="src/assets/icons/ladybug-icon.png" alt="ladybug-icon" />
            <h2>01</h2>
          </div>
          <h3>Ladybugs</h3>
          <a href="" className="btn card-btn">
            Discover More
          </a>
        </div>
        <div className="cards">
          <div>
            <img
              src="src/assets/icons/mosquitos-icon.png"
              alt="mosquitos-icon"
            />
            <h2>02</h2>
          </div>
          <h3>Mosquitos</h3>
          <a href="" className="btn card-btn">
            Discover More
          </a>
        </div>
        <div className="cards">
          <div>
            <img src="src/assets/icons/flies-icon.png" alt="flies-icon" />
            <h2>03</h2>
          </div>
          <h3>Flies</h3>
          <a href="" className="btn card-btn">
            Discover More
          </a>
        </div>
        <div className="cards">
          <div>
            <img
              src="src/assets/icons/wharf-roach-icon.png"
              alt="wharf-roach-icon"
            />
            <h2>04</h2>
          </div>
          <h3>Wharf Roach</h3>
          <a href="" className="btn card-btn">
            Discover More
          </a>
        </div>
        <div className="cards">
          <div>
            <img
              src="src/assets/icons/horned-atlas-icon.png"
              alt="horned-atlas-icon"
            />
            <h2>05</h2>
          </div>
          <h3>Horned Atlas</h3>
          <a href="" className="btn card-btn">
            Discover More
          </a>
        </div>
        <div className="cards">
          <div>
            <img src="src/assets/icons/scorpion-icon.png" alt="scorpion-icon" />
            <h2>06</h2>
          </div>
          <h3>Scorpion</h3>
          <a href="" className="btn card-btn">
            Discover More
          </a>
        </div>
        <div className="cards">
          <div>
            <img src="src/assets/icons/stinkbug-icon.png" alt="stinkbug-icon" />
            <h2>07</h2>
          </div>
          <h3>Stinkbug</h3>
          <a href="" className="btn card-btn">
            Discover More
          </a>
        </div>
        <div className="cards">
          <div>
            <img src="src/assets/icons/firefly-icon.png" alt="firefly-icon" />
            <h2>08</h2>
          </div>
          <h3>Firefly</h3>
          <a href="" className="btn card-btn">
            Discover More
          </a>
        </div>
      </section>

      <section className="small-card row">
        <div className="inner-card col-md-3 col-sm-12">
          <img
            src="src/assets/icons/mosquitos-control-icon.png"
            alt="mosquitos-control-icon"
          />
          <div>
            <h3>Mosquito Control</h3>
            <p>Enjoy Your Outdoor Spaces Mosquito-Free</p>
          </div>
        </div>
        <div className="inner-card col-md-3 col-sm-12">
          <img
            src="src/assets/icons/termite-control-icon.png"
            alt="termite-control-icon"
          />
          <div>
            <h3>Termite Control</h3>
            <p>Protect Your Home from Termite Damage</p>
          </div>
        </div>
        <div className="inner-card col-md-3 col-sm-12">
          <img
            src="src/assets/icons/bed-bug-control-icon.png"
            alt="bed-bug-control-icon"
          />
          <div>
            <h3>Bed Bug Treatment</h3>
            <p>Sleep Tight with Our Bed Bug Solutions</p>
          </div>
        </div>
        <div className="inner-card col-md-3 col-sm-12">
          <img
            src="src/assets/icons/ant-control-icon.png"
            alt="ant-control-icon"
          />
          <div>
            <h3>Ant Extermination</h3>
            <p>Eliminate Ants for a Cleaner Home</p>
          </div>
        </div>
      </section>

      <section className="services-card">
        <h2>Reliable Pest Defense, Every Time</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="container">
          <div className="row">
            <div className="inner-service-card col-lg-3 col-md-3 col-sm-12 col-12">
              <i className="fa-regular fa-gem"></i>
              <h3>Our Value</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus
              </p>
            </div>
            <div className="inner-service-card col-lg-3 col-md-3 col-sm-12 col-12">
              <i className="fa-solid fa-eye"></i>
              <h3>Our Vision</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus
              </p>
            </div>
            <div className="inner-service-card col-lg-3 col-md-3 col-sm-12 col-12">
              <i className="fa-solid fa-bullseye"></i>
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="qualities row">
        <div className="col-md-6">
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

        <div className="col-md-6">
          <img src="src/assets/images/about.jpg" alt="about" />
        </div>

        <div className="quality-footer">
          <i
            className="fa-solid fa-phone-volume"
            style="color: #fff; background-color: #042831"
          ></i>
          <div className="call">
            <p>
              <strong>+333 333 333</strong>
            </p>
            <p>Call us everyday</p>
          </div>
        </div>
      </section> */}

      {/* <section className="tiles-section">
        <div className="bg-image">
          <img src="./assets/images/slider.jpg" alt="slider" />
        </div>

        <div className="tiles-text">
          <h2>Choose from Flexible Plans that Include</h2>

          <div className="tiles row">
            <div className="tile col-md-3 col-sm-12">
              <img
                src="./assets/icons/ladybug-icon.png"
                alt="ladybug-icon"
                className="tile-img"
              />
              <h4>Pest Control</h4>
            </div>
            <div className="tile col-md-3 col-sm-12">
              <i className="fa-solid fa-bell"></i>
              <h4>One Time/ On Demand</h4>
            </div>
            <div className="tile col-md-3 col-sm-12">
              <i className="fa-solid fa-table-list"></i>
              <h4>Monthly Sessions</h4>
            </div>
            <div className="tile col-md-3 col-sm-12">
              <i className="fa-solid fa-calendar-days"></i>
              <h4>Bi-Monthly Sessions</h4>
            </div>
            <div className="tile">
              <i className="fa-solid fa-check"></i>
              <h4>Quaterly Sessions</h4>
            </div>
          </div>

          <p>
            Mokab Pest Control also Offer Professional Cleaning Services Across
            in world.
          </p>
          <a href="#" target="_blank" className="btn tile-button">
            Discover More
          </a>
        </div>
      </section> */}
    </main>
  );
}

export default MainPage;
