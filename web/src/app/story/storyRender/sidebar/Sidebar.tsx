"use client";

// type
import { allDataArrayType } from "@/app/types/story";
// components
import { Search } from "../components/search/Search";
// style
import "./sidebar.scss";

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
