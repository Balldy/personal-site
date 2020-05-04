import React from "react";
import MyPicture from "../../assets/pictures/me.jpg";

import "./picture.scss";

const Picture = () => (
  <div className="picture-wrapper">
    <img src={MyPicture} alt="me" />
  </div>
);

export default Picture;
