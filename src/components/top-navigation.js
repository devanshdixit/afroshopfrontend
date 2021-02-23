import React from 'react';


export default function TopNavigation() {
  
  return (
    <div
      className="container-fluid p-2 border-bottom"
      style={{ height: "117px", width: "100%" }}
    >
      <nav class="navbar  justify-content-center">
        <a class="navbar-brand">
          <img
            className="d-flex"
            width={251.64}
            height={53}
            src={`${process.env.PUBLIC_URL}/images/afroshop logo.png`}
            alt=""
          />
        </a>

        <form className="d-flex ">
          <input
            className="form-control  "
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "50px ",
              height: "57px",
              width: "768px",
              borderColor: "#FE5A3F",
              borderWidth: "3px",
            }}
          />
          <button 
          data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"
            className=""
            type="submit"
            style={{
              height: "57px",
              width: "150px",
              borderBottomRightRadius: "50px",
              borderTopRightRadius: "50px",
              backgroundColor: "#414DEF",
              color: "white",
            }}
          >
            <img
              className="d-inline"
              src={`${process.env.PUBLIC_URL}/images/Icon awesome-search.png`}
              alt=""
              height={29.02}
              width={29.02}
            />
            <p
              className="d-inline"
              style={{ fontSize: "25px", paddingLeft: "10px" ,paddingTop:"5px"}}
            >
              Search
            </p>
          </button>
        </form>
        <a href="#" className="d-flex nav-link"  style={{paddingLeft:"80px"}} ><img src={`${process.env.PUBLIC_URL}/images/Icon awesome-user-alt.png`} alt="" height={48} width={48}/></a>
        <a href="#" className="d-flex nav-link"  style={{paddingLeft:"50px"}} ><img src={`${process.env.PUBLIC_URL}/images/Icon awesome-sms.png`} alt="" height={48} width={48}/></a>
        <a href="#" className="d-flex nav-link"  style={{paddingLeft:"50px"}} ><img src={`${process.env.PUBLIC_URL}/images/Icon awesome-comment-dollar.png`} alt="" height={48} width={48}/></a>
        <a href="#" className="d-flex nav-link"  style={{paddingLeft:"41px"}} ><img src={`${process.env.PUBLIC_URL}/images/Icon feather-shopping-cart.png`} alt="" height={48} width={48}/></a>
      </nav>
      {/* <div className="bg-danger mx-auto flex flex-wrap flex-col">
            <Image 
            className="d-flex"
            style={{ backgroundColor: "red" }}
            width={251.64}
            height={53}
            src="/afroshop logo.png"
            alt="" />
                              
            <form class="d-flex"       style={{height:'57px',width:'919px',borderRadius:'50px',border:'1px solid black'}} >
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
            </div> */}
    </div>
  );
}
