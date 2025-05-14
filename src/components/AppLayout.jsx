import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CardOverlay from "./CardOverlay";

function AppLayout() {
  return (
    <div>
      <Header />
      {/* <CardOverlay /> */}
      {/* <div>
        <Outlet />
      </div> */}
      <Footer />
    </div>
  );
}

export default AppLayout;
