"use client";

import { useState, useEffect } from "react";
// import Pagination from "../components/pagination/Pagination";
import StoryAccordion from "../storyAccordion/StoryAccordion";
import Pagination from "../components/pagination/Pagination";

const RenderStoryItems = ({ data }: { data: { id: number; title: string; content: string }[] }) => {
  // データの量
  const displayNumber = 2

  // 合計のページ数
  const [ totalPage, setTotalPage  ] = useState(0)

  // 現在のページ
  const [ currentPage, setCurrentPage  ] = useState(1)

  useEffect(() => {
    setTotalPage(Math.ceil(data.length / displayNumber))
  }, [])

  const startPage = (currentPage - 1) * displayNumber
  const endPage = currentPage * displayNumber

  return (
    <div className="storyItems">
      {/* 表示するデータ */}
      {data.slice(startPage, endPage).map((item) => (
        <StoryAccordion key={item.id} data={item} />
      ))}
      {/* ページネーション */}
      <Pagination
      totalPage={totalPage}
      currentPage={currentPage}
      onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default RenderStoryItems

// 0 2
// 2 4
































// export default RenderStoryItems;
// "use client";

// import { useState, useEffect } from "react";
// import Pagination from "../components/pagination/Pagination";
// import StoryAccordion from "../storyAccordion/StoryAccordion";

// const RenderStoryItems = ({ data }: { data: { id: number; title: string; content: string }[] }) => {
//   // 表示件数
//   const displayNumber = 2;

//   // ページネーションの状態
//   const [pageTotalCount, setPageTotalCount] = useState<number>(0);
//   const [currentNumber, setCurrentNumber] = useState<number>(1);

//   // 総ページ数を計算
//   useEffect(() => {
//     setPageTotalCount(Math.ceil(data.length / displayNumber));
//   }, [data, displayNumber]);

//   // 表示範囲の計算
//   const startPage = (currentNumber - 1) * displayNumber;
//   const endPage = currentNumber * displayNumber;

//   return (
//     <div className="storyItems">
//       {/* 表示するデータ */}
//       {data.slice(startPage, endPage).map((item) => (
//         <StoryAccordion key={item.id} data={item} />
//       ))}
//       {/* ページネーション */}
//       <Pagination
//         currentPage={currentNumber}
//         totalPages={pageTotalCount}
//         onPageChange={(page) => setCurrentNumber(page)}
//       />
//     </div>
//   );
// };

// export default RenderStoryItems;
