// react
import React from "react"; 
// type
import { allDataArrayType } from "@/app/types/story";
// functions
import { useStoryContext } from "@/app/story/StoreContext";
// components
import { AgeSearch } from "./conditions/age/AgeSearch";
import { GenderSearch } from "./conditions/gender/GenderSearch";
import { IndustrySearch } from "./conditions/industry/IndustrySearch";
import { SearchInvalidBtn } from "../../mainArea/components/searchInvalidBtn/SearchInvalidBtn";
// style
import "./search.scss";

export const Search = ({ fetchData }: { fetchData: allDataArrayType }) => {
  const { displayData } = useStoryContext();
  return (
    <div className="search">
      <div className="search_heading">絞り込み</div>
      <div className="search_hit_count">
        <span className="search_hit_count_text">
        表示件数 
        </span>
        <span className="search_hit_count_value">
          {displayData?.length || 0} / {fetchData?.length || 0}
        </span>
      </div>
      <SearchInvalidBtn />
      <ul className="search_list">
        <AgeSearch />
        <GenderSearch />
        <IndustrySearch />
      </ul>
    </div>
  );
};
