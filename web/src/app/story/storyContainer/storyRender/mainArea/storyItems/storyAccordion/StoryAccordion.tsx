import React, { useEffect, useRef, useState } from "react";
import "./storyAccordion.scss";
import { useStoryContext } from "@/app/story/StoreContext";

export const StoryAccordion = ({
  data,
  index,
}: {
  data: any;
  index: number;
}) => {
  const {
    isAllAccordionOpen,
    setIsAllAccordionOpen,
    isAccordionOpenArray,
    setIsAccordionOpenArray,
  } = useStoryContext();

  // const [isAccordionOpen, setIsAccordionOpen] = useState([]);

  // アコーディンの縦幅
  const [maxHeight, setMaxHeight] = useState<number | undefined>(0);

  const accordionContentRef = useRef<HTMLDivElement>(null);

  // 各アコーディオンクリックしたら
  const handleAccordionBtnClick = () => {
    setIsAccordionOpenArray((prev: boolean[]) => {
      // 現在の状態を保存
      const updated = [...prev];
      // 変更箇所を反映
      updated[index] = !updated[index]
      // 変更された値を返す
      return updated
    })
    // isAccordionOpenArrayの中でtrueのものだけ
    setMaxHeight(accordionContentRef.current?.scrollHeight || 0)
  };

  useEffect(() => {
    setIsAccordionOpenArray((prev: boolean[]) => {
       // 現在の状態を保存
      const updated = [...prev]
      // 該当のアコーディオンの開閉状態を全体の開閉状態に合わせる
      updated[index] = isAllAccordionOpen
      return updated
    })

    setMaxHeight(
      // 全体がtrueであればアコーディオン広げる
      isAllAccordionOpen ? accordionContentRef.current?.scrollHeight || 0 : 0
    )
  }, [isAllAccordionOpen, index]);

  return (
    <div className="accordion">
      <div className="accordion_header" onClick={handleAccordionBtnClick}>
        <ul className="accordion_summary">
          <li className="accordion_summary_item">
            <span className="accordion_summary_item_number">No</span>
            {data.id}
          </li>
          <li className="accordion_summary_item">
            <span>年代</span>
            {data.age}代
          </li>
          <li className="accordion_summary_item">
            <span>性別</span>
            {data.gender}
          </li>
          <li className="accordion_summary_item">
            <span>業種</span>
            {data.industry}
          </li>
        </ul>
        <button
          className={`accordion_btn ${isAccordionOpenArray[index] ? "isOpen" : ""}
              ? "isOpen"
              : ""
          }`}
        >
          <div
            className={`accordion_plus_btn ${
              isAccordionOpenArray[index] ? "isOpen" : ""
            }
                ? "isOpen"
                : ""
            }`}
          >
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div
        className={`accordion_content ${
          isAccordionOpenArray[index] ? "isOpen" : ""
        }`}
        ref={accordionContentRef}
        style={{
          maxHeight: isAccordionOpenArray[index] ? `${maxHeight}px` : "0px",
        }}
      >
        <ul className="accordion_stories">
          <li className="accordion_story_item">
            <span className="accordion_story_label">ニックネーム</span>
            <span className="accordion_story_value">{data.username}</span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">具体的な仕事内容</span>
            <span className="accordion_story_value">{data.detail}</span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">今の仕事を選んだ理由</span>
            <span className="accordion_story_value">{data.reason}</span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">働き方</span>
            <span className="accordion_story_value">{data.employment}</span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">勤続年数</span>
            <span className="accordion_story_value">{data.years}</span>
          </li>
          <li className="accordion_story_item accordion_story_number">
            <span className="accordion_story_label">
              吃音による仕事の苦労度
            </span>
            <div className="accordion_story_level">
              <span className="accordion_story_value">小</span>
              {[...Array(5)].map((_, i) => {
                const value = i + 1;
                return (
                  <span
                    className={`accordion_story_level_difficulty ${
                      value === data.job_difficulty ? "isActive" : ""
                    }`}
                    key={value}
                  >
                    {value}
                  </span>
                );
              })}
              <span className="accordion_story_value">大</span>
            </div>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">
              就職活動中の苦労や工夫
            </span>
            <span className="accordion_story_value">{data.job_struggles}</span>
          </li>
          <li className="accordion_story_item accordion_story_number">
            <span className="accordion_story_label">
              吃音による就職活動の苦労度
            </span>
            <div className="accordion_story_level">
              <span className="accordion_story_value">小</span>
              {[...Array(5)].map((_, i) => {
                const value = i + 1;
                return (
                  <span
                    className={`accordion_story_level_difficulty ${
                      value === data.job_hunt_difficulty ? "isActive" : ""
                    }`}
                    key={value}
                  >
                    {value}
                  </span>
                );
              })}
              <span className="accordion_story_value">大</span>
            </div>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">
              就職活動中の苦労や工夫
            </span>
            <span className="accordion_story_value">
              {data.job_hunt_struggles}
            </span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">障害者手帳の有無</span>
            <span className="accordion_story_value">{data.notebook}</span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">見ている人に向けて</span>
            <span className="accordion_story_value">{data.free}</span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">投稿日</span>
            <span className="accordion_story_value">
              {new Date(data.created_at).toLocaleDateString("ja-JP")}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// export default StoryAccordion;

// import React, { useEffect, useRef, useState } from "react";
// import "./storyAccordion.scss";
// import { useStoryContext } from "@/app/story/StoreContext";

// const StoryAccordion = ({ data, totalAccordions}: { data: any, totalAccordions: number }) => {
//   const { isAllAccordionOpen, setIsAllAccordionOpen } = useStoryContext();

//   const [isAccordionOpen, setIsAccordionOpen] = useState(false);
//   const [maxHeight, setMaxHeight] = useState<number | undefined>(0);

//   const accordionContentRef = useRef<HTMLDivElement>(null);

//   // 各アコーディオンクリックしたら
//   const handleAccordionBtnClick = () => {
//     // アコーディオン開閉の状態を変更
//     setIsAccordionOpen(!isAccordionOpen);
//      // trueであれば個別で開き、falseであれば個別で閉じる
//     setMaxHeight(accordionContentRef.current?.scrollHeight || 0);
//   };

//   useEffect(() => {
//     // 全てのアコーディオンの状態をセット
//     setIsAccordionOpen(isAllAccordionOpen);
//     // trueであれば全て開き、falseであれば全て閉じる
//     setMaxHeight(
//       isAllAccordionOpen ? accordionContentRef.current?.scrollHeight || 0 : 0
//     );

//   }, [isAllAccordionOpen]);

//   return (
//     <div className="accordion">
//       <div className="accordion_header" onClick={handleAccordionBtnClick}>
//         <ul className="accordion_summary">
//           <li className="accordion_summary_item">
//             <span className="accordion_summary_item_number">No</span>
//             {data.id}
//           </li>
//           <li className="accordion_summary_item">
//             <span>年代</span>
//             {data.age}代
//           </li>
//           <li className="accordion_summary_item">
//             <span>性別</span>
//             {data.gender}
//           </li>
//           <li className="accordion_summary_item">
//             <span>業種</span>
//             {data.industry}
//           </li>
//         </ul>
//         <button
//           className={`accordion_btn ${
//             isAccordionOpen || (isAccordionOpen && isAllAccordionOpen)
//               ? "isOpen"
//               : ""
//           }`}
//         >
//           <div
//             className={`accordion_plus_btn ${
//               isAccordionOpen || (isAccordionOpen && isAllAccordionOpen)
//                 ? "isOpen"
//                 : ""
//             }`}
//           >
//             <span></span>
//             <span></span>
//           </div>
//         </button>
//       </div>
//       <div
//         className={`accordion_content ${
//           isAccordionOpen || (isAccordionOpen && isAllAccordionOpen)
//             ? "isOpen"
//             : ""
//         }`}
//         ref={accordionContentRef}
//         style={{
//           maxHeight:
//             isAccordionOpen
//             ||
//             (isAccordionOpen && isAllAccordionOpen)
//               ? `${maxHeight}px`
//               : "0px",
//         }}
//       >
//         <ul className="accordion_stories">
//           <li className="accordion_story_item">
//             <span className="accordion_story_label">ニックネーム</span>
//             <span className="accordion_story_value">{data.username}</span>
//           </li>
//           <li className="accordion_story_item">
//             <span className="accordion_story_label">具体的な仕事内容</span>
//             <span className="accordion_story_value">{data.detail}</span>
//           </li>
//           <li className="accordion_story_item">
//             <span className="accordion_story_label">今の仕事を選んだ理由</span>
//             <span className="accordion_story_value">{data.reason}</span>
//           </li>
//           <li className="accordion_story_item">
//             <span className="accordion_story_label">働き方</span>
//             <span className="accordion_story_value">{data.employment}</span>
//           </li>
//           <li className="accordion_story_item">
//             <span className="accordion_story_label">勤続年数</span>
//             <span className="accordion_story_value">{data.years}</span>
//           </li>
//           <li className="accordion_story_item accordion_story_number">
//             <span className="accordion_story_label">
//               吃音による仕事の苦労度
//             </span>
//             <div className="accordion_story_level">
//               <span className="accordion_story_value">小</span>
//               {[...Array(5)].map((_, i) => {
//                 const value = i + 1;
//                 return (
//                   <span
//                     className={`accordion_story_level_difficulty ${
//                       value === data.job_difficulty ? "isActive" : ""
//                     }`}
//                     key={value}
//                   >
//                     {value}
//                   </span>
//                 );
//               })}
//               <span className="accordion_story_value">大</span>
//             </div>
//           </li>
//           <li className="accordion_story_item">
//             <span className="accordion_story_label">
//               就職活動中の苦労や工夫
//             </span>
//             <span className="accordion_story_value">{data.job_struggles}</span>
//           </li>
//           <li className="accordion_story_item accordion_story_number">
//             <span className="accordion_story_label">
//               吃音による就職活動の苦労度
//             </span>
//             <div className="accordion_story_level">
//               <span className="accordion_story_value">小</span>
//               {[...Array(5)].map((_, i) => {
//                 const value = i + 1;
//                 return (
//                   <span
//                     className={`accordion_story_level_difficulty ${
//                       value === data.job_hunt_difficulty ? "isActive" : ""
//                     }`}
//                     key={value}
//                   >
//                     {value}
//                   </span>
//                 );
//               })}
//               <span className="accordion_story_value">大</span>
//             </div>
//           </li>
//           <li className="accordion_story_item">
//             <span className="accordion_story_label">
//               就職活動中の苦労や工夫
//             </span>
//             <span className="accordion_story_value">
//               {data.job_hunt_struggles}
//             </span>
//           </li>
//           <li className="accordion_story_item">
//             <span className="accordion_story_label">障害者手帳の有無</span>
//             <span className="accordion_story_value">{data.notebook}</span>
//           </li>
//           <li className="accordion_story_item">
//             <span className="accordion_story_label">見ている人に向けて</span>
//             <span className="accordion_story_value">{data.free}</span>
//           </li>
//           <li className="accordion_story_item">
//             <span className="accordion_story_label">投稿日</span>
//             <span className="accordion_story_value">
//               {new Date(data.created_at).toLocaleDateString("ja-JP")}
//             </span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default StoryAccordion;

//  // 各アコーディオンクリックしたら
//  const handleAccordionBtnClick = () => {
//   // 現在の配列をコピーして該当インデックスの値をトグル
//   setIsAccordionOpen((prev: boolean[]) => {
//     const updated = [...prev];
//     updated[index] = !updated[index];
//     return updated;
//   });

//   // 高さを設定
//   setMaxHeight(
//     accordionContentRef.current?.scrollHeight || 0
//   );
// };

// useEffect(() => {
//   // 全体開閉の状態に応じて変更
//   setIsAccordionOpen((prev: boolean[]) => {
//     const updated = [...prev];
//     updated[index] = isAllAccordionOpen;
//     return updated;
//   });

//   setMaxHeight(
//     isAllAccordionOpen ? accordionContentRef.current?.scrollHeight || 0 : 0
//   );
// }, [isAllAccordionOpen, index, setIsAccordionOpen]);
