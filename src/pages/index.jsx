import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Picture from "../components/Picture";
import Social from "../components/Social";
import SEO from "../components/SEO";

import "./index.scss";

const Index = () => (
  <>
    <SEO title="Home" />
    <main className="main">
      <Picture />
      <Header />
      <Social />
      <About />
    </main>
  </>
);

export default Index;
