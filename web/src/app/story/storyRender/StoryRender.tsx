"use client";

// react
import { StoryProvider } from "../StoreContext";
// type
import { allDataArrayType } from "@/types/story";
// components
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { MainArea } from "./mainArea/MainArea";
import { Sidebar } from "./sidebar/Sidebar";
import { SearchModal } from "../components/search/searchModal/SearchModal";
// style
import './storyRender.scss'


export const StoryRender = ({ fetchData }: { fetchData: allDataArrayType }) => {

  return (
    // story内で特定のpropsを共有する
    <StoryProvider fetchData={fetchData}>
      <div className="story_render">
        <Header />
        <SearchModal />
        <Sidebar />
        <MainArea />
      </div>
        <Footer />
    </StoryProvider>
  );
};