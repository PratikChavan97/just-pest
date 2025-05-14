import CardOverlay from "./CardOverlay";
import "./module.Header.css";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";

function Header() {
  return (
    <header id="header">
      <TopHeader />
      <CardOverlay />
      {/* <NavBar /> */}
      {/* <div class="header-bottom row">
        <div class="header-hero col-sm-3">
          <img src="src\assets\logo\logo.png" class="logo" alt="logo" />
        </div>
        <div class="navigation col-md-7 col-sm-6">
          <nav>
          </nav>
        </div>
        
      </div> */}
    </header>
  );
}

export default Header;
