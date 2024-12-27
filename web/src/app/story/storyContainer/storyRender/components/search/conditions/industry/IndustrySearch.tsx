import { useStoryContext } from '@/app/story/StoreContext';
import React, { useEffect, useRef, useState } from 'react'

export const IndustrySearch = () => {

   // useContext管理の状態
    const { industry, setIndustry, isAllClose} = useStoryContext()
    // アコーディン開閉
    const [isOpen, setIsOpen] = useState(false);
     // 選択されている場所
    const [activeIndex, setActiveIndex] = useState(0);
    // アコーディオンの高さ
    const [maxHeight, setMaxHeight] = useState<number | undefined>(0);
    // 現在のラベル表示
      const [ currentLabel, setCurrentLabel  ] = useState<string | null>(null)

    // 配列のリスト
    const industrySearchList = [
      "製造業",
      "農林水産漁業",
      "金融保険業",
      "物流、運送",
      "広告、マスコミ",
      "建築",
      "IT、ソフトウェア",
      "不動産業",
      "サービス業",
      "エンターテインメント業",
      "エネルギー、資源業",
      "研究開発業",
      "医療",
      "福祉",
      "教育、学習支援業",
      // "公務(他に分類されないもの)",
      "その他",
    ];
    
  
    const searchItemIndustryListRef = useRef<HTMLDivElement>(null);

    const handleSearchItemClick = () => {
      // モーダル開閉
      setIsOpen(!isOpen)
       // リストの高さ取得
      setMaxHeight(searchItemIndustryListRef.current?.scrollHeight)
    }

    const handleIndustryClick = (item: string, value: number) => {
      // 絞り込み
      setIndustry(item)
      // 選択した場所に色つける
      setActiveIndex(value)
    }

    useEffect(() => {
      if(isAllClose) {
        setIsOpen(false)
        setActiveIndex(0)
        setCurrentLabel(null)
      }
    }, [isAllClose])
  
  return (
    <li
      className="search_item"
    >
      <div className="search_item_label" onClick={handleSearchItemClick}>
        業種
        {currentLabel &&
        <span 
        className="search_item_current_label">{currentLabel}</span>
        }
        <div className={`search_plus_btn ${isOpen ? "isOpen" : ""}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className="search_item_list search_item_industry_list"
        ref={searchItemIndustryListRef}
        style={{ maxHeight: isOpen ? `${maxHeight}px` : "0px" }}
      >
        {industrySearchList.map((item, i) => {
          const value = (i + 1)
          return (
          <span
          className={`search_item_option ${
            activeIndex === value ? "isActive" : ""
          }`}
          key={value}
          onClick={() =>{ 
            handleIndustryClick(item, value)
            setCurrentLabel(item)
          }}
          >
            {item}
          </span>
          )
        })}
        <span
          className={`search_item_option ${
            activeIndex === 0 ? "isActive" : ""
          }`}
          onClick={() => {
            setIndustry("");
            setActiveIndex(0);
            setCurrentLabel(null)
          }}
        >
          クリア
        </span>
      </div>
    </li>
  );
}