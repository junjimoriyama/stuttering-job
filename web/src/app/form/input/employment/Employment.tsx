import { BaseFormProps, formHookProps } from "@/app/types/form";
import "./employment.scss";
import { storageSelectSaveData } from "@/app/functions/functions";
import { useEffect, useRef, useState } from "react";
import { surprise_mark } from "@/public/svg/icon/mark";

const Employment = ({
  register,
  errors,
  setValue
} : formHookProps) => {

  // 表示用state 
  const [saveData, setSaveData] = useState("");

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_employment") || ''
    setValue("employment",getStorageData)
    setSaveData(getStorageData)
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
          "stutter_job_employment", 
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
        <surprise_mark />
        {errors.employment.message}
      </p>
      )}
      
    </li>
  );
};

export default Employment;
