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
      <div className="main_text">
        <h2><span className="underlined">Get Featured</span></h2>
        <p>
          We are not currently accepting submissions for online articles for Spring 2022.
        </p>


        <p><span className="underlined">General Guidelines:</span></p>
        <ul>
        <li>The AUER will only accept academic manuscripts, including research style papers, commentaries, critiques, and literature reviews. The AUER will not accept non-academic submissions including but not limited to book and film reviews, speculative opinion pieces, and non academic essays.</li>
        <li>The AUER accepts interdisciplinary submissions in Economics as well, such as finance, political economy, economic policy, and business.</li>
        <li>The AUER conducts a single blind peer review process, in which the authors’ names are revealed to the peer reviewer, but the reviewer’s name is not revealed to the author.</li>
        <li>Any student enrolled in an undergraduate or graduate program of an accredited university is eligible to submit their paper for consideration.</li>
        <li>uthor(s) must submit their manuscript in .pdf format and in any one of the .doc, .docx, or .tex formats.</li>
        <li>Submissions must not exceed 25 pages in length. This limit excludes a title page, references, and appendices (if any).</li>
        <li>There is no limit on the number of maximum authors for a submission.</li>
        <li>Submissions must follow the Chicago Manual of Style citation method.</li>
        <li>If a submission includes data work and code, this must be reviewed by a Professor for plagiarism and originality. Post this, the author(s) must submit a written declaration from the said Professor certifying that their code and data is original and has been reviewed, along with their code and data.</li>
        <li>If a submission has been a part of coursework undertaken by the author(s), they must submit a written declaration from the Professor with whom the aforementioned course was taken, explicitly mentioning the grade received on the paper.</li>
        <li>Submissions must be emailed to auer@ashoka.edu.in. The subject line of the email must read “Submission to the AUER”. Submissions must include the manuscript, the conflict of interest declarations from each author, and declarations from professors (if any). If the paper incorporates data work and code, this must be submitted as well.</li>
        </ul>


        <p><span className="underlined">Format & Style Guidelines:</span></p>
        <ul>
        <li>Authors are required to include an abstract at the start of their paper. An abstract must not exceed 200 words.
        </li>
        <li>Numbers from 1 to 10 must be written in English words unless in a table, and other numbers can be expressed numerically.
        </li>
        <li>Formats and styles for figures, tables and charts are defined by the Chicago Manual of Style. While figures, tables, and charts can be included in appendices, the AUER strongly recommends authors to include them in 25 page manuscripts.</li>
        <li>Footnotes and references are defined by the Chicago Manual of Style.
        </li>
        <li>The spacing between paragraphs must be 1.5.
        </li>
        <li>Each new paragraph must begin with an indent.
        </li>
        <li>Equations must be center aligned and present on a separate line. They must be numbered in chronological order.</li>
        </ul>


        <p><span className="underlined">Plagiarism Policy:</span></p>
        <p>The AUER has a strict no tolerance policy on plagiarism, and follows Ashoka University’s policy on plagiarism. Plagiarism is the unethical act of copying someone else’s prior ideas, processes, results or words without explicit acknowledgement of the original author and source. Plagiarism is said to have occurred when large portions of a manuscript have been copied from existing previously published resources. Authors are advised to explore plagiarism.org if they are unsure of what constitutes plagiarism.
        </p>
        <p>AUER respects Ashoka University’s IPR Policy and aims at protecting and promoting original work of its authors. Manuscripts containing plagiarised material are against the standards of quality, research and innovation. Therefore, all authors submitting articles to the AUER are required to abide by ethical standards and abstain from plagiarism in any form.
        </p>
        <p>
          All manuscripts submitted for publication to the AUER are cross-checked for plagiarism using Turnitin. If a manuscript is found to be plagiarised by over 15%, it will be immediately rejected and not considered for publication. In case the manuscript is plagiarised by less than 15%, the authors are required to submit a written explanation to the cause of such plagiarism within two weeks of notice from the AUER, as well as institute requisite changes if they wish to continue with the review and publication process.
        </p>
        <p>The following types of plagiarism are considered by the AUER:
        </p>
        <ul>
          <li>Full Plagiarism: Previously published content without any changes to the text, idea and grammar is considered as full plagiarism. It involves presenting exact text from a source as one’s own.</li>
          <li>Partial Plagiarism: If content is a mixture from multiple different sources, where the author has extensively rephrased text, then it is known as partial plagiarism.</li>
        </ul>
        <p>
          In case a manuscript is found to be plagiarised after publication, the editorial board will scrutinise the same on a case by case basis. If the editorial board determines that the manuscript was plagiarised, the journal reserves the right to take action, including but not limited to formal retraction of the paper from the AUER.
        </p>


        <p><span className="underlined">Duplication & Republication Policy:</span></p>
        <p>
        The AUER has no policy against duplicate publication. However, if you have already submitted or published your work on another platform, you must seek written approval for republication from the original publisher of your work.
        </p>


        <p><span className="underlined">Conflict of Interest Declaration:</span></p>
        <p>
        The AUER requires authors to submit a conflict of interest declaration, declaring any conflicts of interest they may have with respect to funding, publishing constraints, andcompeting interests (financial or otherwise). Each author of a paper must fill this declaration and submit it to the AUER at the time they submit their manuscript. Manuscripts will not be under consideration unless such declarations are submitted. Please find the detailed conflict of interest declaration <a href="./assets/" className="link">here</a>.
        </p>
        {/*<p>Alternatively, you can submit your document below. </p>*/}
      </div>
    </div>
  );
};

export default Submit;
