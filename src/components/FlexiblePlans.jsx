import FlexiblePlansCard from "./FlexiblePlansCard";

function FlexiblePlans() {
  const flexiblePlansData = [
    // {
    //   image: "src/assets/icons/ladybug-icon.png",
    //   altText: "ladybug-icon",
    //   title: "Pest Control",
    // },
    {
      image: "fa-solid fa-bell",
      altText: null,
      title: "One Time/ On Demand",
    },
    {
      image: "fa-solid fa-table-list",
      altText: null,
      title: "Monthly Sessions",
    },
    {
      image: "fa-solid fa-calendar-days",
      altText: null,
      title: "Bi-Monthly Sessions",
    },
    {
      image: "fa-solid fa-check",
      altText: null,
      title: "Quaterly Sessions",
    },
  ];
  return (
    <div className="container py-5">
      <div className="card">
        <img
          src="/assets/images/slider.jpg"
          alt="slider"
          className="card-img"
        />

        <div className="card-img-overlay tiles-section d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center h2">
            Choose from the Flexible Plans that Include
          </h2>
          <div className="container">
            <div className="row tiles py-5">
              <div className="tile col-lg-2 col-md-3 col-4">
                <img
                  src="/assets/icons/ladybug-icon.png"
                  alt="ladybug-icon"
                  className="tile-img"
                />
                <h4>Pest Control</h4>
              </div>
              {flexiblePlansData.map((item) => (
                <FlexiblePlansCard item={item} key={item.image} />
              ))}
            </div>
          </div>

          <p className="card-text">
            Mokab Pest Control also Offer Professional Cleaning Services Across
            in world.
          </p>
          <a href="#" target="_blank" className="tile-button">
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
}

export default FlexiblePlans;
