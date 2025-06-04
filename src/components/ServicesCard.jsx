function ServicesCard({ item }) {
  return (
    <div className="service-card col-lg-3 col-md-6 col-12">
      <img
        src={item.image}
        alt={item.altText}
        className="card-top-img img-fluid"
      />
      <h3 className="card-title">{item.title}</h3>
      <p className="card-text">{item.text}</p>
      <button>Discover More</button>
    </div>
  );
}

export default ServicesCard;
