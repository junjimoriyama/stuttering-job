"use client";

// react
import { useEffect, useCallback, useMemo, useState } from "react";
import { useStoryContext } from "@/app/story/StoreContext";
import { useRouter } from "next/navigation";
// type
import { allDataArrayType, allDataType } from "@/types/story";
// components
import { Pagination } from "../components/pagination/Pagination";
// import { StoryPreview } from "./storyPreview/StoryPreview";
// style
import "./storyItems.scss";
import { BagIcon } from "@/assets/svg/icon/bag";

export const StoryItems = ({ fetchData }: { fetchData: allDataArrayType }) => {
  // router
  const router = useRouter();
  // useContext
  const {
    age,
    gender,
    industry,
    currentPage,
    setCurrentPage,
    displayData,
    setDisplayData,
    isPageChangeEffect,
    setIsPageChangeEffect,
  } = useStoryContext();

  // 表示件数
  const displayNumber = 4;
  // 表示するページ
  const startPage = (currentPage - 1) * displayNumber;
  const endPage = currentPage * displayNumber;

  const totalPage = useMemo(
    () => Math.ceil(displayData.length / displayNumber),
    [displayData]
  );

  // 絞り込み関数
  const filterStoryData = useCallback(() => {
    return age.length === 0 && gender.length === 0 && industry.length === 0
      ? fetchData
      : fetchData.filter(
          (item) =>
            (age.length === 0 || age.includes(item.age)) &&
            (gender.length === 0 || gender.includes(item.gender)) &&
            (industry.length === 0 || industry.includes(item.industry))
        );
  }, [age, gender, industry]);

  // 絞り込み関数の結果
  useEffect(() => {
    const filteredData = filterStoryData();
    setDisplayData(filteredData);
  }, [filterStoryData, setDisplayData]);

  useEffect(() => {
    // 現在のページが合計ページ数より小さければ
    if (currentPage > totalPage) {
      // １ページに戻る
      setCurrentPage(1);
    }
  }, [displayData]);

  // 各体験談にページ遷移
  const handleLinkStoryItem = (id: number) => {
    router.push(`/story/storyItem/${id}`);
  };

  return (
    <div className="storyItems">
      <div className="story_controls">
        <Pagination
          totalPage={totalPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      {displayData.length > 0 ? (
        <ul
          className={`story_preview_list ${
            isPageChangeEffect ? "isChange" : ""
          }`}
          // onAnimationEnd={() => setIsPageChangeEffect(false)}
        >
          {displayData.slice(startPage, endPage).map((item: allDataType) => (
            <li key={item.id} className="story_preview_item">
              <div
                className="story_preview_contents"
                onClick={() => handleLinkStoryItem(item.id)}
              >
                <ul className="story_preview_info_list">
                  <li className="story_preview_info_icon">
                    <BagIcon />
                  </li>
                  <li className="story_preview_info_number">
                    <span className="story_preview_item_label_number">No</span>
                    <span className="story_preview_item_value_number">
                      {item.id}
                    </span>
                  </li>
                  <li className="story_preview_info">
                    <span className="story_preview_item_label">年代</span>
                    <span className="story_preview_item_value">
                      {item.age}代
                    </span>
                  </li>
                  <li className="story_preview_info">
                    <span className="story_preview_item_label">性別</span>
                    <span className="story_preview_item_value">
                      {item.gender}
                    </span>
                  </li>
                  <li className="story_preview_info">
                    <span className="story_preview_item_label">業種</span>
                    <span className="story_preview_item_value">
                      {item.industry}
                    </span>
                  </li>
                </ul>
                <div className="arrow"></div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="notItem">条件に合う体験談はありません</p>
      )}
    </div>
  );
};
