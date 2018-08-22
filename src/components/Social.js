import React from "react";
import PropTypes from "prop-types";

const Social = ({ className, iconSize }) => (
  <div className={className}>
    <a href="https://github.com/Balldy " target="blank">
      <i className={`fa fa-github fa-${iconSize}x`} aria-hidden />
    </a>
    <a
      href="https://es.linkedin.com/in/christopher-ball-548680a7 "
      target="blank "
    >
      <i className={`fa fa-linkedin-square fa-${iconSize}x`} aria-hidden />
    </a>
    <a href="https://twitter.com/chrisballdy " target="blank">
      <i className={`fa fa-twitter fa-${iconSize}x`} aria-hidden />
    </a>
  </div>
);

Social.propTypes = {
  className: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired
};

export default Social;
