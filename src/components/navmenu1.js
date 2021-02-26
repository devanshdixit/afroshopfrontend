import React from "react";
import "../styles/topsection.css";
const NavMenu1   = () => {
  return (
    <>
      <div className="container-fluid border mt-2">
        <ul className="nav justify-content-center m-2">
        <a href="/" target="_blank" rel="noreferrer">
          <button className="p-2 btn btn-outline-dark mr-2 buttontopnav"  style={{width:"280px",height:"50px"}}>
          <img
            className="d-inline"
            width={34}
            height={24}
            src={`${process.env.PUBLIC_URL}/images/topmenu1/Mask Group 10.png`}
            alt=""
          />
          <p className="d-inline p-2">AfroMart</p>
          </button>
          </a>
        <a href="http://afrotradeshow.afroshopline.com/" target="_blank" rel="noreferrer">
          <button className="p-2 btn btn-outline-dark buttontopnav" style={{width:"280px",height:"50px"}}>
          <img
            className="d-inline"
            width={34}
            height={24}
            src={`${process.env.PUBLIC_URL}/images/topmenu1/shoppingcart-1066110386.png`}
            alt=""
          />
          <p className="d-inline p-2">Afro Trade Show</p>
          </button>
          </a>
        <a href="/" target="_blank" rel="noreferrer">
          <button className="p-2 btn btn-outline-dark buttontopnav ml-2"  style={{width:"280px",height:"50px"}}>
          <img
            className="d-inline"
            width={34}
            height={24}
            src={`${process.env.PUBLIC_URL}/images/topmenu1/68b9fc19039aba0e4781e98d55846ac8.png`}
            alt=""
          />
          <p className="d-inline p-2">Fashion & Lifestyle</p>
          </button>
          </a>
        <a href="/" target="_blank" rel="noreferrer">
          <button className=" ml-2 p-2 btn btn-outline-dark buttontopnav"  style={{width:"280px",height:"50px"}}>
          <img
            className="d-inline"
            width={34}
            height={24}
            src={`${process.env.PUBLIC_URL}/images/topmenu1/global-channel-450-800.png`}
            alt=""
          />
          <p className="d-inline p-2">Rocketers Global Collection</p>
          </button>
          </a>
        <a href="http://afrogames.afroshopline.com/" target="_blank" rel="noreferrer">
          <button className="ml-2 p-2 btn btn-outline-dark buttontopnav" style={{width:"280px",height:"50px"}}>
          <img
            className="d-inline"
            width={34}
            height={24}
            src={`${process.env.PUBLIC_URL}/images/topmenu1/ps5-vs-ps4-controller-shutterstock.png`}
            alt=""
          />
          <p className="d-inline p-2">Afro Games</p>
          </button>
          </a>
        </ul>
      </div>
    </>
  );
};

export default NavMenu1;
