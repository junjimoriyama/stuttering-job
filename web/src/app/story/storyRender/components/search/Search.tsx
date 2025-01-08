// react
import React from "react"; 
// type
import { allDataArrayType } from "@/types/story";
// functions
import { useStoryContext } from "@/app/story/StoreContext";
// components
import { AgeSearch } from "./conditions/age/AgeSearch";
import { GenderSearch } from "./conditions/gender/GenderSearch";
import { IndustrySearch } from "./conditions/industry/IndustrySearch";
import { SearchInvalidBtn } from "../../mainArea/components/searchInvalidBtn/SearchInvalidBtn";
// style
import "./search.scss";
import { FilterIcon } from "@/assets/svg/icon/filter";

export const Search = ({ fetchData }: { fetchData: allDataArrayType }) => {

  // useContextの状態
  const { displayData } = useStoryContext();
  
  return (
    <div className="search">
      <div className="search_heading">
        絞り込み
      <FilterIcon />
      </div>
      <div className="search_hit_count">
        <div className="search_hit_count_heading">
          件数
        </div>
        <div className="search_hit_count_text">
        <span className="search_hit_count_label">
        全件数  
        </span>
        <span className="search_hit_count_value">
        {fetchData?.length || 0}
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
      <ul className="search_list">
        <AgeSearch />
        <GenderSearch />
        <IndustrySearch />
      </ul>
      <SearchInvalidBtn />

      <div className="search_hit_count search_hit_count_bottom">
        <div className="search_hit_count_heading">
          件数
        </div>
        <div className="search_hit_count_text">
        <span className="search_hit_count_label">
        全件数  
        </span>
        <span className="search_hit_count_value">
        {fetchData?.length || 0}
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
    </div>
  );
};
