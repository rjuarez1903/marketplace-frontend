import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      <div className="main">
        <div className="gradient"></div>
        <main className="app">{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
