import React from 'react'
import { Search } from '../../../components/search/Search'
import { useStoryContext } from '@/app/story/StoreContext'

import './searchModal.scss'

export const ModalSearch = () => {
  
  const {isSearchModalOpen, setIsSearchModalOpen} = useStoryContext()

  return (
    <div 
    className={`modal_search ${isSearchModalOpen ? 'isOpen' : ''}`}>
      <div 
      className={`mask ${isSearchModalOpen ? 'isOpen' : ''}`}
      // onClick={handleModalClose}
      ></div>
      <div className="search_modal_body">
        <div className="input_modal_window">
      <Search />
          <div className="input_modal_closeBtn" 
          // onClick={handleModalClose}
          >
            ×
          </div>

        <div 
        className="search_modal_deision_btn"
        onClick={() => setIsSearchModalOpen(false)}
        >
          決定
        </div>
        </div>
      </div>
    </div>
    
  )
}
