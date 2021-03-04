import React from "react";
import Base from "../components/base";

import "../styles/topsection.css";

const ProductPage = () => {
  return (
    <Base>
    <div className="row">
    <div className="col-md-8">
    <img src={`${process.env.PUBLIC_URL}/images/productpage/960x0.png`} className="img-fluid p-2" alt="" />
    <div className="p-2" >
    <div class="d-flex flex-row flex-nowrap overflow-auto">
      <div class="card card-block mx-2" style={{minWidth:"160px",minHeight:"140px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/productpage/subimage.png`} alt=""  />
      </div>   
      <div class="card card-block mx-2" style={{minWidth:"160px",minHeight:"140px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/productpage/sirisvisual-b8TD_PdP8Mw-unsplash.png`} alt=""  />
      </div>
      <div class="card card-block mx-2" style={{minWidth:"160px",minHeight:"140px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/productpage/david-svihovec-LEtrhrME07g-unsplash.png`} alt=""  />
      </div>
      <div class="card card-block mx-2" style={{minWidth:"160px",minHeight:"140px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/productpage/david-svihovec-pXwpjDy8IRg-unsplash.png`} alt=""  />
      </div>
      <div class="card card-block mx-2" style={{minWidth:"160px",minHeight:"140px"}}>
          <img src={`${process.env.PUBLIC_URL}/images/productpage/miguel-tomas-_eEIC57lBSY-unsplash.png`} alt=""  />
      </div>
</div>

          <img src={`${process.env.PUBLIC_URL}/images/productpage/Group 59.png`} alt="" className="img-fluid p-2" />
          <div className="border border-dark p-2 m-2">
            <h1 className="px-2">Realted Ads</h1>
            <div className="p-2">
          <img src={`${process.env.PUBLIC_URL}/images/productpage/productimg1.png`} className="img-fluid m-2 p-2 border" alt=""  />
          <img src={`${process.env.PUBLIC_URL}/images/productpage/productimg2.png`} className="img-fluid m-2 p-2 border" alt=""  />
          <img src={`${process.env.PUBLIC_URL}/images/productpage/productimg3.png`} className="img-fluid m-2 p-2 border" alt=""  />
          <img src={`${process.env.PUBLIC_URL}/images/productpage/productimg4.png`} className="img-fluid m-2 p-2 border" alt=""  />
          </div>
          </div>
    </div>
    </div>
    <div className="col-md-4">
      <img src={`${process.env.PUBLIC_URL}/images/productpage/Group 58.png`} className="img-fluid m-1" alt="" />
      <img src={`${process.env.PUBLIC_URL}/images/productpage/seller.png`} className="img-fluid m-1" alt="" />
      <img src={`${process.env.PUBLIC_URL}/images/productpage/map.png`} className="img-fluid m-1" alt="" />
      <div className="container-fluid border border-dark m-1" style={{width:"481px",height:"605px"}}></div>
    </div>
    </div>
    </Base>
  );
};

export default ProductPage;
