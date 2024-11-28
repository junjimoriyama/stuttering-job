"use client";

import { ChangeEvent, useState } from "react";
import "./jobDetails.scss";

const JobDetails = () => {
  const maxLength = 200;
  const [textCount, setTextCount] = useState(maxLength);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(maxLength - e.target.value.length);
    if (e.target.value.length > maxLength) {
      // 入力を制限する
      e.target.blur();
    }
  };

  return (
    <li className="job-details">
      <div className="job-details-heading">
        <label htmlFor="job-details-textarea">
          仕事内容
          <span className="free-text">自由記入</span>
        </label>
        <div className="textCount">
          {textCount} / {maxLength}
        </div>
      </div>
      <textarea
        id="job-details-textarea"
        className="job-details-textarea"
        name="job_details"
        maxLength={maxLength}
        onChange={(e) => handleInput(e)}
        rows={10}
      ></textarea>
      <hr />
    </li>
  );
};

export default JobDetails;
