import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PDFView from './pdf';

import "../index.css";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(async () => {
    await fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div style={{paddingBottom: "55vh"}}>
    </div>
  );
};

export default Home;
