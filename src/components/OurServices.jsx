import ServicesCard from "./ServicesCard";

function OurServices() {
  const servicesData = [
    {
      image: "src/assets/images/ser-1.jpg",
      altText: "ser-1",
      title: "Anti Termite Services",
      text: "Get protected from Viruses & Diseases causing bacteria with a deep sanitization and Disinfection service.",
    },
    {
      image: "src/assets/images/ser-2.jpg",
      altText: "ser-2",
      title: "Cleaning Services",
      text: "Get protected from Viruses & Diseases causing bacteria with a deep sanitization and Disinfection service.",
    },
    {
      image: "src/assets/images/ser-3.jpg",
      altText: "ser-3",
      title: "General Services",
      text: "Get protected from Viruses & Diseases causing bacteria with a deep sanitization and Disinfection service.",
    },
  ];

  return (
    <div className="container-fluid text-center">
      <div className="services">
        <h2>Our Services</h2>
        <p>
          Get protected from Viruses & Diseases causing bacteria with a deep
          sanitization and Disinfection service.
        </p>
        <div className="container-fluid">
          <div className="row card-container">
            {servicesData.map((item) => (
              <ServicesCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
