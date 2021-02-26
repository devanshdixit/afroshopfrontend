import React from "react";
export default function HeaderButtons() {
  return (
    <div className="container-fluid mt-2 border-bottom">
      <div className="row">
        <div className="col ">
        <a href="/" target="_blank" rel="noreferrer">
          <button 
            className="text-center border btn"
            style={{
              borderRadius: "40px",
              width: "215px",
              height: "52px",
              borderColor: "#D9CFCF",
            }}
          >
            <img
              className="d-inline "
              style={{ backgroundColor: "red" }}
              width={65}
              height={45}
              src={`${process.env.PUBLIC_URL}/images/investment-property-management.png`}
              alt=""
            />
            <p className="d-inline">Properties</p>
          </button>
          </a>
        </div>
        <div className="col ">
          <a href="http://travels.afroshopline.com/" target="_blank" rel="noreferrer">
          <button 
            className="text-center border btn"
            style={{
              borderRadius: "40px",
              width: "215px",
              height: "52px",
              borderColor: "#D9CFCF",
            }}
          >
            <img
              className="d-inline "
              style={{ height: "45px", width: "65px" }}
              src={`${process.env.PUBLIC_URL}/images/sahara-bus-travels-service-500x500.png`}
              alt=""
            />
            <p className="ml-2 d-inline text-dark">Travels</p>
          </button>
          </a>
        </div>
        <div className="col ">
        <a href="http://pickuplocations.afroshopline.com/" target="_blank" rel="noreferrer">
          <button 
            className="text-center border btn"
            style={{
              borderRadius: "40px",
              width: "250px",
              height: "52px",
              borderColor: "#D9CFCF",
            }}
          >
            <img
              className="d-inline "
              style={{ height: "45px", width: "65px"}}
              src={`${process.env.PUBLIC_URL}/images/location.png`}
              alt=""
            />
            <p className="d-inline">Pick Up Locations</p>
          </button>
          </a>
        </div>
        <div className="col ">
        <a href="/" target="_blank" rel="noreferrer">
          <button 
            className="text-center border btn"
            style={{
              borderRadius: "40px",
              width: "215px",
              height: "52px",
              borderColor: "#D9CFCF",
            }}
          >
            <img
              className="d-inline "
              style={{ height: "45px", width: "65px", backgroundColor: "red" }}
              src={`${process.env.PUBLIC_URL}/images/Gifts-under-1K.png`}
              alt=""
            />
            <p className="d-inline">Gift Ideas</p>
          </button>
          </a>
        </div>
        <div className="col ">
          <a href="http://afropay.afroshopline.com/" target="_blank" rel="noreferrer">
          <button 
            className="text-center border btn"
            style={{
              borderRadius: "40px",
              width: "215px",
              height: "52px",
              borderColor: "#D9CFCF",
            }}
          >
            <img
              className="d-inline "
              style={{ height: "45px", width: "65px", backgroundColor: "red" }}
              src={`${process.env.PUBLIC_URL}/images/unnamed.png`}
              alt=""
            />
            <p className="d-inline">Afro Pay</p>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}
