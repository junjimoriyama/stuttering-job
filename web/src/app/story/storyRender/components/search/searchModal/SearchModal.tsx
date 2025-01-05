
// react
import { useStoryContext } from '@/app/story/StoreContext'
// components
import { Search } from '../Search'
// style
import './searchModal.scss'

export const SearchModal = ({ fetchData }: { fetchData: any}) => {
  
  // useContext管理の状態
  const { 
    setAge, 
    setGender, 
    setIndustry,
    isSearchModalOpen, 
    setIsSearchModalOpen
  } = useStoryContext();

  // モーダル閉じるボタンクリック
  const handleClickCloseBtn = () => {
    // 選択の無効化
    setAge([])
    setGender([])
    setIndustry([])
   
    // setIsAllClose(true); 
    // setTimeout(() => {
    //     setIsAllClose(false);
    //   }, 0); 

    // モーダル閉じる
    setIsSearchModalOpen(false)
    // 背景固定解除
    document.body.style.overflow = "";
    }

    // 選択決定ボタンクリック
    const handleClickDecisionBtn = () => {
      setIsSearchModalOpen(false)
      // 背景固定解除
    document.body.style.overflow = "";
    }


  return (
    <div 
    className={`modal_search ${isSearchModalOpen ? 'isOpen' : ''}`}>
    <div 
    className={`search_modal_mask ${isSearchModalOpen ? 'isOpen' : ''}`}
    onClick={handleClickCloseBtn}
    ></div>
      <div className="search_modal_body">
        <div className="search_modal_window">
      <Search fetchData={fetchData}/>
          <div 
          className="search_modal_closeBtn" 
          onClick={handleClickCloseBtn}
          >
            ×
          </div>

        <div 
        className="search_modal_decision_btn"
        onClick={handleClickDecisionBtn}
        >
          決定
        </div>
        </div>
      </div>
    </div>
    
  )
}
