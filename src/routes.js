import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Articles from "./components/articles";
import Submit from "./components/submit";
import About from "./components/about";

import Layout from "./higherordercomponents/layout";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
