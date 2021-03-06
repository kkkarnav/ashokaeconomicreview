import React from "react";

import Subscribe from './subscribe_button';

const Header = () => {
  return (
    <div>
      <header>
        <h1 className="hero_text">Ashoka University Economic Review</h1>
        
        <span className="subtitle">
          Ashoka University's Premier Student Run Economics Journal
        </span>
        {/*<span><Subscribe /></span>*/}

        <ul className="menu">

            <div className="single-line"></div>

            <li><a href="/">Journal</a></li>
            <li><a href="/articles">Archive</a></li>
            <li><a href="/submit">Submit</a></li>
            <li><a href="/about">About</a></li>
        </ul>

        <div className="double-line"></div>
      </header>
    </div>
  );
};

export default Header;
