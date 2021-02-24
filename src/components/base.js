import React from "react";
import HeaderButtons from "./header-buttons";
import NavMenu from "./navmenu";
import TopNavigation from "./top-navigation";
import TopSection from "./topsection";

const Base = ({ title, className, children }) => (
    <>
    <HeaderButtons />
    <TopNavigation />
    <NavMenu />
    <TopSection />
  <div className={className}>{children}</div>
  </>
);

export default Base;
