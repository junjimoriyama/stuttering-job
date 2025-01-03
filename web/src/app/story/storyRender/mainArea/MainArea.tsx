"use client";

// react
import { useStoryContext } from "@/app/story/StoreContext";
// type
import { allDataArrayType } from "@/app/types/story";
// components
import { StoryItems } from "./storyItems/StoryItems";
// svg
import { FilterIcon } from "@/public/svg/icon/filter";
// style
import "./mainArea.scss";

export const MainArea = ({ fetchData }: { fetchData: allDataArrayType}) => {

  // sp用絞り込みモーダル開閉
  const {isSearchModalOpen, setIsSearchModalOpen} = useStoryContext()
  // sp用絞り込みモーダル開く
  const handleSearchModalOpen = () => {
    setIsSearchModalOpen(true)
    // 背景固定
    document.body.style.overflow = "hidden"
  }
  
  return (
    <div className="main_area">
      <div className="main_heading">体験談一覧</div>
      <StoryItems fetchData={fetchData} />
      <div 
      className="searchModalBtn"
      onClick={handleSearchModalOpen}
      >
        <FilterIcon/>
      </div>
    </div>
  );
};