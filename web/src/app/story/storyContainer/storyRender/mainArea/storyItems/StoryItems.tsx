"use client";

import { useState, useEffect } from "react";
// import Pagination from "../components/pagination/Pagination";
import StoryAccordion from "../storyAccordion/StoryAccordion";
import Pagination from "../components/pagination/Pagination";
import { useStoryContext } from "@/app/story/StoreContext";

export const StoryItems = ({ data }: { data: any}) => {

  // const [ displayData, setDisplayData  ] = useState([data])

  // useEffect(() => {
  //   setDisplayData(data)
  // }, [])


  // データの量
  const displayNumber = 2

  // 合計のページ数
  const [ totalPage, setTotalPage  ] = useState(0)

  // 現在のページ
  const [ currentPage, setCurrentPage  ] = useState(1)

  useEffect(() => {
    setTotalPage(Math.ceil(data.length / displayNumber))
  }, [])

  // ページの始まり
  const startPage = (currentPage - 1) * displayNumber
  // ページの終わり
  const endPage = currentPage * displayNumber

  const {age, gender} = useStoryContext()
  console.log(gender)

  
  const displayData = (!age && !gender) 
  ? data // 両方未選択の場合は全データを表示
  : data.filter((item: any) => 
      (!age || item.age === age) && // age が未選択の場合は無条件通過
      (!gender || item.gender === gender) // gender が未選択の場合は無条件通過
    );

  // const displayData = data.filter(((item: any) => item.age === age && item.gender === gender) )

  return (
    <div className="storyItems">
      {/* 表示するデータ */}
      {displayData ? displayData.slice(startPage, endPage).map((item: any, i: number) => (
        <StoryAccordion key={i} data={item} /> 
      )) : <p>条件に合う投稿はありません</p>
      }
      
      {/* ページネーション */}
      <Pagination
      totalPage={totalPage}
      currentPage={currentPage}
      onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};