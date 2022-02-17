import React from "react";

import { getYear } from "../utils";

import "../index.css";

const Person = (props) => {
  return (
    <div className="article_box person_box" style={{textAlign: "centre"}}>

        {/*box image*/}
        <a href={props.person.link}>
          <img className="person_image" src="./assets/img/p.jpg"/>
        </a>

        {/*box title*/}
        <a href={props.person.link}>
          <h3><span className="underlined">{props.person.title}</span></h3>
        </a>
        <h4>{props.person.subtitle}</h4>

    </div>
  );
};

export default Person;
