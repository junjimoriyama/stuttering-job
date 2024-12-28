import React from 'react'
import { Search } from '../Search'
import { useStoryContext } from '@/app/story/StoreContext'

import './searchModal.scss'

export const SearchModal = () => {
  
  const { 
    setAge, 
    setGender, 
    setIndustry,
    isAllClose, 
    setIsAllClose,
    isSearchModalOpen, 
    setIsSearchModalOpen
  } = useStoryContext();

  const handleClickCloseBtn = () => {
    setAge([])
    setGender([])
    setIndustry([])
    setIsAllClose(true); 
    setTimeout(() => {
        setIsAllClose(false); // 状態をリセット
      }, 0); 
    setIsSearchModalOpen(false)
    }

  return (
    <div 
    className={`modal_search ${isSearchModalOpen ? 'isOpen' : ''}`}>
      <div 
      className={`mask ${isSearchModalOpen ? 'isOpen' : ''}`}
      // onClick={handleModalClose}
      ></div>
      <div className="search_modal_body">
        <div className="search_modal_window">
      <Search />
          <div 
          className="search_modal_closeBtn" 
          onClick={handleClickCloseBtn}
          >
            ×
          </div>

        <div 
        className="search_modal_decision_btn"
        onClick={() => setIsSearchModalOpen(false)}
        >
          決定
        </div>
        </div>
      </div>
    </div>
    
  )
}
