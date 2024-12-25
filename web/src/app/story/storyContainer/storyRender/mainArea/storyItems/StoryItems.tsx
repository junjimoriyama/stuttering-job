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

   // 選択された値
   const {age, gender} = useStoryContext()
   
  const displayData = (!age && !gender) 
  ? data // 全て未選択の場合は全データを表示
  : data.filter((item: any) => 
      (!age || item.age === age) &&
      (!gender || item.gender === gender)
    );

    console.log(displayData.length)


  // データの量
  const displayNumber = 2

  // 合計のページ数
  const [ totalPage, setTotalPage  ] = useState<number | null>(null)

  // 現在のページ
  const [ currentPage, setCurrentPage  ] = useState(1)

  useEffect(() => {
    setTotalPage(Math.ceil(displayData.length / displayNumber))
  }, [displayData])

  // ページの始まり
  const startPage = (currentPage - 1) * displayNumber
  // ページの終わり
  const endPage = currentPage * displayNumber

 
  

  // const displayData = data.filter(((item: any) => item.age === age && item.gender === gender) )

  return (
    <div className="storyItems">
    {/* 表示するデータ */}
    {displayData && displayData.length > 0 ? (
      <>
        {displayData.slice(startPage, endPage).map((item: any, i: number) => (
          <StoryAccordion key={i} data={item} /> 
        ))}
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </>
    ) : (
      <p>条件に合う投稿はありません</p>
    )}
  </div>
  );
};