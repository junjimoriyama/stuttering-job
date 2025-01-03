// // react
// import { useStoryContext } from "@/app/story/StoreContext";
// // style
// import "./toggleAllStoryBtn.scss";
// import { useEffect } from "react";

// export const ToggleAllStoryBtn = () => {
//   const {
//     isAllAccordionOpen,
//     setIsAllAccordionOpen,
//     isAccordionOpenArray,
//     // setIsAccordionOpenArray,
//   } = useStoryContext();

//   useEffect(() => {
//     // 空の配列ではないか確認(無限レンダリング防ぐ)
//     if (isAccordionOpenArray.length > 0) {
//       if (isAccordionOpenArray.every((item) => item === false)) {
//         setIsAllAccordionOpen(false);
//       } else if (isAccordionOpenArray.every((item) => item === true)) {
//         setIsAllAccordionOpen(true);
//       }
//     }
//   }, [isAccordionOpenArray]);

//   return (
//     <button
//       className={`toggleAllStoryBtn ${
//         isAllAccordionOpen ||
//         isAccordionOpenArray.every((item) => item === true)
//           ? "isOpen"
//           : ""
//       }`}
//       onClick={() => setIsAllAccordionOpen(!isAllAccordionOpen)}
//     >
//       {isAllAccordionOpen ? "全て閉じる" : "全て開く"}
//     </button>
//   );
// };