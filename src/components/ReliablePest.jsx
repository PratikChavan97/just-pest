import ReliablePestCard from "./ReliablePestCard";

function ReliablePest() {
  const reliablePestData = [
    {
      image: "fa-regular fa-gem",
      title: "Our Value",
    },
    {
      image: "fa-solid fa-eye",
      title: "Our Vision",
    },
    {
      image: "fa-regular fa-gem",
      title: "Our Mission",
    },
  ];
  return (
    <div className="container text-center py-5">
      <div className="services-card">
        <h2>Reliable Pest Defense, Every Time</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          culpa doloremque. Aliquid expedita ut, consectetur pariatur veritatis
          corrupti dolores ab rerum provident molestiae delectus illo voluptate
          ex voluptatum debitis recusandae!
        </p>
        <div className="container">
          <div className="row">
            {reliablePestData.map((item) => (
              <ReliablePestCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReliablePest;
