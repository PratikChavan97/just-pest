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

export default OtherServicesCard;
