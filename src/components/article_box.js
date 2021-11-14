import React from "react";

import { getYear } from "../utils";

import "../index.css";

const Article = (props) => {
  return (
    <div className="article_box">
      <a href={props.article.link}>
        <h6>
          {props.article.tags.map((tag) => {
            return <span>{tag} </span>;
          })}
        </h6>

        <h2>{props.article.title} </h2>
        <h4>{props.article.subtitle}</h4>

        <p>
          by {props.article.authors[0]}
          {props.article.authors.slice(1).map((secondary_author) => {
            return <span> and {secondary_author}</span>;
          })}
          {" | "}
          {props.article.date}
        </p>
      </a>
    </div>
  );
};

export default Article;
