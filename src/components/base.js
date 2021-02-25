import React from "react";
import Footer from "./footer";
import HeaderButtons from "./header-buttons";
import TopNavigation from "./top-navigation";


const Base = ({ title, className, children }) => (
    <>
    <HeaderButtons />
    <TopNavigation />
    
  <div className={className}>{children}</div>
  <Footer />
  </>
);

export default Base;
