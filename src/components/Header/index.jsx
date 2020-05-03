import React from "react";

import "./header.scss";
import Terminal from "../../assets/icons/terminal.svg";

const Header = () => (
  <div className="header">
    <h1 className="name">Christopher Ball</h1>
    <span className="subheader">
      <img src={Terminal} alt="terminal icon" />
      <h2>Software Engineer</h2>
    </span>
  </div>
);

export default Header;
