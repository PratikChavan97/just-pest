import OtherServicesCard from "./OtherServicesCard";

function OtherServices() {
  const otherServicesData = [
    {
      image: "/assets/icons/mosquitos-control-icon.png",
      altText: "mosquitos-control-icon",
      title: "Mosquito Control",
      text: "Enjoy Your Outdoor Spaces Mosquito-Free",
    },
    {
      image: "/assets/icons/termite-control-icon.png",
      altText: "termite-control-icon",
      title: "Termite Control",
      text: "Protect Your Home from Termite Damage",
    },
    {
      image: "/assets/icons/bed-bug-control-icon.png",
      altText: "bed-bug-control-icon",
      title: "Bed Bug Control",
      text: "Sleep Tight with Our Bed Bug Solutions",
    },
    {
      image: "/assets/icons/ant-control-icon.png",
      altText: "ant-control-icon",
      title: "Ant Control",
      text: "Eliminate Ants for a Cleaner Home",
    },
  ];
  return (
    <div className="container-fluid small-card">
      <div className="row">
        {otherServicesData.map((item) => (
          <OtherServicesCard item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

export default OtherServices;
