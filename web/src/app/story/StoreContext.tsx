"use client";

// react
import { createContext, useContext, useEffect, useState } from "react";
// type
import { allDataType } from "../../types/story";

// story内で共有の状態
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
  currentPage: number
  setCurrentPage: (value: number) => void,
  displayData: allDataType[],
  setDisplayData:  React.Dispatch<React.SetStateAction<allDataType[]>>
  isPageFilterEffect:  boolean,
  setIsPageFilterEffect: (value: boolean) => void,

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
  currentPage: 1,
  setCurrentPage: () => {},
  displayData: [],
  setDisplayData: () => {},
  isPageFilterEffect: false,
  setIsPageFilterEffect:  () => {},
});

export const StoryProvider = ({ children }: { children: React.ReactNode }) => {
  // 絞り込み要件
  const [age, setAge] = useState<number[]>([]);
  const [gender, setGender] = useState<string[]>([]);
  const [industry, setIndustry] = useState<string[]>([]);
  // 絞り込み開閉
  const [isAllClose, setIsAllClose] = useState(true);
  // モーダル開閉
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  // 現在のページ
  const [currentPage, setCurrentPage] = useState(1);
  // 表示するデータ
  const [ displayData, setDisplayData  ] = useState<allDataType[]>([])
  // ページ変更による効果
  const [ isPageFilterEffect, setIsPageFilterEffect  ] = useState(false)

  // セッションに保存(一覧画面から別ページへ遷移後も絞り込み状態の維持)
  useEffect(() => {
    const savedFilters = JSON.parse(sessionStorage.getItem("stutter_job_searchFilters") || "{}");
    setAge(savedFilters.age || []);
    setGender(savedFilters.gender || []);
    setIndustry(savedFilters.industry || []);
    setCurrentPage(savedFilters.currentPage || 1);
  }, [])

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
        currentPage,
        setCurrentPage,
        displayData,
        setDisplayData,
        isPageFilterEffect,
        setIsPageFilterEffect
      }}
    >
      {children}
    </storyContext.Provider>
  );
};

// useStoryContextとして
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

 // isAllAccordionOpen: boolean;
  // setIsAllAccordionOpen: (value: boolean) => void;
  // isAccordionOpenArray: boolean[];
  // setIsAccordionOpenArray: React.Dispatch<React.SetStateAction<boolean[]>>;

    // isAllAccordionOpen: true,
  // setIsAllAccordionOpen: () => {},
  // isAccordionOpenArray: [],
  // setIsAccordionOpenArray: () => {},

// export const useStoryContext = () => useContext(StoryContext);

// const [isAccordionOpenArray, setIsAccordionOpenArray] = useState<boolean[]>([]);

// アコーディン開閉
// const [isAllAccordionOpen, setIsAllAccordionOpen] = useState(true);

  // const [age, setAge] = useState<number[]>([]);
  // const [gender, setGender] = useState<string[]>([]);
  // const [industry, setIndustry] = useState<string[]>([]);