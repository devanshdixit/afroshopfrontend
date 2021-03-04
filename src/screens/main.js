import React from "react";
import { Link } from "react-router-dom";
import Base from "../components/base";
import NavMenu from "../components/navmenu";
import NavMenu1 from "../components/navmenu1";
import TopSection from "../components/topsection";
import "../styles/topsection.css";

const Main = () => {
  return (
    <Base>
      <NavMenu />
      <TopSection />
      <NavMenu1 />
      <div className="conatiner-fluid d-flex justify-content-center">
        <img src={`${process.env.PUBLIC_URL}/images/Group 51.png`} className="img-fluid" alt="" />
      </div>
      <div className="row  justify-content-center">
        <div className="col-md-6" style={{ maxWidth: "820px" }}>
          <div className="d-flex flex-column">
            <div className="p-2">New Arrivals</div>
            <div class="d-flex flex-wrap bg-light">
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/14213b85162359.5d7351316c047.png`}
                  alt=""
                />
                <p className="text-center">
                  {" "}
                  $2.00
                  <br /> Trending Now
                </p>
              </div>
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/71r769YkscL._SL1500_.png`}
                  alt=""
                />
                <p className="text-center ">
                  {" "}
                  $1.00
                  <br /> Trending Now
                </p>
              </div>
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/tomato-vegitable-500x500.png`}
                  alt=""
                />
                <p className="text-center">
                  {" "}
                  $2.00
                  <br /> Trending Now
                </p>
              </div>
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/6000199527402.png`}
                  alt=""
                />
                <p className="text-center">
                  {" "}
                  $2.00
                  <br /> Trending Now
                </p>
              </div>
            </div>
            <div class="d-flex flex-wrap bg-light">
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/8790689259.png`}
                  alt=""
                />
                <p className="text-center">
                  {" "}
                  $2.00
                  <br /> Trending Now
                </p>
              </div>
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/3130bf491afe11d959edd9c91401b099ba3a14c4_000000000001231478.png`}
                  alt=""
                />
                <p className="text-center ">
                  {" "}
                  $1.00
                  <br /> Trending Now
                </p>
              </div>
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/front_fr.7.400.png`}
                  alt=""
                />
                <p className="text-center">
                  {" "}
                  $2.00
                  <br /> Trending Now
                </p>
              </div>
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/local-african-green-leafy-vegetables-african-spinach-39414-e830531c870844b3a47b2500c7621244.png`}
                  alt=""
                />
                <p className="text-center">
                  {" "}
                  $2.00
                  <br /> Trending Now
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6" style={{ maxWidth: "820px" }}>
          <div className="d-flex flex-column">
            <div className="p-2 ">
                <img src={`${process.env.PUBLIC_URL}/images/mainscreen/Color_circle_(hue-sat).png`} className="d-inline" alt="" />
                <p className="d-inline ml-2 ">Global Original Sources</p></div>
            <div class="d-flex flex-wrap bg-light">
            <Link to="/productpage">
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/images.png`}
                  alt=""
                />
                <p className="text-center">
                  {" "}
                  $2.00
                  <br /> Trending Now
                </p>
              </div>
              </Link>
              <Link to="/productpage">
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/024307_bla_featherweight_extreme_down_padded_jacket_men_ss20_01.png`}
                  alt=""
                />
                <p className="text-center ">
                  {" "}
                  $1.00
                  <br /> Trending Now
                </p>
              </div>
              </Link>
              <Link to="/productpage">
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/1195071-1.png`}
                  alt=""
                />
                <p className="text-center">
                  {" "}
                  $2.00
                  <br /> Trending Now
                </p>
              </div>
              </Link>
              <Link to="/productpage">
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/396415709ca36dc407225f2465cd2146.png`}
                  alt=""
                />
                <p className="text-center">
                  {" "}
                  $2.00
                  <br /> Trending Now
                </p>
              </div>
              </Link>
            </div>
            <div class="d-flex flex-wrap bg-light">
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/3PNL4CLJ-large.png`}
                  alt=""
                />
                <p className="text-center">
                  {" "}
                  $2.00
                  <br /> Trending Now
                </p>
              </div>
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/61u4pjvSKqL._AC_SX425_.png`}
                  alt=""
                />
                <p className="text-center ">
                  {" "}
                  $1.00
                  <br /> Trending Now
                </p>
              </div>
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/1585608057-1523412460-olay-regenerist-micro-sculpting-cream-face-moisturizer-1-7-oz-packagi-06-1523412450.png`}
                  alt=""
                />
                <p className="text-center">
                  {" "}
                  $2.00
                  <br /> Trending Now
                </p>
              </div>
              <div class="p-1 border m-1">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mainscreen/71KTpPtqJRL._AC_UL1500_.png`}
                  alt=""
                />
                <p className="text-center">
                  {" "}
                  $2.00
                  <br /> Trending Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-5 mr-2 mt-5">
    <h3 className="footerheader"><span>For You</span></h3>
    </div>
    <div className="px-5 mb-5" >
    <div class="d-flex flex-row flex-nowrap overflow-auto">
      <div class="card card-block mx-2" style={{minWidth:"300px",minHeight:"408px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/mainscreen/Group 35.png`} alt=""  />
      </div>
      <div class="card card-block mx-2" style={{minWidth:"300px",minHeight:"408px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/mainscreen/dsdadadad.png`} alt=""  />
      </div>
      <div class="card card-block mx-2" style={{minWidth:"300px",minHeight:"408px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/mainscreen/pipe.png`} alt=""  />
      </div>
      <div class="card card-block mx-2" style={{minWidth:"300px",minHeight:"408px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/mainscreen/car.png`} alt=""  />
      </div>
      <div class="card card-block mx-2" style={{minWidth:"300px",minHeight:"408px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/mainscreen/as.png`} alt=""  />
      </div>
      <div class="card card-block mx-2" style={{minWidth:"300px",minHeight:"408px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/mainscreen/as.png`} alt=""  />
      </div>
      <div class="card card-block mx-2" style={{minWidth:"300px",minHeight:"408px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/mainscreen/as.png`} alt=""  />
      </div>
      <div class="card card-block mx-2" style={{minWidth:"300px",minHeight:"408px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/mainscreen/as.png`} alt=""  />
      </div>   
</div>
    </div>

    </Base>
  );
};

export default Main;
