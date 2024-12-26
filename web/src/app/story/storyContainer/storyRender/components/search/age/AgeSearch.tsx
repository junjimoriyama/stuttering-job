"use client";

import { useStoryContext } from "@/app/story/StoreContext";
import { useRef, useState, useEffect } from "react";

export const AgeSearch = () => {
  // useContext管理の状態
  const { age, setAge, isAllClose } = useStoryContext();
   // アコーディン開閉
  const [isOpen, setIsOpen] = useState(false);
  // 選択されている場所
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(0);

  const searchItemAgeListRef = useRef<HTMLDivElement>(null);

  const handleSearchItemClick = () => {
    // モーダル開閉
    setIsOpen(!isOpen);
    // リストの高さ取得
    setMaxHeight(searchItemAgeListRef.current?.scrollHeight);
  };

  const handleAgeClick = (value: number) => {
     // 絞り込み
    setAge(value);
     // 選択した場所に色つける
    setActiveIndex(value);
  };

  // 全てクリアボタン押されたらアコーディオン閉じ、選択をクリアに戻す
  useEffect(() => {
    if (isAllClose) {
      setIsOpen(false)
      setActiveIndex(0)
    }
  }, [isAllClose]);

  return (
    <li className="search_item">
      <div className="search_item_label" onClick={handleSearchItemClick}>
        年代
        <div className={`search_plus_btn ${isOpen ? "isOpen" : ""}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className="search_item_age_list search_item_list"
        ref={searchItemAgeListRef}
        style={{ maxHeight: isOpen ? `${maxHeight}px` : "0px" }}
      >
        {[...Array(9)].map((_, i) => {
          const value = (i + 1) * 10;
          return (
            <span
              className={`search_item_option ${
                activeIndex === value ? "isActive" : ""
              }`}
              key={value}
              onClick={() => handleAgeClick(value)}
            >
              {value}代
            </span>
          );
        })}
        <span
          className={`search_item_option ${
            activeIndex === 0 ? "isActive" : ""
          }`}
          onClick={() => {
            setAge(0);
            setActiveIndex(0);
          }}
        >
          クリア
        </span>
      </div>
    </li>
  );
};

// 'use client'

// export const AgeSearch = (
//   {
//     age,
//     setAge
//   } : {
//     age: number,
//     setAge: (value: number) => void
//   }
// ) => {
//   return (
//     <li
//     className="search_item"
//     >
//       <label htmlFor="age">年代</label>
//       <select
//       id="age"
//       className="search_item_select"
//       onChange={(e) => setAge(Number(e.target.value))}
//       defaultValue={''}
//       >
//         <option value="">
//           選択しない
//         </option>
//         {[...Array(9)].map((_, i) => {
//           const value = (i + 1) * 10;
//           return (
//             <option key={value} value={value}>
//               {value}代
//             </option>
//           );
//         })}
//       </select>
//     </li>
//   );
// };
