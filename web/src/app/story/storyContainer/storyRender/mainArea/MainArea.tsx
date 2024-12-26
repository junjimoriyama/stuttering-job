"use client";

import React from "react";
import "./mainArea.scss";
// import StoryItems from "./storyItems/StoryItems";
import { StoryItems } from "./storyItems/StoryItems";
import { Search } from "../components/search/Search";
import { useStoryContext } from "@/app/story/StoreContext";
import { ModalSearch } from "./components/ModalSearch/searchModal";

export const MainArea = ({ data }: { data: any }) => {

  const {isSearchModalOpen, setIsSearchModalOpen} = useStoryContext()
  return (
    <div className="main_area">
      {/* <Search /> */}
      <div className="main_heading">体験談一覧</div>
      <StoryItems data={data} />

      <ModalSearch />
      <div 
      className="modalSearchBtn"
      onClick={() => setIsSearchModalOpen(!isSearchModalOpen)}
      >絞り込み</div>
    </div>
  );
};
