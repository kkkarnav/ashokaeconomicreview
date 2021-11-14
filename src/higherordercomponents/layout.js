import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe_banner";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Layout;
