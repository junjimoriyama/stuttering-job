"use client";

// react
import { useState, useEffect, useRef } from "react";
import { useStoryContext } from "@/app/story/StoreContext";
// svg
import { CheckMark } from "@/assets/svg/icon/mark";

export const GenderSearch = () => {
  // useContext管理の状態
  const {
    age,
    gender,
    setGender,
    industry,
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

  const searchItemGenderListRef = useRef<HTMLDivElement>(null);

  // 配列のリスト
  const genderSearchList = [
    "男性",
    "女性",
    "どちらでもない",
    // "無回答"
  ];

  // アコーディオン開閉ボタンクリック
  const handleSearchItemClick = () => {
    // モーダル開閉
    setIsOpen(!isOpen);
    // リストの高さ取得
    setMaxHeight(searchItemGenderListRef.current?.scrollHeight);
  };

  // 更新されたデータのみsessionStorageに保存する関数
  const updateSessionStorage = (data: string[]) => {
    const updatedGenderData = {
      age,
      gender: data,
      industry,
    };
    // sessionに保存
    sessionStorage.setItem(
      "stutter_job_searchFilters",
      JSON.stringify(updatedGenderData)
    );
  };

  // 選択した場所クリック
  const handleGenderClick = (value: string) => {
    // 変更があったデータ
    let updateGender = gender.includes(value)
      ? gender.filter((item) => item !== value)
      : [...gender, value];
    // sessionにセット
    updateSessionStorage(updateGender);
    // 状態にセット
    setGender(updateGender);
  };

  // 選択しないボタンをクリック
  const handleStorageClear = () => {
    const updatedData = {
      age,
      gender: [],
      industry,
    };
    sessionStorage.setItem(
      "stutter_job_searchFilters",
      JSON.stringify(updatedData)
    );
    setGender([]);
  };

  // 全てクリアボタン押されたらアコーディオン閉じ、選択をクリアに戻す
  useEffect(() => {
    setMaxHeight(searchItemGenderListRef.current?.scrollHeight);
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
    setIsClicked(false)
    }

  return (
    <li className="search_item">
      <div className="search_item_label" onClick={handleSearchItemClick}>
        性別
        {/* {currentLabel && (
          <span className="search_item_current_label">{currentLabel}</span>
        )} */}
        <div className={`search_plus_btn ${isOpen ? "isOpen" : ""}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className="search_item_list"
        ref={searchItemGenderListRef}
        style={{ maxHeight: isOpen ? `${maxHeight}px` : "0px" }}
        onClick={handleFilterEffect}
      >
        {genderSearchList.map((item, i) => {
          const value = i + 1;
          return (
            <span
              className="search_item_option"
              key={value}
              onClick={() => {
                handleGenderClick(item);
                setCurrentLabel(item);
              }}
            >
              {Array.isArray(gender) && gender.includes(item) && <CheckMark />}
              {item}
            </span>
          );
        })}
        <button
          className={`search_item_clear_btn ${isClicked ? "isClicked" : ""}`}
          onClick={() => {
            handleStorageClear();
            // ボタン点滅
            setIsClicked(true)
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
