import React from "react";

import { getYear } from "../utils";

import "../index.css";

const Article = (props) => {
  return (
    <div className="article_box">
      <a href={props.article.link}>
        <img src="./assets/img/main.jpg" width="300"/>
        <p>
          {props.article.tags.map((tag) => {
            return <span className="article_tag">{tag}</span>;
          })}
        </p>

        <h3>{props.article.title} </h3>
        <h4>{props.article.subtitle}</h4>

        <p className="article_byline">
          {props.article.date}
          {" | "}
          by {props.article.authors[0]}
          {props.article.authors.slice(1).map((secondary_author) => {
            return <span> and {secondary_author}</span>;
          })}
        </p>
      </a>
    </div>
  );
};

export default Article;
