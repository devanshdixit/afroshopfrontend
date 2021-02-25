import React from 'react';
import Base from '../components/base';
import NavMenu from '../components/navmenu';
import NavMenu1 from '../components/navmenu1';
import TopSection from '../components/topsection';

const Main = () => {
    return(
        <Base>
        <NavMenu />
    <TopSection />
    <NavMenu1 />
    <div className="conatiner-fluid d-flex justify-content-center" >
        <img src={`${process.env.PUBLIC_URL}/images/Group 51.png`}  alt=""/>
    </div>
        </Base>
    );
};
  
  export default Main;
  