import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Banner from "./banner";
import Article from "./article_box";

import "../index.css";

const Articles = () => {
  const [currentTime, setCurrentTime] = useState(0);

  let dtime = 0;
  let article_data = [
    {
      link: "https://karnav.xyz/blog",
      title: "An Economic View of German Nuclear Policy",
      authors: ["Karnav Popat", "Gayatri Sapru", "Akshat Arora"],
      subtitle: "A close look at Merkel's regressive positions",
      tags: ["nuclear", "energy"],
      date: "September 11th, 2021",
      content: "content",
      image: "./assets/img/main.jpg"
    },
    {
      link: "https://karnav.xyz/blog",
      title: "title2",
      authors: ["author"],
      subtitle: "subtitle subtitle",
      tags: ["tag1"],
      date: "November 11th, 2021",
      content: "content2",
    },
    {
      link: "https://karnav.xyz/blog",
      title: "title3",
      authors: ["author3"],
      subtitle: "subtitle subtitle",
      tags: ["tag3"],
      date: "December 11th, 2021",
      content: "content3",
    },
    {
      link: "https://karnav.xyz/blog",
      title: "title",
      authors: ["author1", "author2", "author3"],
      subtitle: "subtitle something something",
      tags: ["tag1", "tag2"],
      date: "September 11th, 2021",
      content: "content",
    },
    {
      link: "https://karnav.xyz/blog",
      title: "title2",
      authors: ["author"],
      subtitle: "subtitle subtitle",
      tags: ["tag1"],
      date: "November 11th, 2021",
      content: "content2",
    },
    {
      link: "https://karnav.xyz/blog",
      title: "title3",
      authors: ["author3"],
      subtitle: "subtitle subtitle",
      tags: ["tag3"],
      date: "December 11th, 2021",
      content: "content3",
    },
  ];
  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  let article_list = [];
  for (let article of article_data) {
    article_list.push(<Article article={article} />);
  }

  return (
    <div className="main_text">
      <h2><span className="underlined">AUER Articles</span></h2>
      <div className="article_grid">{article_list}</div>
    </div>
  );
};

export default Articles;
