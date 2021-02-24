import React from "react";

const TopSection = () => {
  return (
    
      <div className="container-fluid row"> 
        <div className="col-md-3 bg-danger">g</div>
        <div className="col-md-6">
        <div id="demo" class="carousel slide" data-ride="carousel">

<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={`${process.env.PUBLIC_URL}/images/la.jpg`} alt="Los Angeles" width="1100" height="500" />
  </div>
  <div class="carousel-item">
    <img src={`${process.env.PUBLIC_URL}/images/chicago.jpg`} alt="Chicago" width="1100" height="500" />
  </div>
  <div class="carousel-item">
    <img src={`${process.env.PUBLIC_URL}/images/ny.jpg`} alt="New York" width="1100" height="500" />
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
        <div className="col-md-3 bg-primary">
          <div className="bg-danger m-1" style={{height:"43px",width:"208px "}}><p>3D Virtual Home</p></div>
          <div className="bg-white m-1" style={{height:"120px",width:"208px",paddingLeft:"10px",paddingTop:"10px"}}>
            <p className="" style={{}}>3D Virtual Home</p>
            <button style={{width:"116px"}} className="d-inline">Source Now</button>
          </div>
            
        </div>
      </div>
    
  );
};

export default TopSection;
