import { BaseFormProps, formHookProps } from "@/app/types/form";
import "./employment.scss";
import { SurpriseMark } from "@/public/svg/svg";
import { storageSelectSaveData } from "@/app/functions/functions";
import { useEffect, useRef, useState } from "react";

const Employment = ({
  register,
  errors,
  setValue
} : formHookProps) => {

  // 表示用state 
  const [saveData, setSaveData] = useState("");

  useEffect(() => {
    const savedAgeData = localStorage.getItem("employment") || ''
    setValue("employment",savedAgeData)
  }, [])

  let timerRef = useRef<NodeJS.Timeout | null>(null)

  return (
    <li className="employment">
      <label htmlFor="employment">
        働き方
        <span className="must">必須</span>
      </label>
      <select 
      id="employment"
      value={saveData}
      {...register('employment', {
        onChange: (e) => storageSelectSaveData(
          e, 
          "employment", 
          setValue, 
          setSaveData,
          timerRef),
        required: '選択は必須です'}
      )}
      >
        <option value="" disabled>
          選択してください
        </option>
        <option value="正社員">正社員</option>
        <option value="契約・派遣・嘱託社員">契約・派遣・嘱託社員</option>
        <option value="パート＆アルバイト">パート＆アルバイト</option>
        <option value="自営業＆フリーランス">自営業＆フリーランス</option>
        <option value="その他">その他</option>
      </select>
      { errors.employment && typeof errors.employment.message === 'string' && (
        <p className="error">
        <SurpriseMark />
        {errors.employment.message}
      </p>
      )}
      
    </li>
  );
};

export default Employment;
