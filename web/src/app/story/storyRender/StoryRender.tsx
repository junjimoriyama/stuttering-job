"use client";

import React, { useState } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { MainArea } from "./mainArea/MainArea";

import './storyRender.scss'
import { StoryProvider, useStoryContext } from "../StoreContext";
import Footer from "@/components/layout/footer/Footer";
import { allDataArrayType } from "@/types/story";
import { SearchModal } from "./components/search/searchModal/SearchModal";
import Header from "@/components/layout/header/Header";


export const StoryRender = ({ fetchData }: { fetchData: allDataArrayType }) => {

  return (
    <StoryProvider>
      <div className="story_render">
        <Header/>
        <SearchModal fetchData={fetchData}/>
        <Sidebar fetchData={fetchData}/>
        <MainArea fetchData={fetchData} />
      </div>
        <Footer />
    </StoryProvider>
    
  );
};