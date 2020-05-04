import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation>{children}</Navigation>
    </>
  );
};

export default Layout;
