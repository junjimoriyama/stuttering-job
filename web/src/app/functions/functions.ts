// import { handleInput } from '@/app/functions/functions';
import { ChangeEvent } from "react";
import { handleInputPersonalProps, handleInputProps, handleSelectProps } from "../types/form";

// 選択保存
export const storageSelectSaveData: handleSelectProps = (
  e,
  key,
  setValue,
  setSaveData,
  timerRef,
) => {
  const value = e.target.value
  // useHookFormに値入れる
  setValue(key, value)
  setSaveData(value)

  if(timerRef.current) {
    clearTimeout(timerRef.current)
  }

  timerRef.current = setTimeout(() => {
    localStorage.setItem(key, value)
  }, 250)
}


// 自由記入欄保存
export const storageTextSaveData: handleInputProps = (
  e,
  key,
  setValue,
  setTextCount,
  timerRef,
  maxLength,
) => {
  // 入力された値
  const value = e.target.value
  // useHookFormに値入れる
  setValue(key, value)
  
  if(value.length > maxLength) {
    e.target.blur()
  }

  setTextCount(value.length)

  if(timerRef.current) {
    clearTimeout(timerRef.current)
  }

  timerRef.current = setTimeout(() => {
    localStorage.setItem(key, value)
  }, 250)
}


// 自由記入欄保存
export const storagePersonalSaveData: handleInputPersonalProps = (
  e,
  key,
  setValue,
  timerRef,
) => {
  // 入力された値
  const value = e.target.value
  // useHookFormに値入れる
  setValue(key, value)
  

  if(timerRef.current) {
    clearTimeout(timerRef.current)
  }

  timerRef.current = setTimeout(() => {
    localStorage.setItem(key, value)
  }, 250)
}


// export const storageSelectSetData = () => {
//   const savedAgeData = localStorage.getItem("age") || ''
//   setSaveData(savedAgeData)
//   setValue("age",savedAgeData)
// }