function ReliablePestCard({ item }) {
  return (
    <div className="inner-service-card col-lg-3 col-12">
      <i className={item.image}></i>
      <h3>{item.title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus
      </p>
    </div>
  );
}

export default ReliablePestCard;
