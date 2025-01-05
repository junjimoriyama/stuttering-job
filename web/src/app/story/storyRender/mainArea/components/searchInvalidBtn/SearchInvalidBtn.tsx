'use client'

// react
import { useStoryContext } from '@/app/story/StoreContext';
import { useState } from 'react';
// style
import './searchInvalidBtn.scss'

export const SearchInvalidBtn = (
) => {

// 選択された値
const { setCurrentPage } = useStoryContext();

  const {
    age,
    gender,
    industry,
    setAge, 
    setGender, 
    setIndustry,
  } = useStoryContext();

  // クリックしたボタン効果の状態
  const [ isClicked, setIsClicked  ] = useState(false)

  // sessionで無効化するデータ
  const updatedInValidStorageData = {
    age: [],
    gender: [],
    industry: [],
  }
  
  // 絞り込みを全てリセット
  const handleResetFilters = () => {
    // 絞り込みリセット
    setAge([])
    setGender([])
    setIndustry([])
    // 現在のページを１へ
    setCurrentPage(1)
    // ボタン効果をオン
    setIsClicked(true)

    sessionStorage.setItem("stutter_job_searchFilters", JSON.stringify(updatedInValidStorageData))
    // setIsAllClose(true); 
    // setTimeout(() => {
    //     setIsAllClose(false); 
    //   }, 0); 
    // setIsSearchModalOpen(false)
  }
  
  // アニメーション終了したらボタン効果の状態false
  const handleBtnAnimationEnd = () => {
    setIsClicked(false)
    }

  return (
    <button 
    className={`search_invalid_btn ${isClicked ? "isClicked" : ""}`}
    onClick={handleResetFilters}
    onAnimationEnd={handleBtnAnimationEnd}
    >
      全てクリア
    </button>
  )
}
