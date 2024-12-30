'use client'

// react
import { useStoryContext } from '@/app/story/StoreContext';
// style
import './searchInvalidBtn.scss'

export const SearchInvalidBtn = (
) => {

// 選択された値
const { setCurrentPage } = useStoryContext();

  const { 
    setAge, 
    setGender, 
    setIndustry,
    isAllClose, 
    setIsAllClose,
    isSearchModalOpen, 
    setIsSearchModalOpen
  } = useStoryContext();

  
  // 絞り込みを全てリセット
  const handleResetFilters = () => {
    setAge([])
    setGender([])
    setIndustry([])
    setIsAllClose(true); 
    setTimeout(() => {
        setIsAllClose(false); 
      }, 0); 
    setIsSearchModalOpen(false)
    setCurrentPage(1)
    }

  return (
    <button 
    className="search_invalid_btn"
    onClick={handleResetFilters}
    >
      全てクリア
    </button>
  )
}
