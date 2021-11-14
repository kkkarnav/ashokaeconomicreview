import React from "react";
import { FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import { getYear } from "../utils";

const Footer = () => {
  return (
    <div>
      <footer>
        {/* links to social presences */}
        <div className="social">
          <a href="mailto:auer@ashoka.edu.in"><FaEnvelope/></a>
          <a href="https://instagram.com"><FaInstagram/></a>
          <a href="https://instagram.com"><FaFacebook/></a>
          <a href="https://instagram.com"><FaTwitter/></a>
          <a href="https://instagram.com"><FaLinkedin/></a>
        </div>

        {/* copyright and site info */}
        <p className="copyright">
          Copyright © {getYear()}{" "}
          <span className="highlight">Ashoka University Economic Review</span>.
          All Rights Reserved.
          <br />
          {"site made with <3 by "}
          <a className="highlight" href="https://github.com/kkkarnav">
            kkkarnav
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
