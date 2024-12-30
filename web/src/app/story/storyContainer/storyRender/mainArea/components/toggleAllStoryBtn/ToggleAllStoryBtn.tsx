// react
import { useStoryContext } from "@/app/story/StoreContext";
// style
import "./toggleAllStoryBtn.scss";
import { useEffect } from "react";

export const ToggleAllStoryBtn = () => {
  const {
    isAllAccordionOpen,
    setIsAllAccordionOpen,
    isAccordionOpenArray,
    // setIsAccordionOpenArray,
  } = useStoryContext();

  useEffect(() => {
    // 空の配列ではないか確認(無限レンダリング防ぐ)
    if (isAccordionOpenArray.length > 0) {
      if (isAccordionOpenArray.every((item) => item === false)) {
        setIsAllAccordionOpen(false);
      } else if (isAccordionOpenArray.every((item) => item === true)) {
        setIsAllAccordionOpen(true);
      }
    }
  }, [isAccordionOpenArray]);

  return (
    <button
      className={`toggleAllAccordionsBtn ${
        isAllAccordionOpen ||
        isAccordionOpenArray.every((item) => item === true)
          ? "isOpen"
          : ""
      }`}
      onClick={() => setIsAllAccordionOpen(!isAllAccordionOpen)}
    >
      {isAllAccordionOpen ? "全て閉じる" : "全て開く"}
    </button>
  );
};

// // react
// import { useStoryContext } from "@/app/story/StoreContext";
// // style
// import "./toggleAllStoryBtn.scss";
// import { useEffect } from "react";

// export const ToggleAllStoryBtn = () => {
//   const { isAllAccordionOpen, setIsAllAccordionOpen, isAccordionOpen,  setIsAccordionOpen} = useStoryContext();

//   useEffect(() => {
//    // 配列が空の場合のチェックを追加(無限レンダリング防ぐ)
//   if (isAccordionOpen.length > 0) {
//     if (isAccordionOpen.every((item) => !item)) {
//       setIsAllAccordionOpen(false);
//     } else if (isAccordionOpen.every((item) => item)) {
//       setIsAllAccordionOpen(true);
//     }
//   }
//   }, [isAccordionOpen, setIsAllAccordionOpen]);

//   return (
//     <button
//     className={`toggleAllAccordionsBtn ${isAllAccordionOpen ? 'isOpen' : ''}`}
//     onClick={() => setIsAllAccordionOpen(!isAllAccordionOpen)}
//   >
//     {isAllAccordionOpen || isAccordionOpen.every(item => item === true) ? "全て閉じる" : "全て開く"}
//   </button>

//   );
// };

// // react
// import { useStoryContext } from "@/app/story/StoreContext";
// // style
// import "./toggleAllStoryBtn.scss";

// export const ToggleAllStoryBtn = () => {
//   const { isAllAccordionOpen, setIsAllAccordionOpen } = useStoryContext();

//   // 全てのアコーディオンを開く
//   const toggleAllAccordionsOpen = () => {
//     setIsAllAccordionOpen(true);
//   };

//   // 全てのアコーディオンを閉じる
//   const toggleAllAccordionsClose = () => {
//     setIsAllAccordionOpen(false);
//   };

//   return (
//     <div className="toggleAllAccordionsBtn">
//       <button className="allStoryOpenBtn" onClick={toggleAllAccordionsOpen}>
//         全て開く
//       </button>
//       <button className="allStoryOpenBtn" onClick={toggleAllAccordionsClose}>
//         全て閉じる
//       </button>
//     </div>
//   );
// };
