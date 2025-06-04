import NavBar from ".././components/NavBar";
import TopHeader from ".././components/TopHeader";
import Footer from ".././components/Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <TopHeader />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
