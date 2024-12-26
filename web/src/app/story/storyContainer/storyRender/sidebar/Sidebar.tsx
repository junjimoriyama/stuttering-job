"use client";

import { useStoryContext } from "@/app/story/StoreContext";
// import { useStoryContext } from "../Store.provider";
import "./sidebar.scss";

import React, { useState } from "react";
import { AgeSearch } from "../components/search/conditions/age/AgeSearch";
import { GenderSearch } from "../components/search/conditions/gender/GenderSearch";
import { SearchInvalidBtn } from "../mainArea/components/searchInvalidBtn/SearchInvalidBtn";
import { Search } from "../components/search/Search";

export const Sidebar = () => {


  return (
    <div className="sidebar">
      <div className="sidebar_contents">
        <Search />
        {/* <div className="search">
          <ul>
            <AgeSearch age={age} setAge={setAge} />
            <GenderSearch gender={gender} setGender={setGender} />
          </ul>
          <SearchInvalidBtn
          age={age} setAge={setAge} 
          gender={gender} setGender={setGender}
          />
        </div> */}
      </div>
    </div>
  );
};
