"use client";

import { useState } from "react";
import "./jobHuntDifficulty.scss";

const JobHuntDifficulty = ({
  isJobHuntDifficultyInvalid,
  setIsJobHuntDifficultyInvalid,
}: {
  isJobHuntDifficultyInvalid: boolean;
  setIsJobHuntDifficultyInvalid: (value: boolean) => void;
}) => {
  const [clickIndex, setClickedIndex] = useState<number | null>(null);
  const [onFocus, setOnFocus] = useState(false);

  const handleClick = () => {
    setIsJobHuntDifficultyInvalid(false);
    setOnFocus(true)
  };

  const handleFocus = () => {
    if(isJobHuntDifficultyInvalid) {
      setOnFocus(false)
    } else {
      setOnFocus(true)
    }
  };

  return (
    <li className="job-hunt-difficulty">
      <label>
        吃音による就職活動の苦労度
        <span className="must">必須</span>
      </label>
      <div
        tabIndex={0}
        onFocus={() => handleFocus()}
        onBlur={() => setOnFocus(false)}
        className={`
          job-hunt-difficulty-level 
          ${onFocus && !isJobHuntDifficultyInvalid ? "isActive" : ""}
          ${isJobHuntDifficultyInvalid ? "isInvalid" : ""}
        `}
        >
        <span className="job-hunt-difficulty-level-text">小</span>
        {[...Array(5)].map((_, i) => {
          const value = `${i + 1}`;
          return (
            <span
            key={value}
            className={`job-hunt-difficulty-item ${
              clickIndex === i + 1 ? "isClicked" : ""
            }`}
            onClick={() => {
              setClickedIndex(i + 1)
              handleClick()
              }}
            >
              {value}
            </span>
          );
        })}
        <span className="job-hunt-difficulty-level-text">大</span>
      </div>

      <input
        id="job-hunt-difficulty"
        type="hidden"
        name="job_hunt_difficulty"
        value={clickIndex !== null ? clickIndex : ""}
      />
    </li>
  );
};

export default JobHuntDifficulty;

