import Button from "./Button";

function Card() {
  return (
    <div className="card">
      <img
        src="src/assets/images/slider.jpg"
        alt="slider"
        className="card-img img-fluid"
      />
      <div className="card-title card-img-overlay h-100 d-flex flex-column justify-content-center align-items-start">
        <div className="hero">
          <h3 className="card-title">
            We Are Among The Best Pest Control Company
          </h3>
          <p className="card-text">
            Our pest control services are proactive and employ proven IPM
            (Integrated Pest Management)
          </p>
          <div className="btns">
            <Button classname="booknow">Book Now</Button>
            <Button classname="discover">Discover More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
