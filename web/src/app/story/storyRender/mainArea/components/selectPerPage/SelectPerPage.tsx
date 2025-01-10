import { useStoryContext } from '@/app/story/StoreContext';
import "./selectPerPage.scss"

export const SelectPerPage = () => {

   const { 
      displayData,
      setDisplayData,
      currentPage, 
      setIsPageFilterEffect, } =
      useStoryContext();
  return (
    <div className="selectPerPageWrapper">
    <label htmlFor="perPageSelect" className="selectLabel">
      表示件数：
    </label>
    <div className="customSelectWrapper">
      <select name="perPageSelect" id="perPageSelect" className="customSelect">
        <option value="5">5件</option>
        <option value="10">10件</option>
        <option value="20">20件</option>
        <option value="50">50件</option>
        <option value="100">100件</option>
      </select>
    </div>
  </div>
  )
}
