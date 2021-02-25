import React from "react";
import "../styles/topsection.css";
const NavMenu = () => {
  return (
    <>
      <div className="container-fluid border-bottom" style={{ height: "48px" }}>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link text-dark font-weight-bold btn" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark font-weight-bold" href="/">
              Ready To Ship
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark font-weight-bold" href="/">
              Trade Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark font-weight-bold" href="/">
              Personal Protective Equipments
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark font-weight-bold" href="/">
              Home School Learning
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark font-weight-bold" href="/">
              Global Products Expo
            </a>
          </li>
          <li class="nav-item">
            <a className="nav-link text-dark font-weight-bold" href="/">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a className="nav-link text-dark font-weight-bold" href="/">
              Sell on Afroshopline
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark font-weight-bold" href="/">
              Help
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid border-bottom">
        <ul className="nav justify-content-center m-2">
          <button className="p-2 btn btn-outline-dark mr-2 buttontopnav"  style={{width:"280px",height:"50px"}}>
          <img
            className="d-inline"
            width={34}
            height={24}
            src={`${process.env.PUBLIC_URL}/images/AfroSoundtop10.png`}
            alt=""
          />
          <p className="d-inline p-2">AfroSound Top 10</p>
          </button>
          <button className="p-2 btn btn-outline-dark buttontopnav" style={{width:"280px",height:"50px"}}>
          <img
            className="d-inline"
            width={34}
            height={24}
            src={`${process.env.PUBLIC_URL}/images/smashnetprime.png`}
            alt=""
          />
          <p className="d-inline p-2">Smash Net Prime Movies</p>
          </button>
          <button className="p-2 btn btn-outline-dark buttontopnav ml-2"  style={{width:"280px",height:"50px"}}>
          <img
            className="d-inline"
            width={34}
            height={24}
            src={`${process.env.PUBLIC_URL}/images/health.png`}
            alt=""
          />
          <p className="d-inline p-2">Health</p>
          </button>
          <button className=" ml-2 p-2 btn btn-outline-dark buttontopnav"  style={{width:"280px",height:"50px"}}>
          <img
            className="d-inline"
            width={34}
            height={24}
            src={`${process.env.PUBLIC_URL}/images/books.png`}
            alt=""
          />
          <p className="d-inline p-2">Books</p>
          </button>
          <button className="ml-2 p-2 btn btn-outline-dark buttontopnav" style={{width:"280px",height:"50px"}}>
          <img
            className="d-inline"
            width={34}
            height={24}
            src={`${process.env.PUBLIC_URL}/images/rocketerse-card.png`}
            alt=""
          />
          <p className="d-inline p-2">Rocketers E-cards</p>
          </button>
        </ul>
      </div>
    </>
  );
};

export default NavMenu;
