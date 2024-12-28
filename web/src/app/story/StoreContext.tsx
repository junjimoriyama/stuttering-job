"use client";

import React, { createContext, useContext, useState } from "react";

const storyContext = createContext<{
  age: number[];
  setAge: React.Dispatch<React.SetStateAction<number[]>>;
  // age: number;
  // setAge: (value: number) => void;
  gender: string[];
  setGender: React.Dispatch<React.SetStateAction<string[]>>
  // gender: string;
  // setGender: (value: string) => void;
  industry: string[];
  setIndustry: React.Dispatch<React.SetStateAction<string[]>>
  // industry: string;
  // setIndustry: (value: string) => void;
  isSearchModalOpen: boolean, 
  setIsSearchModalOpen: (value: boolean) => void;
  isAllClose: boolean;
  setIsAllClose: (value: boolean) => void;
}>({
  age: [],
  setAge: () => [],
  // age: 0,
  // setAge: () => {},
  gender: [],
  setGender: () => {},
  industry: [],
  setIndustry:() => {},
  isSearchModalOpen: false, 
  setIsSearchModalOpen: () => {},
  isAllClose: false,
  setIsAllClose: () => {},
});

export const StoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [age, setAge] = useState<number[]>([]);
  // const [age, setAge] = useState(0);
  const [gender, setGender] = useState<string[]>([]);
  // const [gender, setGender] = useState("");
  const [industry, setIndustry] = useState<string[]>([]);
  // const [industry, setIndustry] = useState("");
  const [isAllClose, setIsAllClose] = useState(false);

  // モーダル
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <storyContext.Provider
      value={{
        age,
        setAge,
        gender,
        setGender,
        industry,
        setIndustry,
        isSearchModalOpen, 
        setIsSearchModalOpen,
        isAllClose,
        setIsAllClose,
      }}
    >
      {children}
    </storyContext.Provider>
  );
};

export const useStoryContext = () => useContext(storyContext);

// 'use client';

// import React, { createContext, useContext, useState } from 'react';

// const StoryContext = createContext<{
//   age: string;
//   setAge: (value: string) => void;
// }>({
//   age: '',
//   setAge: () => {},
// });

// export const StoryProvider = ({ children }: { children: React.ReactNode }) => {
//   const [age, setAge] = useState('');

//   return (
//     <StoryContext.Provider value={{ age, setAge }}>
//       {children}
//     </StoryContext.Provider>
//   );
// };

// export const useStoryContext = () => useContext(StoryContext);
