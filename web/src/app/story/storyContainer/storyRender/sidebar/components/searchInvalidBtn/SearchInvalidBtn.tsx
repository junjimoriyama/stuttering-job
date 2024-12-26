'use client'

import { useStoryContext } from '@/app/story/StoreContext';
import './searchInvalidBtn.scss'
import { useEffect } from 'react';

export const SearchInvalidBtn = (
) => {
  const { 
    setAge, 
    setGender, 
    setIndustry,
    isAllClose, 
    setIsAllClose,
    isSearchModalOpen, 
    setIsSearchModalOpen
  } = useStoryContext();

  
  const handleClickSearchInvalidBtn = () => {
    console.log('click')
    setAge(0)
    setGender('')
    setIndustry('')
    setIsAllClose(true); 
    setTimeout(() => {
        setIsAllClose(false); // 状態をリセット
      }, 0); 
    setIsSearchModalOpen(false)
    }
    useEffect(() => {
      console.log(isAllClose)
    }, [isAllClose])

  return (
    <button 
    className="search_invalid_btn"
    onClick={handleClickSearchInvalidBtn}
    >
      全てクリア
    </button>
  )
}
