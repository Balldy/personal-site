import React from "react";
import Social from "./Social";
import Scroll from "./Scroll";

const Home = () => (
  <div className="container-fluid page home" id="home_page">
    <h1 className="name">Christopher Ball</h1>
    <h2>
      <span className="devicons devicons-terminal" />
      Developer
    </h2>
    <Social className="social-media-home" iconSize={2} />
    <Scroll />
  </div>
);

export default Home;
