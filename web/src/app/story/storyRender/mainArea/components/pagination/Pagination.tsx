"use client";

import { useStoryContext } from "@/app/story/StoreContext";
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

  return (
    <div className="pagination">
      <div className="pagination_controls">
        {/* 前に戻る */}
        <button
          className="page_prev_btn"
          onClick={() => {
            currentPage > 1 && onPageChange(currentPage - 1);
            if(currentPage > 1) {
              setIsPageFilterEffect(true);
              scrollToTop()
            }
          }}
        >
          ←
        </button>
        {/* ページ展開 */}
        <ul className="page_numbers">
          {[...Array(totalPage)].map((_, i) => {
            const value = i + 1;
            return (
              <li
                className={`page_number ${
                  currentPage === value ? "isActive" : ""
                }`}
                key={value}
                onClick={() => {
                  onPageChange(value);
                  setIsPageFilterEffect(true);
                  scrollToTop()
                }}
              >
                {value}
              </li>
            );
          })}
        </ul>
        {/* 次に進む */}
        <button
          className="page_next_btn"
          onClick={() => {
            currentPage < totalPage! && onPageChange(currentPage + 1);
            if(currentPage < totalPage) {
              setIsPageFilterEffect(true);
              scrollToTop()
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
