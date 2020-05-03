import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <Container maxWidth="sm">
        <h2>
          <strong>404!</strong>Page is not found
        </h2>

        <Link to="/">
          <h5 style={{ marginTop: "10px" }}>Return to Homepage </h5>
        </Link>
      </Container>
    </div>
  );
};

export default NotFound;
