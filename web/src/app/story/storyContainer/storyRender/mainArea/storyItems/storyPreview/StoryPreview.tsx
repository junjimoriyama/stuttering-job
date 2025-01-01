import React, { useEffect, useRef, useState } from "react";
import "./storyPreview.scss";
import { useStoryContext } from "@/app/story/StoreContext";
import { allDataType } from "@/app/types/story";
import { useRouter } from "next/navigation";

export const StoryPreview = ({
  data,
}: {
  data: allDataType;
}) => {

  const router = useRouter()

  const handleLinkItem = (id: number) => {
    router.push(`/story/storyItem/${id}`)
  }

console.log(data)


  return (
    <div className="story_preview">
      <div className="story_preview_contents" 
      onClick={() => handleLinkItem(data.id)}
      >
        <ul className="story_preview_List">
          <li className="story_preview_item_number">
            <span className="story_preview_item_name_number">No</span>
            <span className="story_preview_item_value">{data.id}</span>
          </li>
          <li className="story_preview_item">
            <span className="story_preview_item_name">年代</span>
            <span className="story_preview_item_value">{data.age}代</span>
          </li>
          <li className="story_preview_item">
          <span className="story_preview_item_name">性別</span>
          <span className="story_preview_item_value">{data.gender}</span>
          </li>
          <li className="story_preview_item">
          <span className="story_preview_item_name">業種</span>
          <span className="story_preview_item_value">{data.industry}</span>
          </li>
        </ul>
        {/* <button
          className={`story_item_btn ${
            isAccordionOpenArray[index] ? "isOpen" : ""
          }
              ? "isOpen"
              : ""
          }`}
        >
          <div
            className={`accordion_plus_btn ${
              isAccordionOpenArray[index] ? "isOpen" : ""
            }`}
          >
            <span></span>
            <span></span>
          </div>
        </button> */}
      </div>
      {/* <div
        className={`accordion_content ${
          isAccordionOpenArray[index] ? "isOpen" : ""
        }`}
        ref={accordionContentRef}
        style={{
          maxHeight: isAccordionOpenArray[index] ? `${maxHeight}px` : "0px",
        }}
      >
      </div> */}
    </div>
  );
};


