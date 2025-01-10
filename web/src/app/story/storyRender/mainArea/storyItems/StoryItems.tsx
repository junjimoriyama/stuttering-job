


"use client";

// react
import { useEffect, useCallback, useMemo, useState } from "react";
import { useStoryContext } from "@/app/story/StoreContext";
import { useRouter } from "next/navigation";
// type
import { allDataArrayType, allDataType } from "@/types/story";
// components
import { Pagination } from "../components/pagination/Pagination";
// style
import "./storyItems.scss";
import { BagIcon } from "@/assets/svg/icon/bag";
import { SelectPerPage } from "../components/selectPerPage/SelectPerPage";

export const StoryItems = ({ fetchData }: { fetchData: allDataArrayType }) => {
  // router
  const router = useRouter();
  // useContext
  const {
    age,
    gender,
    industry,
    storiesPerPage,
    currentPage,
    setCurrentPage,
    displayData,
    setDisplayData,
    isPageFilterEffect,
    setIsPageFilterEffect,
  } = useStoryContext();

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
      ? fetchData
      : fetchData.filter(
          (item) =>
            (age.length === 0 || age.includes(item.age)) &&
            (gender.length === 0 || gender.includes(item.gender)) &&
            (industry.length === 0 || industry.includes(item.industry))
        );
  }, [age, gender, industry]);

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
    router.push(`/story/storyItem/${id}`);
  };

  const handleBtnAnimationEnd = () => {
    setIsPageFilterEffect(false);
  };

  return (
    <div className="storyItems">
      <div className="story_controls">
      {/* <SelectPerPage /> */}
        <Pagination
          totalPage={totalPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      {displayData.length > 0 ? (
        <ul
          className={`story_preview_list ${
            isPageFilterEffect ? "isChange" : ""
          }`}
        >
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
                  <li className="story_preview_info">
                    <span className="story_preview_item_label">年代</span>
                    <span className="story_preview_item_value">
                      {item.age}代
                    </span>
                  </li>
                  <li className="story_preview_info">
                    <span className="story_preview_item_label">性別</span>
                    <span className="story_preview_item_value">
                      {item.gender}
                    </span>
                  </li>
                  <li className="story_preview_info">
                    <span className="story_preview_item_label">業種</span>
                    <span className="story_preview_item_value">
                      {item.industry}
                    </span>
                  </li>
                  <li className="story_preview_info">
                    <span className="story_preview_item_label">
                      仕事の苦労や工夫
                    </span>
                    <span className="story_preview_item_value story_preview_item_job_struggles">
                      {item.job_struggles}
                    </span>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="notItem">条件に合う体験談はありません</p>
      )}
      {( displayData.slice(startPage, endPage).length > 2 &&
        <Pagination
          totalPage={totalPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};


// "use client";

// import { useStoryContext } from "@/app/story/StoreContext";
// import "./pagination.scss";

// export const Pagination = ({
//   totalPage,
//   onPageChange,
// }: {
//   totalPage: number;
//   onPageChange: (page: number) => void;
// }) => {
//   const { 
//     currentPage, 
//     setIsPageFilterEffect, } =
//     useStoryContext();

//     const pageRange = 5

//     const getPageNumbers = () => {
//       const pages: (number | string)[] = [];
  
//       if (totalPage <= pageRange + 2) {
//         // ページ数が少ない場合はすべて表示
//         for (let i = 1; i <= totalPage; i++) {
//           pages.push(i);
//         }
//       } else {
//         if (currentPage > 3) pages.push(1, "...");
  
//         // 中央のページ範囲を計算
//         const start = Math.max(2, currentPage - 2);
//         const end = Math.min(totalPage - 1, currentPage + 2);
  
//         for (let i = start; i <= end; i++) {
//           pages.push(i);
//         }
  
//         if (currentPage < totalPage - 2) pages.push("...", totalPage);
//       }
  
//       return pages;
//     };

//     console.log(getPageNumbers)


//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     })
//   }

//   return (
//     <div className="pagination">
//       <div className="pagination_controls">
//         {/* 前に戻る */}
//         <button
//           className={`page_prev_btn ${currentPage === 1 ? "inActive" : ""}`}
//           onClick={() => {
//             currentPage > 1 && onPageChange(currentPage - 1);
//             if(currentPage > 1) {
//               setIsPageFilterEffect(true);
//               scrollToTop()
//             }
//           }}
//         >
//           ←
//         </button>
//         {/* ページ展開 */}
//         <ul className="page_numbers">
//           {[...Array(totalPage)].map((_, i) => {
//             const value = i + 1;
//             return (
//               <li
//                 className={`page_number ${
//                   currentPage === value ? "isActive" : ""
//                 }`}
//                 key={value}
//                 onClick={() => {
//                   onPageChange(value);
//                   setIsPageFilterEffect(true);
//                   scrollToTop()
//                 }}
//               >
//                 {value}
//               </li>
//             );
//           })}
//         </ul>
//         {/* 次に進む */}
//         <button
//           className={`page_next_btn ${currentPage === totalPage ? "inActive" : ""}`}
//           onClick={() => {
//             currentPage < totalPage! && onPageChange(currentPage + 1);
//             if(currentPage < totalPage) {
//               setIsPageFilterEffect(true);
//               scrollToTop()
//             }
//           }}
//         >
//           →
//         </button>
//       </div>
//       {/* <div className="current_page">
//         {currentPage} / {totalPage}
//       </div> */}
//     </div>
//   );
// };
