// react
import React from "react"; 
// components
import { AgeSearch } from "./conditions/age/AgeSearch";
import { GenderSearch } from "./conditions/gender/GenderSearch";
import { IndustrySearch } from "./conditions/industry/IndustrySearch";
// style
import "./search.scss";
import { FilterIcon } from "@/assets/svg/icon/filter";
import { SearchCount } from "./searchCount/SearchCount";
import { SearchInvalidBtn } from "../../storyRender/mainArea/components/searchInvalidBtn/SearchInvalidBtn";

export const Search = () => {

  return (
    <div className="search">
      <div className="search_heading">
        絞り込み
      <FilterIcon />
      </div>
      {/* 絞り込み件数上部 */}
      <SearchCount 
      className=""
      />
      
      <ul className="search_list">
        <AgeSearch />
        <GenderSearch />
        <IndustrySearch />
      </ul>
      <SearchInvalidBtn />

    {/* 絞り込み件数下部 */}
      <SearchCount 
      className=""
      />
    </div>
  );
};
