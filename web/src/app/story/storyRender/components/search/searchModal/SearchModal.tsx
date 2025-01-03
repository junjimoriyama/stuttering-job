"use client"

import React, { useEffect } from 'react'
import { Search } from '../Search'
import { useStoryContext } from '@/app/story/StoreContext'

import './searchModal.scss'

export const SearchModal = ({ fetchData }: { fetchData: any}) => {
  
  const { 
    setAge, 
    setGender, 
    setIndustry,
    isAllClose, 
    setIsAllClose,
    isSearchModalOpen, 
    setIsSearchModalOpen
  } = useStoryContext();

  const handleClickClose = () => {
    setAge([])
    setGender([])
    setIndustry([])
    setIsAllClose(true); 
    setTimeout(() => {
        setIsAllClose(false); // 状態をリセット
      }, 0); 
    setIsSearchModalOpen(false)
    // 背景固定解除
    document.body.style.overflow = "";
    }

    const handleClickDecision = () => {
      setIsSearchModalOpen(false)
      // 背景固定解除
    document.body.style.overflow = "";
    }


  return (
    
    <div 
    className={`modal_search ${isSearchModalOpen ? 'isOpen' : ''}`}>
    <div 
    className={`search_modal_mask ${isSearchModalOpen ? 'isOpen' : ''}`}
    onClick={handleClickClose}
    ></div>
      <div className="search_modal_body">
        <div className="search_modal_window">
      <Search fetchData={fetchData}/>
          <div 
          className="search_modal_closeBtn" 
          onClick={handleClickClose}
          >
            ×
          </div>

        <div 
        className="search_modal_decision_btn"
        onClick={handleClickDecision}
        >
          決定
        </div>
        </div>
      </div>
    </div>
    
  )
}
