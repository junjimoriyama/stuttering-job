"use client";

import { useStoryContext } from "@/app/story/StoreContext";
import "./pagination.scss";
import { useEffect, useState } from "react";

export const Pagination = ({
  totalPage,
  onPageChange,
}: {
  totalPage: number | null;
  onPageChange: (page: number) => void;
}) => {
  const { currentPage, isPageChangeEffect, setIsPageChangeEffect } =
    useStoryContext();

  // クリックしたボタン効果の状態
  // const [ isPageChangeEffect, setIsPageChangeEffect  ] = useState(false)

  // アニメーション終了したらボタン効果の状態false
  const handlePageChange = () => {
    setIsPageChangeEffect(true);
    setTimeout(() => {
      setIsPageChangeEffect(false)
    },100)
  };

  return (
    <div className="pagination">
      <div className="pagination_controls">
        {/* 前に戻る */}
        <button
          className="page_prev_btn"
          onClick={() => {
            currentPage > 1 && onPageChange(currentPage - 1);
            handlePageChange();
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
                  handlePageChange();
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
            handlePageChange();
          }}
        >
          →
        </button>
      </div>
      <div className="current_page">
        {currentPage} / {totalPage}
      </div>
    </div>
  );
};
