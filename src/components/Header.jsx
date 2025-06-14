import CardOverlay from "./CardOverlay";
import "./module.Header.css";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";

function Header() {
  return (
    <header id="header">
      <TopHeader />
      <CardOverlay />
    </header>
  );
}

export default Header;
