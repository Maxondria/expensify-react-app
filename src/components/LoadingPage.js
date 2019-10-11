import React from "react";
import loader from "../images/loader.gif";

export default () => (
  <div className="loader">
    <img className="loader__image" src={loader} alt="Loading..." />
  </div>
);
