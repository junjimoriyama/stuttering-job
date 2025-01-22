"use client";

// type
import { allDataArrayType } from "@/types/story";
// components
// style
import "./sidebar.scss";
import { Search } from "../../components/search/Search";

export const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar_contents">
        <Search />
      </div>
    </div>
  );
};
