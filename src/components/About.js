import React from "react";
import DevIcons from "./DevIcons";

const About = () => (
  <div className="container-fluid page about">
    <div className="about_blurb ">
      <p>
        Hi, I&apos;m Chris. I am a software developer from Ireland, currently
        working at
        <a href="https://www.thoughtworks.com/" target="blank">
          {" Thoughtworks "}
        </a>
        in Barcelona. To see some code examples check out my
        <a href="https://www.github.com/balldy" target="blank">
          {" github"}
        </a>
        , you can also find more information about me on my
        <a
          href="https://www.linkedin.com/in/chris-ball-548680a7/"
          target="blank"
        >
          {" linkedIn "}
        </a>
        profile. Below are some of the languages and technologies I enjoy
        working with.
      </p>
    </div>
    <DevIcons />
  </div>
);

export default About;
