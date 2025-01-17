"use client";

// react
import { createContext, useContext, useEffect, useState } from "react";
// type
import { allDataType } from "../../types/story";
const storyContext = createContext<{
  // データ管理
  originalData: allDataType[]; // 元のデータ
  displayData: allDataType[];  // 表示データ
  setDisplayData: React.Dispatch<React.SetStateAction<allDataType[]>>; // 表示データのセット関数

  // 絞り込み条件
  age: number[];
  setAge: React.Dispatch<React.SetStateAction<number[]>>;
  gender: string[];
  setGender: React.Dispatch<React.SetStateAction<string[]>>;
  industry: string[];
  setIndustry: React.Dispatch<React.SetStateAction<string[]>>;

  // モーダルやUI状態
  isSearchModalOpen: boolean; // モーダル開閉状態
  setIsSearchModalOpen: (value: boolean) => void;
  isAllClose: boolean; // 絞り込み全閉状態
  setIsAllClose: (value: boolean) => void;

  // ページネーション管理
  storiesPerPage: number; // 1ページあたりの表示件数
  currentPage: number; // 現在のページ
  setCurrentPage: (value: number) => void;

  // アニメーション効果
  isPageFilterEffect: boolean; // ページ切り替えのエフェクト状態
  setIsPageFilterEffect: (value: boolean) => void;
}>({
  // データ管理
  originalData: [],
  displayData: [],
  setDisplayData: () => {},

  // 絞り込み条件
  age: [],
  setAge: () => [],
  gender: [],
  setGender: () => {},
  industry: [],
  setIndustry: () => {},

  // モーダルやUI状態
  isSearchModalOpen: false,
  setIsSearchModalOpen: () => {},
  isAllClose: false,
  setIsAllClose: () => {},

  // ページネーション管理
  storiesPerPage: 0,
  currentPage: 1,
  setCurrentPage: () => {},

  // アニメーション効果
  isPageFilterEffect: false,
  setIsPageFilterEffect: () => {},
});


export const StoryProvider = ({ children, fetchData }: { children: React.ReactNode, fetchData: allDataType[] }) => {
  // 元データ（変更されない）
  const [originalData] = useState<allDataType[]>(fetchData);

  // 表示データ（フィルター後の結果）
  const [displayData, setDisplayData] = useState<allDataType[]>(fetchData);

  // 絞り込み条件
  const [age, setAge] = useState<number[]>([]);
  const [gender, setGender] = useState<string[]>([]);
  const [industry, setIndustry] = useState<string[]>([]);

  // 絞り込みモーダルの状態
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isAllClose, setIsAllClose] = useState(true); // 開閉状態

  // ページネーション関連
  const [storiesPerPage, setStoriesPerPage] = useState(2); // 1ページあたりの件数
  const [currentPage, setCurrentPage] = useState(1); // 現在のページ
  const [isPageFilterEffect, setIsPageFilterEffect] = useState(false); // ページ変更によるアニメーション

  // セッションに保存（フィルター状態の維持）
  useEffect(() => {
    const savedFilters = JSON.parse(sessionStorage.getItem("stutter_job_searchFilters") || "{}");
    setAge(savedFilters.age || []);
    setGender(savedFilters.gender || []);
    setIndustry(savedFilters.industry || []);
    setCurrentPage(savedFilters.currentPage || 1);
  }, []);

  return (
    <storyContext.Provider
      value={{
        originalData, // 元のデータ
        displayData, // 表示データ
        setDisplayData, // 表示データのセット関数
        age,
        setAge,
        gender,
        setGender,
        industry,
        setIndustry,
        isSearchModalOpen, // モーダル開閉状態
        setIsSearchModalOpen,
        isAllClose, // 絞り込み全閉状態
        setIsAllClose,
        storiesPerPage, // 1ページあたりの表示件数
        currentPage, // 現在のページ
        setCurrentPage,
        isPageFilterEffect, // ページ切り替えのアニメーション
        setIsPageFilterEffect,
      }}
    >
      {children}
    </storyContext.Provider>
  );
};


// useStoryContextとして
export const useStoryContext = () => useContext(storyContext);

// "use client";

// // react
// import { createContext, useContext, useEffect, useState } from "react";
// // type
// import { allDataType } from "../../types/story";

// // story内で共有の状態
// const storyContext = createContext<{
//   age: number[];
//   setAge: React.Dispatch<React.SetStateAction<number[]>>;
//   gender: string[];
//   setGender: React.Dispatch<React.SetStateAction<string[]>>;
//   industry: string[];
//   setIndustry: React.Dispatch<React.SetStateAction<string[]>>;
//   isSearchModalOpen: boolean;
//   setIsSearchModalOpen: (value: boolean) => void;
//   isAllClose: boolean;
//   setIsAllClose: (value: boolean) => void;
//   displayData: allDataType[],
//   setDisplayData:  React.Dispatch<React.SetStateAction<allDataType[]>>
//   storiesPerPage: number,
//   currentPage: number
//   setCurrentPage: (value: number) => void,
//   isPageFilterEffect:  boolean,
//   setIsPageFilterEffect: (value: boolean) => void,

// }>({
//   age: [],
//   setAge: () => [],
//   gender: [],
//   setGender: () => {},
//   industry: [],
//   setIndustry: () => {},
//   isSearchModalOpen: false,
//   setIsSearchModalOpen: () => {},
//   isAllClose: false,
//   setIsAllClose: () => {},
//   displayData: [],
//   setDisplayData: () => {},
//   storiesPerPage: 0,
//   currentPage: 1,
//   setCurrentPage: () => {},
//   isPageFilterEffect: false,
//   setIsPageFilterEffect:  () => {},
// });

// export const StoryProvider = ({ children }: { children: React.ReactNode }) => {
//   // 絞り込み要件
//   const [age, setAge] = useState<number[]>([]);
//   const [gender, setGender] = useState<string[]>([]);
//   const [industry, setIndustry] = useState<string[]>([]);
//   // 絞り込み開閉
//   const [isAllClose, setIsAllClose] = useState(true);
//   // モーダル開閉
//   const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
//   // 表示するデータ
//   const [ displayData, setDisplayData  ] = useState<allDataType[]>([])
//   // 表示件数
//   // const [currentStories, setCurrentStories] = useState(2);
//   // 表示件数
//   const [storiesPerPage, setStoriesPerPage] = useState(2);
//   // 現在のページ
//   const [currentPage, setCurrentPage] = useState(1);
//   // ページ変更による効果
//   const [ isPageFilterEffect, setIsPageFilterEffect  ] = useState(false)

//   // セッションに保存(一覧画面から別ページへ遷移後も絞り込み状態の維持)
//   useEffect(() => {
//     const savedFilters = JSON.parse(sessionStorage.getItem("stutter_job_searchFilters") || "{}");
//     setAge(savedFilters.age || []);
//     setGender(savedFilters.gender || []);
//     setIndustry(savedFilters.industry || []);
//     setCurrentPage(savedFilters.currentPage || 1);
//   }, [])

//   return (
//     <storyContext.Provider
//       value={{
//         age,
//         setAge,
//         gender,
//         setGender,
//         industry,
//         setIndustry,
//         isSearchModalOpen,
//         setIsSearchModalOpen,
//         isAllClose,
//         setIsAllClose,
//         storiesPerPage,
//         displayData,
//         // currentStories,
//         setDisplayData,
//         currentPage,
//         setCurrentPage,
//         isPageFilterEffect,
//         setIsPageFilterEffect
//       }}
//     >
//       {children}
//     </storyContext.Provider>
//   );
// };

// // useStoryContextとして
// export const useStoryContext = () => useContext(storyContext);


