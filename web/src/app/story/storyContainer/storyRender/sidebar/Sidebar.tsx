"use client";

import { useStoryContext } from "@/app/story/StoreContext";
// import { useStoryContext } from "../Store.provider";
import "./sidebar.scss";

import React, { useState } from "react";
import { AgeSearch } from "./age/AgeSearch";
import { GenderSearch } from "./gender/genderSearch";

export const Sidebar = ({ data }: { data: any }) => {
  const { 
    age, 
    setAge, 
    gender, 
    setGender 
  } = useStoryContext();


  return (
    <div className="sidebar">
      <div className="sidebar_contents">
        {/* <Pagination /> */}
        <div className="search">
          <ul>
            <AgeSearch age={age} setAge={setAge} />
            <GenderSearch gender={gender} setGender={setGender} />
          </ul>
        </div>
      </div>
    </div>
  );
};
