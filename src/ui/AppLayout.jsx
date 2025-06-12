import NavBar from ".././components/NavBar";
import TopHeader from ".././components/TopHeader";
import Footer from ".././components/Footer";
import { Outlet } from "react-router-dom";
import FloatingMedia from "../components/FloatingMedia";

function AppLayout() {
  return (
    <div>
      <TopHeader />
      <NavBar />
      <Outlet />
      <Footer />
      <FloatingMedia />
    </div>
  );
}

export default AppLayout;
