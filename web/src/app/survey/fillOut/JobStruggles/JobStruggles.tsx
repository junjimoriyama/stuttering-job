import { ChangeEvent, useState } from "react";
import "./jobStruggles.scss";

const JobStruggles = () => {

  const maxLength = 1000

  const [textCount, setTextCount] = useState(maxLength);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(maxLength - e.target.value.length)
    if(e.target.value.length > maxLength ) {
      e.target.blur()
    }
  }

  return (
    <li className="job-struggles">
      <div className="job-struggles-heading">
        <label htmlFor="job-struggles">
        仕事中の苦労や工夫
          <span className="free-text">自由記入</span>
        </label>
        <div className="textCount">
          {textCount} / {maxLength}
        </div>
      </div>
      <textarea 
      id="job-struggles" 
      name="job_struggles"
      maxLength={maxLength}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInput(e)}
      ></textarea>
      <hr />
    </li>
  );
};

export default JobStruggles;
