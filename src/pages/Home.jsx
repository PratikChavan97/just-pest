// import Header from "./components/Header";

import Card from "../components/Card";
import ChooseUS from "../components/ChooseUS";
import OurServices from "../components/OurServices";
import AllServices from "../components/AllServices";
import OtherServices from "../components/OtherServices";
import ReliablePest from "../components/ReliablePest";
import Qualities from "../components/Qualities";
import FlexiblePlans from "../components/FlexiblePlans";

function Home() {
  return (
    <div>
      <Card />
      <ChooseUS />
      <OurServices />
      <AllServices />
      <OtherServices />
      <ReliablePest />
      <Qualities />
      {/* <FlexiblePlans /> */}
    </div>
  );
}

export default Home;
