import React from "react";
import About from "../About";
import Header from "../Header";
import Picture from "../Picture";
import Social from "../Social";

import "./main.scss";

const Main = () => (
  <main className="main">
    <Picture />
    <Header />
    <Social />
    <About />
  </main>
);

export default Main;
