import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <h1 className="hero_text">Ashoka University Economic Review</h1>
        <span className="subtitle">
          Ashoka University's Premier Student Run Economics Newspaper
        </span>
        <ul className="menu">
            <li>Home</li>
            <li>Articles</li>
            <li>Submit</li>
            <li>About</li>
        </ul>
        <div className="line"></div>
      </header>
    </div>
  );
};

export default Header;
