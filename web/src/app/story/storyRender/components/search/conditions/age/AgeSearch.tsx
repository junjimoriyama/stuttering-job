"use client";

// react
import { useState, useEffect, useRef } from "react";
import { useStoryContext } from "@/app/story/StoreContext";
// svg
import { CheckMark } from "@/public/svg/icon/mark";

export const AgeSearch = () => {
  const searchItemAgeListRef = useRef<HTMLDivElement>(null);
  // useContext管理の状態
  const { age, setAge, isAllClose } = useStoryContext();
  // アコーディン開閉
  const [isAccordionOpen, setIsOAccordionOpen] = useState(true);
  // アコーディオンの高さ
  const [maxHeight, setMaxHeight] = useState<number | undefined>(0);
  // 現在のラベル表示
  const [currentLabel, setCurrentLabel] = useState<number | null>(null);

  // アコーディオン開閉ボタンクリック
  const handleSearchItemClick = () => {
    // アコーディオン開閉
    setIsOAccordionOpen(!isAccordionOpen);
    // リストの高さ取得
    setMaxHeight(searchItemAgeListRef.current?.scrollHeight);
  };

  // 選択した場所クリック
  const handleAgeClick = (value: number) => {
    // 選択した場所にチェックマーク
    if (!age.includes(value)) {
      setAge((prev: number[]) => [...prev, value]);
    } else {
      setAge((prev: number[]) => prev.filter((index) => index !== value));
    }
  };

  // 全てクリアボタン押されたらアコーディオン閉じ、選択をクリアに戻す
  useEffect(() => {
    setMaxHeight(searchItemAgeListRef.current?.scrollHeight);
    if (isAllClose) {
      setIsOAccordionOpen(true);
      setCurrentLabel(null);
    }
  }, [isAllClose]);

  return (
    <li className="search_item">
      <div className="search_item_label" onClick={handleSearchItemClick}>
        年代
        <div className={`search_plus_btn ${isAccordionOpen ? "isOpen" : ""}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className="search_item_age_list search_item_list"
        ref={searchItemAgeListRef}
        style={{ maxHeight: isAccordionOpen ? `${maxHeight}px` : "0px" }}
      >
        {[...Array(9)].map((_, i) => {
          const value = (i + 1) * 10;
          return (
            <span
              className="search_item_option"
              key={value}
              onClick={() => {
                handleAgeClick(value);
                setCurrentLabel(value);
              }}
            >
              {Array.isArray(age) && age.includes(value) && <CheckMark />}
              {value}代
            </span>
          );
        })}
        <span
          className={`search_item_option ${age.length === 0 ? "isActive" : ""}`}
          onClick={() => {
            setAge([]);
            // setActiveIndexes([]);
            setCurrentLabel(null);
          }}
        >
          {age.length === 0 && <CheckMark />}
          選択しない
        </span>
      </div>
    </li>
  );
};
// "use client";

// import { useStoryContext } from "@/app/story/StoreContext";
// import { useRef, useState, useEffect } from "react";

// export const AgeSearch = () => {
//   // useContext管理の状態
//   const { age, setAge, isAllClose } = useStoryContext();
//    // アコーディン開閉
//   const [isOpen, setIsOAccordionOpen] = useState(false);
//   // 選択されている場所
//   const [activeIndex, setActiveIndex] = useState(0);
//   // アコーディオンの高さ
//   const [maxHeight, setMaxHeight] = useState<number | undefined>(0);
//   // 現在のラベル表示
//   const [ currentLabel, setCurrentLabel  ] = useState<number | null>(null)

//   const searchItemAgeListRef = useRef<HTMLDivElement>(null);

//   const handleSearchItemClick = () => {
//     // モーダル開閉
//     setIsOAccordionOpen(!isOpen);
//     // リストの高さ取得
//     setMaxHeight(searchItemAgeListRef.current?.scrollHeight);
//   };

//   const handleAgeClick = (value: number) => {
//      // 絞り込み
//     setAge(value);
//      // 選択した場所に色つける
//     setActiveIndex(value);
//   };

//   // 全てクリアボタン押されたらアコーディオン閉じ、選択をクリアに戻す
//   useEffect(() => {
//     if (isAllClose) {
//       setIsOAccordionOpen(false)
//       setActiveIndex(0)
//       setCurrentLabel(null)
//     }
//   }, [isAllClose]);

//   // 現在のラベル表示

//   return (
//     <li className="search_item">
//       <div className="search_item_label" onClick={handleSearchItemClick}>
//         年代
//         {currentLabel &&
//         <span
//         className="search_item_current_label">{currentLabel}代</span>
//         }
//         <div className={`search_plus_btn ${isOpen ? "isOpen" : ""}`}>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//       <div
//         className="search_item_age_list search_item_list"
//         ref={searchItemAgeListRef}
//         style={{ maxHeight: isOpen ? `${maxHeight}px` : "0px" }}
//       >
//         {[...Array(9)].map((_, i) => {
//           const value = (i + 1) * 10;
//           return (
//             <span
//               className={`search_item_option ${
//                 activeIndex === value ? "isActive" : ""
//               }`}
//               key={value}
//               onClick={() =>{
//                 handleAgeClick(value)
//                 setCurrentLabel(value)
//               }}
//             >
//               {value}代
//             </span>
//           );
//         })}
//         <span
//           className={`search_item_option ${
//             activeIndex === 0 ? "isActive" : ""
//           }`}
//           onClick={() => {
//             setAge(0);
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
