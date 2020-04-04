import React from "react";

import "./social.scss";

import Github from "../../assets/icons/github.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Envelope from "../../assets/icons/envelope.svg";

const Social = () => (
  <div className="social">
    <a href="https://github.com/Balldy " target="blank">
      <img src={Github} alt="github" />
    </a>
    <a href="https://www.linkedin.com/in/chris-ball-548680a7/" target="blank ">
      <img src={Linkedin} alt="linkedin" />
    </a>
    <a href="https://twitter.com/chrisballdy " target="blank">
      <img src={Twitter} alt="twitter" />
    </a>
    <a className="email" href="mailto:chrisball02@gmail.com ">
      <img src={Envelope} alt="e-mail" />
    </a>
  </div>
);

export default Social;
