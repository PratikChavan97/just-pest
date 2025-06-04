function FlexiblePlansCard({ item }) {
  return (
    <div className="tile col-lg-2 col-md-3 col-12">
      <i className={item.image}></i>
      <h4>{item.title}</h4>
    </div>
  );
}
export default FlexiblePlansCard;
