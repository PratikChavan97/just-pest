function ChooseUS() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="row sub-hero gx-5">
        <div className="col-lg-3 col-md-3 col-12 d-flex justify-content-center align-items-center">
          <img
            src="src/assets/images/sub-hero.jpg"
            alt="sub-hero"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-5 col-md-5 col-12 d-flex flex-column justify-content-center align-items-start">
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
        </div>
      </div>
    </div>
  );
}

export default ChooseUS;
