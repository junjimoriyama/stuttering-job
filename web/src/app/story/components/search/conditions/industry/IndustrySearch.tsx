"use client";
// react
import { useState, useEffect, useRef } from "react";
import { useStoryContext } from "@/app/story/StoreContext";
// dataList
import { industryList } from "@/dataLists/industryList";
// svg
import { CheckMark } from "@/assets/svg/icon/mark";

export const IndustrySearch = () => {
  // useContext管理の状態
  const {
    age,
    gender,
    industry,
    setIndustry,
    isAllClose,
    setIsPageFilterEffect,
  } = useStoryContext();
  // アコーディン開閉
  const [isOpen, setIsOpen] = useState(false);
  // アコーディオンの高さ
  const [maxHeight, setMaxHeight] = useState<number | undefined>(0);
  // 現在のラベル表示
  const [currentLabel, setCurrentLabel] = useState<string | null>(null);
  // クリックしたボタン効果の状態
  const [isClicked, setIsClicked] = useState(false);

  const searchItemIndustryListRef = useRef<HTMLDivElement>(null);

  // アコーディオン開閉ボタンクリック
  const handleSearchItemClick = () => {
    // モーダル開閉
    setIsOpen(!isOpen);
    // リストの高さ取得
    setMaxHeight(searchItemIndustryListRef.current?.scrollHeight);
  };

  // 更新されたデータのみsessionStorageに保存する関数
  const updateSessionStorage = (data: string[]) => {
    const updatedIndustryData = {
      age,
      gender,
      industry: data,
    };
    // sessionに保存
    sessionStorage.setItem(
      "stutter_job_searchFilters",
      JSON.stringify(updatedIndustryData)
    );
  };

  // 選択した場所クリック
  const handleIndustryClick = (value: string) => {
    // 変更があったデータ
    const updatedData = industry.includes(value)
      ? industry.filter((item) => item !== value)
      : [...industry, value];
    // sessionにセット
    updateSessionStorage(updatedData);
    // 状態にセット
    setIndustry(updatedData);
  };

  // 選択しないボタンをクリック
  const handleStorageClear = () => {
    const updatedData = {
      age,
      gender,
      industry: [],
    };
    sessionStorage.setItem(
      "stutter_job_searchFilters",
      JSON.stringify(updatedData)
    );
    setIndustry([]);
  };

  // 全てクリアボタン押されたらアコーディオン閉じ、選択をクリアに戻す
  useEffect(() => {
    setMaxHeight(searchItemIndustryListRef.current?.scrollHeight);
    if (isAllClose) {
      setIsOpen(true);
      setCurrentLabel(null);
    }
  }, [isAllClose]);

  const handleFilterEffect = () => {
    // 絞り込みに伴い体験談が点滅
    setIsPageFilterEffect(true);
  };

  // アニメーション終了したらボタン効果の状態false
  const handleBtnAnimationEnd = () => {
    setIsClicked(false);
  };

  return (
    <li className="search_item">
      <div className="search_item_label" onClick={handleSearchItemClick}>
        業種
        {/* {currentLabel && (
          <span className="search_item_current_label">{currentLabel}</span>
        )} */}
        <div className={`search_plus_btn ${isOpen ? "isOpen" : ""}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className="search_item_list search_item_industry_list"
        ref={searchItemIndustryListRef}
        style={{ maxHeight: isOpen ? `${maxHeight}px` : "0px" }}
        onClick={handleFilterEffect}
      >
        {industryList.map((item, i) => {
          const value = i + 1;
          return (
            <span
              className="search_item_option"
              key={value}
              onClick={() => {
                handleIndustryClick(item.label);
                setCurrentLabel(item.label);
              }}
            >
              {Array.isArray(industry) && industry.includes(item.label) && (
                <CheckMark />
              )}
              {item.label}
            </span>
          );
        })}
        <button
          className={`search_item_clear_btn ${isClicked ? "isClicked" : ""}`}
          onClick={() => {
            handleStorageClear();
            // ボタン点滅
            setIsClicked(true);
          }}
          // ボタン点滅オフ
          onAnimationEnd={handleBtnAnimationEnd}
        >
          クリア
        </button>
      </div>
    </li>
  );
};
