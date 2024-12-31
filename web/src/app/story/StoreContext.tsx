"use client";

import React, { createContext, useContext, useState } from "react";

const storyContext = createContext<{
  age: number[];
  setAge: React.Dispatch<React.SetStateAction<number[]>>;
  gender: string[];
  setGender: React.Dispatch<React.SetStateAction<string[]>>;
  industry: string[];
  setIndustry: React.Dispatch<React.SetStateAction<string[]>>;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (value: boolean) => void;
  isAllClose: boolean;
  setIsAllClose: (value: boolean) => void;
  isAllAccordionOpen: boolean;
  setIsAllAccordionOpen: (value: boolean) => void;
  isAccordionOpenArray: boolean[];
  setIsAccordionOpenArray: React.Dispatch<React.SetStateAction<boolean[]>>;
  currentPage: number
  setCurrentPage: (value: number) => void,


}>({
  age: [],
  setAge: () => [],
  gender: [],
  setGender: () => {},
  industry: [],
  setIndustry: () => {},
  isSearchModalOpen: false,
  setIsSearchModalOpen: () => {},
  isAllClose: false,
  setIsAllClose: () => {},
  isAllAccordionOpen: true,
  setIsAllAccordionOpen: () => {},
  isAccordionOpenArray: [],
  setIsAccordionOpenArray: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
});

export const StoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [age, setAge] = useState<number[]>([]);
  const [gender, setGender] = useState<string[]>([]);
  const [industry, setIndustry] = useState<string[]>([]);
  const [isAllClose, setIsAllClose] = useState(false);

  const [isAccordionOpenArray, setIsAccordionOpenArray] = useState<boolean[]>([]);

  // アコーディン開閉
  const [isAllAccordionOpen, setIsAllAccordionOpen] = useState(true);

  // モーダル開閉
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // 現在のページ
  const [currentPage, setCurrentPage] = useState(1);

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
        isAllAccordionOpen,
        setIsAllAccordionOpen,
        isAccordionOpenArray,
        setIsAccordionOpenArray,
        currentPage,
        setCurrentPage
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
