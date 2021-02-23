import React from "react";
import HeaderButtons from "./header-buttons";
import TopNavigation from "./top-navigation";

const Base = ({ title, className, children }) => (
    <>
    <HeaderButtons />
    <TopNavigation />
  <div className={className}>{children}</div>
  </>
);

export default Base;
