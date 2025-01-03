"use client";

import "./sidebar.scss";

import { Search } from "../components/search/Search";
import { allDataArrayType } from "@/app/types/story";

export const Sidebar = ({ fetchData }: { fetchData: allDataArrayType }) => {


  return (
    <div className="sidebar">
      <div className="sidebar_contents">
        <Search 
        fetchData={fetchData}
        />
      </div>
    </div>
  );
};
