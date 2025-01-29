"use client";

// react
import { useEffect, useCallback, useMemo, useState } from "react";
import { useStoryContext } from "@/app/story/StoreContext";
import { useRouter } from "next/navigation";
// type
import { allDataType } from "@/types/story";
// components
import { Pagination } from "../components/pagination/Pagination";
// style
import "./storyItems.scss";
import { BagIcon } from "@/assets/svg/icon/bag";
import { SearchCount } from "@/app/story/components/search/searchCount/SearchCount";

export const StoryItems = () => {
  // router
  const router = useRouter();
  // useContext
  const {
    // データ管理
    originalData,
    displayData,
    setDisplayData,
    // 絞り込み条件
    age,
    gender,
    industry,
    // ページネーション管理
    storiesPerPage,
    currentPage,
    setCurrentPage,
    // アニメーション効果
    isPageFilterEffect,
    setIsPageFilterEffect,
  } = useStoryContext();

  // ローディング状態の有無
  const [loadingId, setLoadingId] = useState<number | null>(null);

  // 表示するページ
  const startPage = (currentPage - 1) * storiesPerPage;
  const endPage = currentPage * storiesPerPage;

  const totalPage = useMemo(
    () => Math.ceil(displayData.length / storiesPerPage),
    [displayData]
  );

  // 絞り込み関数
  const filterStoryData = useCallback(() => {
    return age.length === 0 && gender.length === 0 && industry.length === 0
      ? originalData
      : originalData.filter(
          (item) =>
            (age.length === 0 || age.includes(item.age)) &&
            (gender.length === 0 || gender.includes(item.gender)) &&
            (industry.length === 0 || industry.includes(item.industry))
        );
  }, [age, gender, industry]);

  // ローディングをnullにする
  useEffect(() => {
    setLoadingId(null);
  }, []);

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
    setLoadingId(id);
    // 前ページのスクロール位置を変えない
    router.push(`/story/storyItem/${id}`, { scroll: false });
  };

  // ボタンアニメーション終了したら
  const handleBtnAnimationEnd = () => {
    setIsPageFilterEffect(false);
  };

  return (
    <div className="storyItems">
      <div className="story_controls">
        {/* <SelectPerPage /> */}
        <SearchCount className="storyItems_searchCount" />
        <Pagination
          totalPage={totalPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      {displayData.length > 0 ? (
        <ul className="story_preview_list">
          {displayData.slice(startPage, endPage).map((item: allDataType) => (
            <li key={item.id} className="story_preview_item">
              <div
                className="story_preview_contents"
                onClick={() => handleLinkStoryItem(item.id)}
              >
                {/* <ul className="story_preview_info_list"> */}
                <ul
                  className={`story_preview_info_list ${
                    isPageFilterEffect ? "isEffect" : ""
                  }`}
                  onAnimationEnd={handleBtnAnimationEnd}
                >
                  <li className="story_preview_info_icon">
                    <BagIcon />
                  </li>
                  <li className="story_preview_info_number">
                    <span className="story_preview_item_label_number">No</span>
                    <span className="story_preview_item_value_number">
                      {item.id}
                    </span>
                  </li>
                  <li
                    className={`story_preview_info ${
                      loadingId === item.id ? "isHidden" : ""
                    }`}
                  >
                    <span className="story_preview_item_label">年代</span>
                    <span className="story_preview_item_value">{item.age}代</span>
                  </li>
                  <li
                    className={`story_preview_info ${
                      loadingId === item.id ? "isHidden" : ""
                    }`}
                  >
                    <span className="story_preview_item_label">性別</span>
                    <span className="story_preview_item_value">
                      {item.gender}
                    </span>
                  </li>
                  <li
                    className={`story_preview_info ${
                      loadingId === item.id ? "isHidden" : ""
                    }`}
                  >
                    <span className="story_preview_item_label">業種</span>
                    <span className="story_preview_item_value">
                      {item.industry}
                    </span>
                  </li>
                  <li
                    className={`story_preview_info ${
                      loadingId === item.id ? "isHidden" : ""
                    }`}
                  >
                    <span className="story_preview_item_label">
                      仕事の苦労や工夫
                    </span>
                    <span className="story_preview_item_value story_preview_item_job_struggles">
                      {item.job_struggles}
                    </span>
                  </li>
                </ul>
                <div
                  className={`loader ${
                    loadingId === item.id ? "isVisible" : ""
                  }`}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="notItem">条件に合う体験談はありません</p>
      )}
      {displayData.slice(startPage, endPage).length > 2 && (
        <Pagination
          totalPage={totalPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};
// "use client";

// // react
// import { useEffect, useCallback, useMemo, useState } from "react";
// import { useStoryContext } from "@/app/story/StoreContext";
// import { useRouter } from "next/navigation";
// // type
// import { allDataArrayType, allDataType } from "@/types/story";
// // components
// import { Pagination } from "../components/pagination/Pagination";
// // style
// import "./storyItems.scss";
// import { BagIcon } from "@/assets/svg/icon/bag";

// export const StoryItems = ({ fetchData }: { fetchData: allDataArrayType }) => {
//   // router
//   const router = useRouter();
//   // useContext
//   const {
//     age,
//     gender,
//     industry,
//     storiesPerPage,
//     currentPage,
//     setCurrentPage,
//     displayData,
//     setDisplayData,
//     isPageFilterEffect,
//     setIsPageFilterEffect,
//   } = useStoryContext();

//   // 表示するページ
//   const startPage = (currentPage - 1) * storiesPerPage;
//   const endPage = currentPage * storiesPerPage;

//   const totalPage = useMemo(
//     () => Math.ceil(displayData.length / storiesPerPage),
//     [displayData]
//   );

//   // 絞り込み関数
//   const filterStoryData = useCallback(() => {
//     return age.length === 0 && gender.length === 0 && industry.length === 0
//       ? fetchData
//       : fetchData.filter(
//           (item) =>
//             (age.length === 0 || age.includes(item.age)) &&
//             (gender.length === 0 || gender.includes(item.gender)) &&
//             (industry.length === 0 || industry.includes(item.industry))
//         );
//   }, [age, gender, industry]);

//   // 絞り込み関数の結果
//   useEffect(() => {
//     const filteredData = filterStoryData();
//     setDisplayData(filteredData);
//   }, [filterStoryData, setDisplayData]);

//   useEffect(() => {
//     // 現在のページが合計ページ数より小さければ
//     if (currentPage > totalPage) {
//       // １ページに戻る
//       setCurrentPage(1);
//     }
//   }, [displayData]);

//   // 各体験談にページ遷移
//   const handleLinkStoryItem = (id: number) => {
//     router.push(`/story/storyItem/${id}`);
//   };

//   const handleBtnAnimationEnd = () => {
//     setIsPageFilterEffect(false);
//   };

//   return (
//     <div className="storyItems">
//       <div className="story_controls">
//       {/* <SelectPerPage /> */}
//         <Pagination
//           totalPage={totalPage}
//           onPageChange={(page) => setCurrentPage(page)}
//         />
//       </div>
//       {displayData.length > 0 ? (
//         <ul
//           className={`story_preview_list ${
//             isPageFilterEffect ? "isChange" : ""
//           }`}
//         >
//           {displayData.slice(startPage, endPage).map((item: allDataType) => (
//             <li key={item.id} className="story_preview_item">
//               <div
//                 className="story_preview_contents"
//                 onClick={() => handleLinkStoryItem(item.id)}
//               >
//                 {/* <ul className="story_preview_info_list"> */}
//                 <ul
//                   className={`story_preview_info_list ${
//                     isPageFilterEffect ? "isEffect" : ""
//                   }`}
//                   onAnimationEnd={handleBtnAnimationEnd}
//                 >
//                   <li className="story_preview_info_icon">
//                     <BagIcon />
//                   </li>
//                   <li className="story_preview_info_number">
//                     <span className="story_preview_item_label_number">No</span>
//                     <span className="story_preview_item_value_number">
//                       {item.id}
//                     </span>
//                   </li>
//                   <li className="story_preview_info">
//                     <span className="story_preview_item_label">年代</span>
//                     <span className="story_preview_item_value">
//                       {item.age}代
//                     </span>
//                   </li>
//                   <li className="story_preview_info">
//                     <span className="story_preview_item_label">性別</span>
//                     <span className="story_preview_item_value">
//                       {item.gender}
//                     </span>
//                   </li>
//                   <li className="story_preview_info">
//                     <span className="story_preview_item_label">業種</span>
//                     <span className="story_preview_item_value">
//                       {item.industry}
//                     </span>
//                   </li>
//                   <li className="story_preview_info">
//                     <span className="story_preview_item_label">
//                       仕事の苦労や工夫
//                     </span>
//                     <span className="story_preview_item_value story_preview_item_job_struggles">
//                       {item.job_struggles}
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="notItem">条件に合う体験談はありません</p>
//       )}
//       {( displayData.slice(startPage, endPage).length > 2 &&
//         <Pagination
//           totalPage={totalPage}
//           onPageChange={(page) => setCurrentPage(page)}
//         />
//       )}
//     </div>
//   );
// };
