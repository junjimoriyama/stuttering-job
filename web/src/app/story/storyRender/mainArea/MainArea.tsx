"use client";

// react
import { useStoryContext } from "@/app/story/StoreContext";
// type
import { allDataArrayType } from "@/types/story";
// components
import { StoryItems } from "./storyItems/StoryItems";
// svg
import { FilterIcon } from "@/assets/svg/icon/filter";
import { UpHandChara } from "@/assets/svg/character/characterSvg";
// style
import "./mainArea.scss";

export const MainArea = ({ fetchData }: { fetchData: allDataArrayType}) => {

  // sp用絞り込みモーダル開閉
  const {setIsAllClose, setIsSearchModalOpen} = useStoryContext()
  // sp用絞り込みモーダル開く
  const handleSearchModalOpen = () => {
    setIsSearchModalOpen(true)
    setIsAllClose(true)
    // 背景固定
    document.body.style.overflow = "hidden"
  }
  
  return (
    <div className="main_area">
      <div className="main_heading">
        体験談一覧
      <span><UpHandChara /></span>
      </div>
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