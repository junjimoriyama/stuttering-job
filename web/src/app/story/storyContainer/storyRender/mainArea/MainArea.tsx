"use client";

import React from "react";
import "./mainArea.scss";
// import StoryItems from "./storyItems/StoryItems";
import { StoryItems } from "./storyItems/StoryItems";
import { Search } from "../components/search/Search";
import { useStoryContext } from "@/app/story/StoreContext";
import { SearchModal } from "../components/search/searchModal/searchModal";
import { FilterIcon } from "@/public/svg/icon/filter";

export const MainArea = ({ data }: { data: any }) => {

  const {isSearchModalOpen, setIsSearchModalOpen} = useStoryContext()
  return (
    <div className="main_area">
      {/* <Search /> */}
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
