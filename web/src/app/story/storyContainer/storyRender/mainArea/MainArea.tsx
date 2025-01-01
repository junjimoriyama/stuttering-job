"use client";

import React from "react";
import "./mainArea.scss";
// import StoryItems from "./storyItems/StoryItems";
import { StoryItems } from "./storyItems/StoryItems";
import { useStoryContext } from "@/app/story/StoreContext";
import { SearchModal } from "../components/search/searchModal/searchModal";
import { FilterIcon } from "@/public/svg/icon/filter";
import { ToggleAllStoryBtn } from "./components/toggleAllStoryBtn/ToggleAllStoryBtn";
import { allDataType } from "@/app/types/story";

export const MainArea = ({ data }: { data: allDataType }) => {

  const {isSearchModalOpen, setIsSearchModalOpen} = useStoryContext()
  
  return (
    <div className="main_area">
      <div className="main_heading">体験談一覧</div>
      <StoryItems data={data} />
      <SearchModal/>
      <div 
      className="modalSearchBtn"
      onClick={() => setIsSearchModalOpen(!isSearchModalOpen)}
      >
        <FilterIcon/>
      </div>
    </div>
  );
};
