import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

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
    <div className="App">
      <header className="App-header">
        <p>Home</p>
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
};

export default Home;
