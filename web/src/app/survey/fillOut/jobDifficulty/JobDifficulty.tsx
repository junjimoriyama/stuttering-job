"use client";

import { useEffect, useState } from "react";
import "./jobDifficulty.scss";

const JobDifficulty = ({
  isJobDifficultyInvalid,
  setIsJobDifficultyInvalid,
}: {
  isJobDifficultyInvalid: boolean;
  setIsJobDifficultyInvalid: (value: boolean) => void;
}) => {
  const [clickIndex, setClickedIndex] = useState<number | null>(null);
  const [onFocus, setOnFocus] = useState(false);

  const handleClick = () => {
    setIsJobDifficultyInvalid(false);
    setOnFocus(true)
  };

  const handleFocus = () => {
    if(isJobDifficultyInvalid) {
      setOnFocus(false)
    } 
    else {
      setOnFocus(true)
    }
  }

  return (
    <li className="job-difficulty">
      <label>
        吃音による仕事の苦労度
        <span className="must">必須</span>
      </label>
      <div
        tabIndex={0}
        onFocus={() => handleFocus()}
        onBlur={() => setOnFocus(false)} 
        className={`
          job-difficulty-level 
          ${onFocus && !isJobDifficultyInvalid ? "isActive" : ""}
          ${isJobDifficultyInvalid ? "isInvalid" : ""}
        `}
      >
        <span className="job-difficulty-level-text">小</span>
        {[...Array(5)].map((_, i) => {
          const value = `${i + 1}`;
          return (
            <span
              // onClick={handleClick}
              key={value}
              className={`job-difficulty-level-item ${
                clickIndex === i + 1 ? "isClicked" : ""
              } `}
              onClick={() => {
                setClickedIndex(i + 1);
                handleClick()
              }}
            >
              {value}
            </span>
          );
        })}
        <span className="job-difficulty-level-text">大</span>
      </div>

      <input
        id="job-difficulty"
        type="hidden"
        name="job_difficulty"
        value={clickIndex !== null ? clickIndex : ""}
      />
    </li>
  );
};

export default JobDifficulty;

//  <select id="job-difficulty-select" name="job-difficulty-select" defaultValue="">
{
  /* <option value="" disabled>
選択してください
</option>
<option value="5">とても苦労した</option>
<option value="4">少し苦労した</option>
<option value="3">普通</option>
<option value="2">あまり苦労しなかった</option>
<option value="1">全く苦労しなかった</option>
</select> */
}
{
  /* <li value="5">とても苦労した</li>
        <li value="4">少し苦労した</li>
        <li value="3">普通</li>
        <li value="2">あまり苦労しなかった</li>
        <li value="1">全く苦労しなかった</li> */
}
