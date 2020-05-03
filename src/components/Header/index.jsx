import React from "react";

import "./header.scss";
import Terminal from "../../assets/icons/terminal.svg";

const Header = () => (
  <div className="header">
    <h1 className="name">Christopher Ball</h1>
    <h2>
      <img src={Terminal} alt="terminal icon" />
      Software Engineer
    </h2>
  </div>
);

export default Header;
