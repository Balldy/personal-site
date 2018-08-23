import React from "react";
import Social from "./Social";

const Contact = () => (
  <div className="container-fluid page contact">
    <div className="contact-blurb ">
      <p>
        You can find me on social media:
        <Social className="social-media-contact" iconSize={3} />
        or contact me by
        <a className="email" href="mailto:chrisball02@gmail.com ">
          {" e-mail "}
        </a>
      </p>
    </div>
  </div>
);

export default Contact;
