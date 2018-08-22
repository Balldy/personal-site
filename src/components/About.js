import React from "react";
import DevIcons from "./DevIcons";

const About = () => (
  <div className="container-fluid page about " id="about_page ">
    <p className="about_blurb ">
      I&apos;m Chris, I am a software developer from Ireland, currently working
      at Thoughtworks in Barcelona. To see some code examples check out my
      <a href="http://www.github.com/balldy" target="blank">
        {" "}
        github
      </a>
      . You can also find more information on my
      <a href="https://es.linkedin.com/in/christopher-ball-548680a7">
        {" linkedIn "}
      </a>
      profile.
    </p>
    <DevIcons />
  </div>
);

export default About;
