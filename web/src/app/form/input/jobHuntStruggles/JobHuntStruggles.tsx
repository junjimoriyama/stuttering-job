import { ChangeEvent, useState } from "react";
import "./jobHuntStruggles.scss";

const JobHuntStruggles = () => {

  const maxLength = 1000

  const [textCount, setTextCount] = useState(maxLength);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(maxLength - e.target.value.length)
    if(e.target.value.length > maxLength ) {
      e.target.blur()
    }
  }

  return (
    <li className="job-hunt-struggles">
      <div className="job-hunt-struggles-heading">
        <label htmlFor="job-hunt-struggles">
        就職活動中の苦労や工夫
          <span className="free-text">自由記入</span>
        </label>
        <div className="textCount">
          {textCount} / {maxLength}
        </div>
      </div>
      <textarea 
      id="job-hunt-struggles" 
      name="job_hunt_struggles"
      maxLength={maxLength}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInput(e)}
      ></textarea>
      <hr />
    </li>
  );
};

export default JobHuntStruggles;
