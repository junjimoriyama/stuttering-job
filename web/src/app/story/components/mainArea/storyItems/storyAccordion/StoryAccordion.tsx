"use client";

import React, { useEffect, useRef, useState } from "react";
import "./storyAccordion.scss";

const StoryAccordion = ({ data }: { data: any }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(0);

  const accordionStoriesRef = useRef<HTMLUListElement>(null);

  const handleAccordionBtnClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
    setMaxHeight(accordionStoriesRef.current?.scrollHeight);
  };
  // console.log(isAccordionOpen)
  console.log(isAccordionOpen);

  return (
    <div className="accordion">
      <div className="accordion_header">
        <ul className="accordion_summary">
          <li className="accordion_summary_item">年代: {data.age}</li>
          <li className="accordion_summary_item">性別: {data.gender}</li>
          <li className="accordion_summary_item">業種: {data.industry}</li>
        </ul>
        <button
          className="accordion_btn"
          // className={`accordion_btn ${isAccordionOpen ? "isOpen" : ""}`}
          onClick={handleAccordionBtnClick}
        >
          {isAccordionOpen ? (
            <span className="accordion_icon accordion_icon_minus">-</span>
          ) : (
            <span className="accordion_icon accordion_icon_plus">+</span>
          )}
        </button>
      </div>
      <div className="accordion_content">
        <ul
          className="accordion_stories"
          ref={accordionStoriesRef}
          // style={{ maxHeight: isAccordionOpen ? `100px` : "0px" }}
          style={{ maxHeight: isAccordionOpen ? `${maxHeight}px` : "0px" }}
        >
          <li className="accordion_story_item">
            ニックネーム: {data.username}
          </li>
          <li className="accordion_story_item">年代: {data.age}</li>
          <li className="accordion_story_item">性別: {data.gender}</li>
          <li className="accordion_story_item">業種: {data.industry}</li>
          <li className="accordion_story_item">
            具体的な仕事内容: {data.detail}
          </li>
          <li className="accordion_story_item">
            今の仕事を選んだ理由: {data.reason}
          </li>
          <li className="accordion_story_item">働き方: {data.employment}</li>
          <li className="accordion_story_item">勤続年数: {data.years}</li>
          <li className="accordion_story_item accordion_story_number">
            吃音による仕事の苦労度:
            {
              <div className="accordion_story_level">
                <span>小</span>
                {[...Array(5)].map((_, i) => {
                  const value = i + 1
                  return (
                    <span 
                    className={`accordion_story_level_difficulty ${value === data.job_difficulty ? 'isActive' : ''}`}
                    key={value}>
                      {value}
                    </span>
                  )
                })}
                <span>大</span>
              </div>
            }
          </li>
          <li className="accordion_story_item">就職活動中の苦労や工夫: {data.job_struggles}</li>
          <li className="accordion_story_item accordion_story_number">
          吃音による就職活動の苦労度:
            {
              <div className="accordion_story_level">
                <span>小</span>
                {[...Array(5)].map((_, i) => {
                  const value = i + 1
                  return (
                    <span 
                    className={`accordion_story_level_difficulty ${value === data.job_hunt_difficulty ? 'isActive' : ''}`}
                    key={value}>
                      {value}
                    </span>
                  )
                })}
                <span>大</span>
              </div>
            }
          </li>
          <li className="accordion_story_item">就職活動中の苦労や工夫: {data.job_hunt_struggles}</li>
          <li className="accordion_story_item">障害者手帳の有無: {data.notebook}</li>
          <li className="accordion_story_item">見ている人に向けて: {data.free}</li>
        </ul>
      </div>
    </div>
  );
};

export default StoryAccordion;
