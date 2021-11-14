import React from "react";

const Banner = (props) => {
  return (
    <div className="banner">
      <h2>{props.heading}</h2>
      <p>{props.subheading}</p>
    </div>
  );
};

export default Banner;
