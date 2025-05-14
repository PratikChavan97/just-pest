const topHeaderData = [
  {
    icon: "fa-solid fa-envelope-open",
    text: "info@example.com",
  },
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
      <div className="row">
        <div className="header-top">
          <div className="col-lg-9 col-md-9">
            <div className="header-top-info">
              {topHeaderData.map((item) => (
                <TopHeaderContactDetails item={item} key={item.text} />
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-3">
            <div className="header-social-icons">
              {topSocialIcons.map((item) => (
                <TopHeaderSocialIcons item={item} key={item} />
              ))}
            </div>
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
