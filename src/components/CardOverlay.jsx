function CardOverlay() {
  return (
    <div className="card bg-dark text-white">
      <img
        src="\assets\images\slider.jpg"
        className="card-img img-fluid"
        alt="slider"
      />
      <div className="card-img-overlay">
        <h5 className="card-title">
          We Are Among The Best Pest Control Company
        </h5>
        <p className="card-text">
          Our pest control services are proactive and employ proven IPM
          (Integrated Pest Management)
        </p>
        <div>
          <Link href="#" target="" className="btn book">
            Book Now
          </Link>
          <Link href="#" target="" className="btn more">
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardOverlay;
