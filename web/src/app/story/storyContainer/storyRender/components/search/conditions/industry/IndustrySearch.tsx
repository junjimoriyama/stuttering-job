import { industryList } from "@/app/dataLists/industryList";
import { useStoryContext } from "@/app/story/StoreContext";
import { CheckMark } from "@/public/svg/icon/mark";
import React, { useEffect, useRef, useState } from "react";

export const IndustrySearch = () => {
  // useContext管理の状態
  const { industry, setIndustry, isAllClose } = useStoryContext();
  // アコーディン開閉
  const [isOpen, setIsOpen] = useState(false);
  // 選択されている場所
  // const [activeIndex, setActiveIndex] = useState(0);
  // アコーディオンの高さ
  const [maxHeight, setMaxHeight] = useState<number | undefined>(0);
  // 現在のラベル表示
  const [currentLabel, setCurrentLabel] = useState<string | null>(null);

  const searchItemIndustryListRef = useRef<HTMLDivElement>(null);

  const handleSearchItemClick = () => {
    // モーダル開閉
    setIsOpen(!isOpen);
    // リストの高さ取得
    setMaxHeight(searchItemIndustryListRef.current?.scrollHeight);
  };

  const handleIndustryClick = (item: string, value: number) => {
    // 絞り込み
    if (!industry.includes(item)) {
      setIndustry((prev) => [...prev, item]);
    } else {
      setIndustry((prev) => prev.filter((option) => option !== item));
    }
  };

  useEffect(() => {
    if (isAllClose) {
      setIsOpen(false);
      setCurrentLabel(null);
    }
  }, [isAllClose]);

  return (
    <li className="search_item">
      <div className="search_item_label" onClick={handleSearchItemClick}>
        業種
        {currentLabel && (
          <span className="search_item_current_label">{currentLabel}</span>
        )}
        <div className={`search_plus_btn ${isOpen ? "isOpen" : ""}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className="search_item_list search_item_industry_list"
        ref={searchItemIndustryListRef}
        style={{ maxHeight: isOpen ? `${maxHeight}px` : "0px" }}
      >
        {industryList.map((item, i) => {
          const value = i + 1;
          return (
            <span
              className="search_item_option"
              key={value}
              onClick={() => {
                handleIndustryClick(item.label, value);
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
        <span
          className={`search_item_option ${
            industry.length === 0 ? "isActive" : ""
          }`}
          onClick={() => {
            setIndustry([]);
            setCurrentLabel(null);
          }}
        >
          {industry.length === 0 && <CheckMark />}
          選択しない
        </span>
      </div>
    </li>
  );
};
