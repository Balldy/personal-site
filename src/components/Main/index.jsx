import React from "react";
import Header from "../Header";
import Social from "../Social";
import Picture from "../Picture";

import "./main.scss";

const Main = () => (
  <div className="main">
    <Picture />
    <Header />
    <Social />
  </div>
);

export default Main;
