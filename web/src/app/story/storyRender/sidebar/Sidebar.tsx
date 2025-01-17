"use client";

// type
import { allDataArrayType } from "@/types/story";
// components
import { Search } from "../components/search/Search";
// style
import "./sidebar.scss";

export const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar_contents">
        <Search />
      </div>
    </div>
  );
};
