// style
import { useStoryContext } from "@/app/story/StoreContext";
import "./searchCount.scss"

export const SearchCount = ({className}: {className: string}) => {

  // useContext
    const {
      // データ管理
      originalData,
      displayData,
    } = useStoryContext();

  return (
      <div className={`search_hit_count ${className || ""}`}>
        <div className="search_hit_count_heading">
        件数
        </div>
        <div className="search_hit_count_text">
        <span className="search_hit_count_label">
        全件数  
        </span>
        <span className="search_hit_count_value">
        {originalData?.length || 0}
        </span>
        </div>
        <div className="search_hit_count_text">
        <span className="search_hit_count_label">
        絞込数  
        </span>
        <span className="search_hit_count_value">
        {displayData?.length || 0}
        </span>
        </div>
      </div>
  )
}
