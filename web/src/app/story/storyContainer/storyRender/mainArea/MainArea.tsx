'use client'

import React from "react";
import "./mainArea.scss";
// import StoryItems from "./storyItems/StoryItems"; 
import {StoryItems} from "./storyItems/StoryItems";

export const MainArea =  ({ data }: { data: any}) => {
  return (
    <div className="main_area">
      <StoryItems data={data}/>
    </div>
  );
};

