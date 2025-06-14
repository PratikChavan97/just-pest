import AllServicesCard from "./AllServicesCard";

function AllServices() {
  const allServicesData = [
    {
      image: "/assets/icons/ladybug-icon.png",
      altText: "ladybug-icon",
      title: "LadyBugs",
    },
    {
      image: "/assets/icons/mosquitos-icon.png",
      altText: "mosquitos-icon",
      title: "Mosquitos",
    },
    {
      image: "/assets/icons/flies-icon.png",
      altText: "flies-icon",
      title: "Flies",
    },
    {
      image: "/assets/icons/wharf-roach-icon.png",
      altText: "wharf-roach-icon",
      title: "Wharf-roach",
    },
    {
      image: "/assets/icons/horned-atlas-icon.png",
      altText: "horned-atlas-icon",
      title: "Horned-atlas",
    },
    {
      image: "/assets/icons/scorpion-icon.png",
      altText: "scorpion-icon",
      title: "Scorpion",
    },
    {
      image: "/assets/icons/firefly-icon.png",
      altText: "firefly-icon",
      title: "Firefly",
    },
    {
      image: "/assets/icons/stinkbug-icon.png",
      altText: "stinkbug-icon",
      title: "Stinkbug",
    },
  ];
  return (
    <div className="container cards-section">
      <div className="row g-4 justify-content-center">
        {allServicesData.map((item, i) => (
          <AllServicesCard item={item} key={item.title} index={i} />
        ))}
      </div>
    </div>
  );
}

export default AllServices;
