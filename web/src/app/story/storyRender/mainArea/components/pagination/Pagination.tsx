"use client";

// react
import { useStoryContext } from "@/app/story/StoreContext";
// style
import "./pagination.scss";


export const Pagination = ({
  totalPage,
  onPageChange,
}: {
  totalPage: number;
  onPageChange: (page: number) => void;
}) => {
  const { 
    currentPage, 
    setIsPageFilterEffect, } =
    useStoryContext();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // 最大表示ページ数
  const maxPagesToShow = 5;

  // 開始ページ番号を計算
  /* 現在のページをページネーションの中央に表示するため */
  /* 「中央に置く」ためには前方のページ数を引く必要あり */
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
  let endPage = startPage + maxPagesToShow - 1

  // 終了ページ番号を超えた場合の調整
  if (endPage > totalPage) {
    endPage = totalPage;
    // endPageからmaxPagesToShow件のページ番号を表示する
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }


  return (
    <div className="pagination">
      <div className="pagination_controls">
        {/* 前に戻る */}
        <button
          className={`page_prev_btn ${currentPage === 1 ? "inActive" : ""}`}
          onClick={() => {
            if (currentPage > 1) {
              onPageChange(currentPage - 1);
              setIsPageFilterEffect(true);
              scrollToTop();
              // if (currentPage - 1 < startPage) {
              //   setPageLimit((prev: number) => Math.max(1, prev - 1));
              // }
            }
          }}
        >
          ←
        </button>
        {/* ページ展開 */}
        <ul className="page_numbers">
          {/* 開始ページ番号 (startPage) を基準に、インデックス i を足して各ページ番号を生成 */}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
            <li
              className={`page_number ${currentPage === page ? "isActive" : ""}`}
              key={page}
              onClick={() => {
                onPageChange(page);
                setIsPageFilterEffect(true);
                scrollToTop();
              }}
            >
              {page}
            </li>
          ))}
        </ul>
        {/* 次に進む */}
        <button
          className={`page_next_btn ${currentPage === totalPage ? "inActive" : ""}`}
          onClick={() => {
            if (currentPage < totalPage) {
              onPageChange(currentPage + 1);
              setIsPageFilterEffect(true);
              scrollToTop();
              // if (currentPage + 1 > endPage) {
              //   setPageLimit((prev: number) => Math.min(totalPage, prev + 1));
              // }
            }
          }}
        >
          →
        </button>
      </div>
      {/* <div className="current_page">
        {currentPage} / {totalPage}
      </div> */}
    </div>
  );
};
