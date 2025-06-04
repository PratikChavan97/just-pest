function Qualities() {
  return (
    <div className="container-fluid">
      <div className="row qualities">
        <div className="col-lg-6 col-md-12 col-12">
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

        <div className="col-lg-6 col-md-12 col-12">
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

export default Qualities;
