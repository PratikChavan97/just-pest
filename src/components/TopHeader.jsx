import { Link } from "react-router-dom";
import "./module.TopHeader.css";

const topHeaderData = [
  {
    icon: "fa-solid fa-phone-volume",
    text: "+333 333 333",
  },
  {
    icon: "fa-solid fa-bell",
    text: "Office Hours: 8AM - 11PM",
  },
];

const topSocialIcons = [
  "fa-brands fa-facebook-f",
  "fa-brands fa-twitter",
  "fa-brands fa-youtube",
  "fa-brands fa-linkedin",
];

function TopHeader() {
  return (
    <div className="container-fluid">
      <div className="row header-top">
        <div className="col-lg-10 col-md-10 col-12">
          <div className="header-top-info container">
            <div className="header-info">
              <Link to="mailto:info@justpest.in">
                <i className="fa-solid fa-envelope-open"></i>
                <p>info@justpest.in</p>
              </Link>
            </div>
            {topHeaderData.map((item) => (
              <TopHeaderContactDetails item={item} key={item.text} />
            ))}
          </div>
        </div>

        <div className="col-lg-2 col-md-2 col-12">
          <div className="header-social-icons">
            {topSocialIcons.map((item) => (
              <TopHeaderSocialIcons item={item} key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TopHeaderContactDetails({ item }) {
  return (
    <div className="header-info">
      <i className={item.icon}></i>
      <p>{item.text}</p>
    </div>
  );
}

function TopHeaderSocialIcons({ item }) {
  return <i className={item}></i>;
}

export default TopHeader;
