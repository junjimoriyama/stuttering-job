"use client";

// react
import { useState, useEffect, useRef } from "react";
import { useStoryContext } from "@/app/story/StoreContext";
// svg
import { CheckMark } from "@/assets/svg/icon/mark";

export const GenderSearch = () => {
  // useContext管理の状態
  const { age, gender, industry, setGender, isAllClose } = useStoryContext();
  // アコーディン開閉
  const [isOpen, setIsOpen] = useState(false);
  // アコーディオンの高さ
  const [maxHeight, setMaxHeight] = useState<number | undefined>(0);
  // 現在のラベル表示
  const [currentLabel, setCurrentLabel] = useState<string | null>(null);

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
      industry
    }
    // sessionに保存
    sessionStorage.setItem("stutter_job_searchFilters", JSON.stringify(updatedGenderData))
  }

   // 選択した場所クリック
  const handleGenderClick = (value: string) => {
    // 変更があったデータ
    let updateGender = 
    gender.includes(value) 
    ? gender.filter(item => item !== value) 
    : [...gender, value]
    // sessionにセット
    updateSessionStorage(updateGender)
    // 状態にセット
    setGender(updateGender)
  };

  // 選択しないボタンをクリック
  const handleStorageClear = () => {
    const updatedData = {
      age,
      gender: [],
      industry
    }
    sessionStorage.setItem("stutter_job_searchFilters", JSON.stringify(updatedData))
    setGender([])
  }

  // 全てクリアボタン押されたらアコーディオン閉じ、選択をクリアに戻す
  useEffect(() => {
    setMaxHeight(searchItemGenderListRef.current?.scrollHeight);
    if (isAllClose) {
      setIsOpen(true);
      setCurrentLabel(null);
    }
  }, [isAllClose]);

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
        className="search_item_list search_item_gender_list"
        ref={searchItemGenderListRef}
        style={{ maxHeight: isOpen ? `${maxHeight}px` : "0px" }}
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
        <span
          className={`search_item_option ${
            gender.length === 0 ? "isActive" : ""
          }`}
          onClick={() => {handleStorageClear();}}
        >
          {gender.length === 0 && <CheckMark />}
          選択しない
        </span>
      </div>
    </li>
  );
};
// import { useStoryContext } from "@/app/story/StoreContext";
// import React, { useEffect, useRef, useState } from "react";

// export const GenderSearch = () => {
//   // useContext管理の状態
//   const { gender, setGender, isAllClose} = useStoryContext()
//    // アコーディン開閉
//   const [isOpen, setIsOpen] = useState(false);
//    // 選択されている場所
//   const [activeIndex, setActiveIndex] = useState(0);
//   // アコーディオンの高さ
//   const [maxHeight, setMaxHeight] = useState<number | undefined>(0);
//   // 現在のラベル表示
//   const [ currentLabel, setCurrentLabel  ] = useState<string | null>(null)

//   const searchItemGenderListRef = useRef<HTMLDivElement>(null);

//   // 配列のリスト
//   const genderSearchList = [
//     "男性",
//     "女性",
//     "どちらでもない",
//     // "無回答"
//   ]
//   const handleSearchItemClick = () => {
//     // モーダル開閉
//     setIsOpen(!isOpen);
//     // リストの高さ取得
//     setMaxHeight(searchItemGenderListRef.current?.scrollHeight);
//   };

//   const handleGenderClick = (item: string, value: number) => {
//     // 絞り込み
//     setGender(item);
//     // 選択した場所に色つける
//     setActiveIndex(value);
//   };

//     // 全てクリアボタン押されたらアコーディオン閉じ、選択をクリアに戻す
//     useEffect(() => {
//       if (isAllClose) {
//         setIsOpen(false)
//         setActiveIndex(0)
//         setCurrentLabel(null)
//       }
//     }, [isAllClose]);

//   return (
//     <li
//       className="search_item"
//     >
//       <div className="search_item_label" onClick={handleSearchItemClick}>
//         性別
//         {currentLabel &&
//         <span
//         className="search_item_current_label">{currentLabel}</span>
//         }
//         <div className={`search_plus_btn ${isOpen ? "isOpen" : ""}`}>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//       <div
//         className="search_item_list search_item_gender_list"
//         ref={searchItemGenderListRef}
//         style={{ maxHeight: isOpen ? `${maxHeight}px` : "0px" }}
//       >
//         {genderSearchList.map((item, i) => {
//           const value = (i + 1)
//           return (
//           <span
//           className={`search_item_option ${
//             activeIndex === value ? "isActive" : ""
//           }`}
//           key={value}
//           onClick={() => {
//             handleGenderClick(item, value)
//             setCurrentLabel(item)
//           }}
//           >
//             {item}
//           </span>
//           )
//         })}
//         <span
//           className={`search_item_option ${
//             activeIndex === 0 ? "isActive" : ""
//           }`}
//           onClick={() => {
//             setGender("");
//             setActiveIndex(0);
//             setCurrentLabel(null)
//           }}
//         >
//           クリア
//         </span>
//       </div>
//     </li>
//   );
// };
