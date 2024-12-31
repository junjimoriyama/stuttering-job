"use client";

import React, { useState } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { MainArea } from "./mainArea/MainArea";

import './storyRender.scss'
import { StoryProvider, useStoryContext } from "../../StoreContext";
import Footer from "@/app/components/footer/Footer";


const StoreRender = ({ data }: { data: any }) => {

  // const [clientData, setClientData] = useState(data);

  return (
    <StoryProvider>
      <div className="story_render">
        <Sidebar />
        <MainArea data={data} />
      </div>
    </StoryProvider>
    
  );
};

export default StoreRender;
