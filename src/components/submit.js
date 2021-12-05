import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Banner from "./banner";
import { getSemester } from "../utils";

import "../index.css";

const Submit = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(async () => {
    await fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div>
      <Banner heading={"Submission Guidlines"} subheading={getSemester()} />
      <div class="main_text">
        <h2><span>Get Featured</span></h2>
        <p>
          We are currently accepting submissions for online articles for Monsoon
          2020. Following are important guidelines that authors must adhere to:
        </p>
        <p>
          Themes: Macroeconomic Policy, Inequality & Growth, Political Science,
          Financial Markets, Health and Education, Business, Statistics,
          Environmental Economics, Technology & Innovation, Economic History,
          Microeconomics and related fields.
        </p>
        <p>
          Article Type: Op-eds, Research-Based, Policy Review, Literature Review
          or Book Review.
        </p>
        <p>Length: 850-1500 words</p>
        <p>
          Format: Microsoft word document or Latex file. We would prefer
          submissions double-spaced, 12-point and Times New Roman font. Please
          name your file “FirstName_LastName_PaperTitle.”
        </p>
        <p>
          Plagiarism: We maintain a strict zero tolerance policy on plagiarism.
          No article found plagiarised will be accepted.
        </p>
        <p>
          Citations: Use Chicago format for in-text citations and your works
          cited page. Include a separate works cited page at the end of your
          work.
        </p>
        <p>Maximum number of authors: 2</p>
        <p>
          Duplication Policy: We have no policy against duplicate publication;
          however, if you have already submitted or published your work on
          another platform, you should check with that organization about their
          policy regarding duplicate publication.
        </p>
        <p>
          In order to submit your piece, kindly submit your document at
          auer@ashoka.edu.in with the subject line 'Article Submission: Title
          Name.'
        </p>
        <p>Alternatively, you can submit your document below. </p>
      </div>
    </div>
  );
};

export default Submit;
