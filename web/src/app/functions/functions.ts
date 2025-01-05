// import { handleInput } from '@/app/functions/functions';
import { ChangeEvent, useEffect } from "react";
import {
  handleInputPersonalProps,
  handleInputProps,
  handleSelectProps,
  handleSelectPropsNumber,
} from "../types/form";

// 選択保存
export const storageSelectSaveData: handleSelectProps = (
  e,
  key,
  // setValue,
  setSaveData,
  timerRef
) => {
  const value = e.target.value;
  // useHookFormに値入れる
  setSaveData(value);

  if (timerRef.current) {
    clearTimeout(timerRef.current);
  }

   // 250ms後にlocalStorageに値を保存
  timerRef.current = setTimeout(() => {
    localStorage.setItem(key, value);
  }, 250);
};

// 選択保存
export const storageSelectSaveDataAge: handleSelectPropsNumber = (
  e,
  key,
  // setValue,
  setSaveData,
  timerRef
) => {
  const value = Number(e.target.value);
  // useHookFormに値入れる
  setSaveData(value);

  if (timerRef.current) {
    clearTimeout(timerRef.current);
  }

   // 250ms後にlocalStorageに値を保存
  timerRef.current = setTimeout(() => {
    localStorage.setItem(key, value.toString());
  }, 250);
};

// 自由記入欄保存
export const storageTextSaveData: handleInputProps = (
  e,
  key,
  // setValue,
  setTextCount,
  timerRef,
  maxLength
) => {
  // 入力された値
  const value = e.target.value;

  if (value.length > maxLength) {
    e.target.blur();
  }

  setTextCount(maxLength - value.length);

  if (timerRef.current) {
    clearTimeout(timerRef.current);
  }

   // 250ms後にlocalStorageに値を保存
  timerRef.current = setTimeout(() => {
    localStorage.setItem(key, value);
  }, 250);
};

// 自由記入欄保存
export const storagePersonalSaveData: handleInputPersonalProps = (
  e,
  key,
  setValue,
  timerRef
) => {
  // 入力された値
  const value = e.target.value;
  // useHookFormに値入れる
  // setValue(key, value);

  if (timerRef.current) {
    clearTimeout(timerRef.current);
  }
   // 250ms後にlocalStorageに値を保存
  timerRef.current = setTimeout(() => {
    localStorage.setItem(key, value);
  }, 250);
};

// インターセクションオブザーバー
type ObserverOptions = {
  threshold: number; // IntersectionObserver の threshold
};

const useIntersectionObserver = (
  ref: React.RefObject<Element>, // 対象要素の参照
  setState: React.Dispatch<React.SetStateAction<boolean>>, // 状態を更新する関数
  options: ObserverOptions // オプション
) => {
  useEffect(() => {
    if (!ref.current) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setState(true); // 一度でも可視状態になったら true にする
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: options.threshold,
    });

    observer.observe(ref.current);

    return () => {
      // observer.unobserve(ref.current!); // クリーンアップ
    };
  }, [ref, setState, options.threshold]);
};

export default useIntersectionObserver;

// データの取得
export const fetchDatabaseData = async() => {
  const res = await fetch("http://localhost:3000/api/v1/forms", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if(res.ok) {
  const data = await res.json();
  return data
  } else {
    console.log("error")
  }
}