import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "../index.css";

const About = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div>
      <div className="main_text">
        <h2><span className="underlined">About</span></h2>
        <p>
          Ashoka University Economic Review (AUER) is a premier peer-reviewed
          Economics publication run by the student body of Ashoka University in
          India. Founded in 2020, it is a 100% non-profit publication that
          constitutes online articles, scholar-interviews and original
          student-run economic research.
        </p>
        <p>
          The review is an endeavour to encourage scholarship in the rapidly
          emerging and dynamic fields of Economics. In recognition of the
          growing development challenges of the world today, AUER envisions a
          forum for students to voice their views on current economic issues and
          ultimately to foster a community of aspiring economists.
        </p>
        <p>
          Submissions in the form of articles, notes, op-eds, comments or book
          reviews on a host of Economic issues in the field of Macroeconomic
          Policy, Inequality & Growth, Political Science, Financial Markets,
          Health and Education, Business, Statistics, Environmental Economics,
          Technology and Innovation, Economic History and Microeconomics among
          other areas of research are accepted. We also encourage publications
          with a special focus on perspectives of developing countries.
        </p>
        <p>
          The views expressed in this publication or the website are those of
          the individual authors or speakers and do not necessarily reflect the
          position or policy of AUER staff or Ashoka University’s Economics
          Department and faculty in general.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
