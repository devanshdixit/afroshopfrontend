import React from "react";
import "../styles/topsection.css"

const TopSection = () => {
  return (
    <div className="container-fluid row d-flex justify-content-center pt-2">
      <div className="col-md-3" style={{ maxWidth: "370px" }}>
        <p style={{ fontSize: "25px", paddingLeft: "20px" }}>My Market</p>
        <div class="">
          <a href="/" >
          <div className="mt-1 media border" style={{ width: "360px" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/Consumer-Electronics.png`}
              className="m-1"
              style={{ width: "35px", height: "40px" }}
              alt=""
            />
            <div className=" media-body pt-2 ml-3 text-dark linkdesign" >
              <p>Consumer Electronics</p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/Icon ionic-ios-arrow-back.png`}
              className="align-self-center mr-3"
              alt=""
            />
          </div>
          </a>
          <a href="/">
          <div className="mt-1 media border" style={{ width: "360px" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/stock-photo-apparel-fashion-shirt-dress-generic.png`}
              className="m-1"
              style={{ width: "35px", height: "40px" }}
              alt=""
            />
            <div className="media-body pt-2 ml-3 text-dark linkdesign">
              <p classname="">Apparel </p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/Icon ionic-ios-arrow-back.png`}
              className="align-self-center mr-3"
              alt=""
            />
          </div>
          </a>
          <a href="/">
          <div className="mt-1 media border" style={{ width: "360px" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/unnamed.png`}
              className="m-1"
              style={{ width: "35px", height: "40px" }}
              alt=""
            />
            <div className="media-body pt-2 ml-3 text-dark linkdesign">
              <p classname="">Vehicles & Accessories</p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/Icon ionic-ios-arrow-back.png`}
              className="align-self-center mr-3"
              alt=""
            />
          </div>
          </a>
          <a href="/">
          <div className="mt-1 media border" style={{ width: "360px" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/wholesale sports equipment.png`}
              className="m-1"
              style={{ width: "35px", height: "40px" }}
              alt=""
            />
            <div className="media-body pt-2 ml-3 text-dark linkdesign">
              <p classname="">Sports & Entertainment</p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/Icon ionic-ios-arrow-back.png`}
              className="align-self-center mr-3"
              alt=""
            />
          </div>
          </a>
          <a href="/">
          <div className="mt-1 media border" style={{ width: "360px" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/unnamed (1).png`}
              className="m-1"
              style={{ width: "35px", height: "40px" }}
              alt=""
            />
            <div className="media-body pt-2 ml-3 text-dark linkdesign">
              <p classname="">Machinery</p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/Icon ionic-ios-arrow-back.png`}
              className="align-self-center mr-3"
              alt=""
            />
          </div>
          </a>
          <a href="/">
          <div className="mt-1 media border" style={{ width: "360px" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/tools_and_supplies_category_image.png`}
              className="m-1"
              style={{ width: "35px", height: "40px" }}
              alt=""
            />
            <div className="media-body pt-2 ml-3 text-dark linkdesign">
              <p classname="">Home & Garden</p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/Icon ionic-ios-arrow-back.png`}
              className="align-self-center mr-3"
              alt=""
            />
          </div>
          </a>
          <a href="/">
          <div className="mt-1 media border" style={{ width: "360px" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/personal-care-products-council-2-537x402__38884_zoom.png`}
              className="m-1"
              style={{ width: "35px", height: "40px" }}
              alt=""
            />
            <div className="media-body pt-2 ml-3 text-dark linkdesign" >
              <p classname="">Beauty & Personal Care</p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/Icon ionic-ios-arrow-back.png`}
              className="align-self-center mr-3"
              alt=""
            />
          </div>
          </a>
          <a href="/">
          <div className="mt-1 media border" style={{ width: "360px" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/Colorful_Label-512.png`}
              className="m-1"
              style={{ width: "35px", height: "40px" }}
              alt=""
            />
            <div className="media-body pt-2 ml-3 top text-dark linkdesign">
              <p classname="">All Categories</p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/sidemenu/Icon ionic-ios-arrow-back.png`}
              className="align-self-center mr-3"
              alt=""
            />
          </div>
          </a>
        </div>
      </div>
      <div className="col-md-6">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={`${process.env.PUBLIC_URL}/images/la.jpeg`}
                alt="Los Angeles"
                width="100%"
                height="500"
              />
            </div>
            <div class="carousel-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/my.jpeg`}
                alt="Chicago"
                width="100%"
                height="500"
              />
            </div>
          </div>

          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
      <div className="col-md-3 " style={{ maxWidth: "210px" }}>
        <div
          className="font-weight-bold  m-1"
          style={{
            height: "43px",
            width: "208px ",
            backgroundColor: "#414DEF",
          }}
        >
          <p className="text-center pt-2 text-white">3D Virtual Home</p>
        </div>
        <div
          className="bg-white m-1 border"
          style={{
            height: "120px",
            width: "208px",
            paddingLeft: "8px",
            paddingTop: "5px",
          }}
        >
          <p className="font-weight-bold text-danger">3D Virtual Home</p>
          <div className="">
            <button
              style={{
                width: "116px",
                backgroundColor: "#414DEF",
                borderRadius: "20px",
              }}
              className="text-white btn"
            >
              Source Now
            </button>
            <img
              src={`${process.env.PUBLIC_URL}/images/96581895_526963984653357_3028292190989189120_n.png`}
              className="img-fluid img-thumbnail"
              style={{ width: "66px", height: "70px" }}
              alt=""
            />
          </div>
        </div>
        <div
          className="bg-white m-1 border"
          style={{
            height: "150px",
            width: "208px",
            paddingLeft: "8px",
          }}
        >
          <p className="font-weight-bold text-danger">
            Customized Design Solution
          </p>
          <div className="">
            <button
              style={{
                width: "116px",
                backgroundColor: "#414DEF",
                borderRadius: "20px",
              }}
              className="text-white btn pt-0"
            >
              Source Now
            </button>
            <img
              src={`${process.env.PUBLIC_URL}/images/Beds.png`}
              className="img-fluid img-thumbnail"
              alt=""
              style={{ width: "66px", height: "70px" }}
            />
          </div>
        </div>
        <div
          className="bg-white m-1 border"
          style={{
            height: "150px",
            width: "208px",
            paddingLeft: "8px",
          }}
        >
          <p className="font-weight-bold text-danger">
            Virtual Sourcing Solution
          </p>
          <div className="">
            <button
              style={{
                width: "116px",
                backgroundColor: "#414DEF",
                borderRadius: "20px",
              }}
              className="text-white btn pt-0"
            >
              Source Now
            </button>
            <img
              src={`${process.env.PUBLIC_URL}/images/roxie_gray_accent-chair_2008335_753044.png`}
              className="img-fluid img-thumbnail"
              style={{ width: "66px", height: "70px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
