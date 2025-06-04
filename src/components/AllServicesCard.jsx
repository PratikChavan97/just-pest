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

export default AllServicesCard;
