import React from "react";

import { getYear } from "../utils";

import "../index.css";

const Article = (props) => {
  return (
    <div className="article_box">
        <a href={props.article.link}>
          <img src="./assets/img/main.jpg"/>
        </a>
        <p style={{marginBottom: "10px"}}>
          <br></br>
          {props.article.tags.map((tag) => {
            return <span className="article_tag">{tag}</span>;
          })}
        </p>
        <a href={props.article.link}>
          <h3><span className="underlined">{props.article.title}</span></h3>
        </a>
        <h4>{props.article.subtitle}</h4>

        <p className="article_byline">
          {props.article.date}
          <br></br>
          by {props.article.authors[0]}
          {props.article.authors.slice(1).map((secondary_author) => {
            return <span> and {secondary_author}</span>;
          })}
        </p>
    </div>
  );
};

export default Article;
