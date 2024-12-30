"use client";

// react
import { useState, useEffect } from "react";
import { useStoryContext } from "@/app/story/StoreContext";
// components
import { StoryAccordion } from "./storyAccordion/StoryAccordion";
import {Pagination} from "../components/pagination/Pagination";
import { ToggleAllStoryBtn } from "../components/toggleAllStoryBtn/ToggleAllStoryBtn";

// style
import './storyItems.scss'

export const StoryItems = ({ data }: { data: [] }) => {
  // 選択された値
  const { age, gender, industry, currentPage, setCurrentPage } = useStoryContext();

  //  絞り込み
  const displayData =
    age.length === 0 && gender.length === 0 && industry.length === 0
      ? data // 全て未選択の場合は全データを表示
      : data.filter(
          (item: any) =>
            (age.length === 0 ||
              (Array.isArray(age) && age.includes(item.age))) &&
            (gender.length === 0 || gender.includes(item.gender)) &&
            (industry.length === 0 || industry.includes(item.industry))
        );
        

  // データの量
  const displayNumber = 5;

  // 合計のページ数
  const [totalPage, setTotalPage] = useState<number | null>(null);

  useEffect(() => {
    setTotalPage(Math.ceil(displayData.length / displayNumber));
  }, [displayData]);

  // ページの始まり
  const startPage = (currentPage - 1) * displayNumber;
  // ページの終わり
  const endPage = currentPage * displayNumber;

 useEffect(() => {
  // displayDataが更新されるとトータルページを再計算
  const newTotalPage = Math.ceil(displayData.length / displayNumber)
  setTotalPage(newTotalPage)

  // 現在のページが新しいトータルページを下回れば1ページにする
  if(currentPage > newTotalPage!) {
    setCurrentPage(1)
  }
 }, [displayData])

  return (
    <div className="storyItems">
      {/* 表示するデータ */}
      {displayData && displayData.length > 0 ? (
        <>
        <ToggleAllStoryBtn/>
          {displayData.slice(startPage, endPage).map((item: any, i: number) => {
            const value = i
            return (
              <StoryAccordion key={i} data={item} index={value} />
            );
          })}
          <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      ) : (
        <p className="notItem">条件に合う投稿はありません</p>
      )}
    </div>
  );
};
