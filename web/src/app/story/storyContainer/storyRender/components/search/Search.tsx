import { useStoryContext } from "@/app/story/StoreContext";
import React from "react";
import { AgeSearch } from "./conditions/age/AgeSearch";
import { GenderSearch } from "./conditions/gender/GenderSearch";
import { SearchInvalidBtn } from "../../mainArea/components/searchInvalidBtn/SearchInvalidBtn";

import "./search.scss"
import { IndustrySearch } from "./conditions/industry/IndustrySearch";

export const Search = () => {
  return (
    <div className="search">
      <div className="search_heading">
        絞り込み
      </div>
      <SearchInvalidBtn />
      <ul className="search_list">
        <AgeSearch/>
        <GenderSearch />
        <IndustrySearch />
      </ul>
    </div>
  );
};
