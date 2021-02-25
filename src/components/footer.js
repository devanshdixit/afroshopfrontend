import React from "react";
import "../styles/topsection.css";
const Footer = () => {
  const section1 = ["Careers", " About us ", "Africa Modern Slavery Statement"];
  const section2 = [
    "Sell on Afroshopline",
    "Sell Under Private Brands",
    "Sell on Afroshopline Business",
    "Sell on Afroshopline Handmade",
    "Sell on Afroshopline Launchpad",
    "Associates Programme",
    "Fulfilment by Afroshopline",
    "Seller Fulfilled Prime",
    "Advertise Your Products",
    "Independently Publish With us",
    "Afroshopline Pay",
    "Host An Afroshopline Hub",
  ];
  const section3 = [
    "Afroshopline Platinum Mastercard",
    "Afroshopline Classic Mastercard",
    "Afroshopline Money Store",
    "Gift Cards",
    "Afroshopline Currency Converter",
    "Payment methods Help",
    "Shop With Points",
    "Top Up Your Account",
    "Top Up Your Account In Store",
  ];
  const section4 = [
    "COVID-19 and Afroshopline",
    "Track Packages or View Oders",
    "Delivery Rates & Policies  ",
    "Afroshopline Prime ",
    "Returns & Replacements ",
    "Recycling ",
    "Manage Your Content and Devices",
    "Afroshopline Mobile App ",
    "Afroshopline Customer ",
    "Afroshopline Assistant ",
  ];
  return (
      <>
      <div className="mt-3 px-5">
    <h3 class="footerheader"><span>CHOOSE YOUR SUPPLIERS BY REGIONS</span></h3>
    <ul className="nav justify-content-start m-2">
          <button className="p-2 btn btn-outline-dark mr-2 buttontopnav"  style={{height:"50px"}}>
          <img
            className="d-inline"
            width={70}
            height={31}
            src={`${process.env.PUBLIC_URL}/images/flags/5fb4a34ad221c6bb842bd5714ad73ca4.png`}
            alt=""
          />
          <p className="d-inline p-2">Japan</p>
          </button>
          <button className="p-2 btn btn-outline-dark buttontopnav" style={{height:"50px"}}>
          <img
            className="d-inline"
            width={70}
            height={31}
            src={`${process.env.PUBLIC_URL}/images/flags/1024px-Ottoman_flag_alternative.svg.png`}
            alt=""
          />
          <p className="d-inline p-2">Turkey</p>
          </button>
          <button className="p-2 btn btn-outline-dark buttontopnav ml-2"  style={{height:"50px"}}>
          <img
            className="d-inline"
            width={70}
            height={31}
            src={`${process.env.PUBLIC_URL}/images/flags/Flag-China.png`}
            alt=""
          />
          <p className="d-inline p-2">China</p>
          </button>
          <button className=" ml-2 p-2 btn btn-outline-dark buttontopnav"  style={{height:"50px"}}>
          <img
            className="d-inline"
            width={70}
            height={31}
            src={`${process.env.PUBLIC_URL}/images/flags/1200px-Flag_of_the_United_States.svg.png`}
            alt=""
          />
          <p className="d-inline p-2">USA</p>
          </button>
          <button className="ml-2 p-2 btn btn-outline-dark buttontopnav" style={{height:"50px"}}>
          <img
            className="d-inline"
            width={70}
            height={31}
            src={`${process.env.PUBLIC_URL}/images/flags/Flag-Mali.png`}
            alt=""
          />
          <p className="d-inline p-2">Mali</p>
          </button>
          <button className="ml-2 p-2 btn btn-outline-dark buttontopnav" style={{height:"50px"}}>
          <img
            className="d-inline"
            width={70}
            height={31}
            src={`${process.env.PUBLIC_URL}/images/flags/images (2).png`}
            alt=""
          />
          <p className="d-inline p-2">London</p>
          </button>
          <button className="ml-2 p-2 btn btn-outline-dark buttontopnav" style={{height:"50px"}}>
          <img
            className="d-inline"
            width={70}
            height={31}
            src={`${process.env.PUBLIC_URL}/images/flags/e0bf963a1400673fc43a8c4c2e51c716.png`}
            alt=""
          />
          <p className="d-inline p-2">France</p>
          </button>
          <button className="ml-2 p-2 btn btn-outline-dark buttontopnav" style={{height:"50px"}}>
          <img
            className="d-inline"
            width={70}
            height={31}
            src={`${process.env.PUBLIC_URL}/images/flags/1200px-Flag_of_Italy.svg.png`}
            alt=""
          />
          <p className="d-inline p-2">Italy</p>
          </button>
          <a href="/" className="ml-3  p-1" style={{color:"black"}}><p className=" mt-1">More regions<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></p><i class="bi bi-caret-down-fill"></i></a>
        </ul>
    </div>
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
             <a
                data-toggle="collapse" href="#second" role="button" aria-expanded="false" aria-controls="second"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
                
              >
                See all<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
              </a>
          </div>
        </div>
        <div className="col-md-3" style={{ paddingTop: "88px" }}>
          <p className="text-white" style={{ fontSize: "20px" }}>
          Let Us Help You
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
      <div
        className="row d-flex justify-content-center collapse   "
        
      >
        <div className="col-md-3 collapse" style={{ paddingTop: "20px" }} id="second">
          <p className="text-white" style={{ fontSize: "20px" }}>
          Afroshopline Music
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
               Stream Millions of Songs 
              </a>
          </div>
          <p className="text-white pt-4" style={{ fontSize: "20px" }}>
          Audible
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
               Download Audiobooks 
              </a>
          </div>
          <p className="text-white pt-4" style={{ fontSize: "20px" }}>
          Afroshopline Home Services
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
               Experienced Pros
              </a>
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
               Happiness Guarantee
              </a>
          </div>
          <p className="text-white pt-4" style={{ fontSize: "20px" }}>
          Shopbop
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
              Designer
              </a>
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
               Fashion Brands
              </a>
          </div>
        </div>
        <div className="col-md-3 collapse" style={{ paddingTop: "20px" }} id="second">
          <p className="text-white " style={{ fontSize: "20px" }}>
          Afro Books
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
                Books, Art &Collectables 
              </a>
          </div>
          <p className="text-white pt-3 " style={{ fontSize: "20px" }}>
          Book Depository
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
               Books With Free
               Delivery Worldwide 
              </a>
          </div>
          <p className="text-white pt-3 " style={{ fontSize: "20px" }}>
          IMDb
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
               Movies, Tv& Celebrates
              </a>
          </div>
          <p className="text-white pt-3 " style={{ fontSize: "20px" }}>
          Afroshopline Warehouse
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
               Deep Discounts
              </a>
          </div>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
               Open-Box Products
              </a>
          </div>
          <p className="text-white pt-3" style={{ fontSize: "20px" }}>
          Afroshopline Warehouse
          </p>
          <div class="list-group mb-5">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
               Pass it on, trade it in,
give it a second life

              </a>
          </div>
        </div>
        <div className="col-md-3 collapse" style={{ paddingTop: "20px" }} id="second" >
        <p className="text-white " style={{ fontSize: "20px" }}>
        ACX
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
              Audiobook Publishing
              Made Easy
              </a>
          </div>
          <p className="text-white pt-3" style={{ fontSize: "20px" }}>
          DPReview
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
              Digital
              Photography
              </a>
          </div>
          <p className="text-white pt-3" style={{ fontSize: "20px" }}>
          Kindle Direct Publishing
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
              Indie Digital & Print Publishing
              Made Easy
              </a>
          </div>
          <p className="text-white pt-3" style={{ fontSize: "20px" }}>
          Afroshopline Business
          </p>
          <div class="list-group">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
              Service For
              Business Customers
              </a>
          </div>
        </div>
        <div className="col-md-3 collapse" style={{ paddingTop: "20px" }} id="second">
        <p className="text-white " style={{ fontSize: "20px" }}>
        Afroshopline Web Services
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
              Scalable Cloud
              Computing Services
              </a>
          </div>
          <p className="text-white pt-3" style={{ fontSize: "20px" }}>
          Goodreads
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
              Book Reviews
              &recommendations
              </a>
          </div>
          <p className="text-white pt-3" style={{ fontSize: "20px" }}>
          Prime Now
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
              2-Hour Delivery
              On Everyday Essentials
              </a>
          </div>
          <p className="text-white pt-3" style={{ fontSize: "20px" }}>
          Whole Foods Market
          </p>
          <div class="list-group ">
              <a
                href="/"
                className="m-1 list-group-item-action text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
              We Believe in
              Real Food
              </a>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center">
        <li>
          <a href="/">
            <p className="text-white mr-5">Conditions of Use & Sale</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p className="text-white mr-5">Privacy Notice</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p className="text-white mr-4">Cookies Notice</p>
          </a>
        </li>
        <li>
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/footerlogo.png`}
              alt=""
            />
          </a>
        </li>

        <li>
          <p className="text-white  ml-5">
            © 2010-2021 Afroshopline Inc. or its affiliates
          </p>
        </li>

        <li>
          <a href="/">
            <p className="text-white ml-5">Interest-Based Ads Notice</p>
          </a>
        </li>
      </div>
    </footer>
    </>
  );
};

export default Footer;
