import React from "react";
import "../styles/topsection.css"
const Footer = () => {
  const section1 = ["Careers", " About us ", "Africa Modern Slavery Statement"];
  const section2 = ["Sell on Afroshopline", "Sell Under Private Brands", "Sell on Afroshopline Business",'Sell on Afroshopline Handmade',
                    'Sell on Afroshopline Launchpad','Associates Programme','Fulfilment by Afroshopline','Seller Fulfilled Prime',
                'Advertise Your Products','Independently Publish With us','Afroshopline Pay','Host An Afroshopline Hub','See all'];
  const section3 = ["Afroshopline Platinum Mastercard", "Afroshopline Classic Mastercard", "Afroshopline Money Store",'Gift Cards','Afroshopline Currency Converter',
                    'Payment methods Help','Shop With Points','Top Up Your Account','Top Up Your Account In Store'];
   const section4 = ["COVID-19 and Afroshopline", "Track Packages or View Oders",'Delivery Rates & Policies  ','Afroshopline Prime ','Returns & Replacements ',
                    'Recycling ','Manage Your Content and Devices','Afroshopline Mobile App ','Afroshopline Customer ','Afroshopline Assistant '];
  return (
    <footer
      className="footer mt-auto py-3 px-5 footercolor"
      style={{ backgroundColor: "#4E54A4" }}
    >
      <div
        className="row d-flex justify-content-center"
        style={{ height: "607px" }}
      >
        <div className="col-md-3" style={{ paddingTop: "88px" }}>
          <p className="text-white" style={{ fontSize: "20px" }}>
            Get to know Us
          </p>
          <div class="list-group ">
            {section1.map((linktext, index) => (
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
                key={index}
              >
                {linktext}
              </a>
            ))}
          </div>
        </div>
        <div className="col-md-3" style={{ paddingTop: "88px" }}>
          <p className="text-white " style={{ fontSize: "20px" }}>
            Make Money With Us
          </p>
          <div class="list-group ">
          {section2.map((linktext, index) => (
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
                key={index}
              >
                {linktext}
              </a>
            ))}
          </div>
        </div>
        <div className="col-md-3" style={{ paddingTop: "88px" }}>
          <p className="text-white" style={{ fontSize: "20px" }}>
          Afroshopline payment methods
          </p>
          <div class="list-group ">
          {section3.map((linktext, index) => (
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
                key={index}
              >
                {linktext}
              </a>
            ))}
          </div>
        </div>
        <div className="col-md-3" style={{ paddingTop: "88px" }}>
          <p className="text-white" style={{ fontSize: "20px" }}>
            Get to know Us
          </p>
          <div class="list-group ">
          {section4.map((linktext, index) => (
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
                key={index}
              >
                {linktext}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center">
          <li><img src={`${process.env.PUBLIC_URL}/images/footerlogo.png`} alt="" /></li>
          <li><p className="text-white  ml-5">© 2021 All Rights Reserved</p></li>
      </div>
    </footer>
  );
};

export default Footer;
