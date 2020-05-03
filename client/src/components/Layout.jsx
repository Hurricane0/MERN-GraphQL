import React from "react";
import { Container } from "@material-ui/core";
import Navigation from "./Navigation";

const Layout = ({ maxWidth = "md", children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <Navigation>{children}</Navigation>
      <Container maxWidth={maxWidth}>{/* <main>{children}</main> */}</Container>
    </>
  );
};

export default Layout;
