import { BaseFormProps, FormWithSetValueProps } from "@/app/types/form";
import "./years.scss";
import { SurpriseMark } from "@/public/svg/icon/mark";
import { storageSelectSaveData } from "@/app/functions/functions";
import { useEffect, useRef, useState } from "react";

const Years = ({
  register,
  errors, 
  setValue 
}: FormWithSetValueProps) => {
  // 表示用state 
  const [saveData, setSaveData] = useState("");

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_years") || ''
    setValue("years",getStorageData)
    setSaveData(getStorageData)
  }, [])

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  return (
    <li className="years">
      <label htmlFor="years">
        勤続年数
        <span className="must">必須</span>
      </label>
      <select 
      id="years"
      value={saveData}
      {...register("years", { 
        onChange: (e) => storageSelectSaveData(
          e, 
          "stutter_job_years", 
          setValue, 
          setSaveData,
          timerRef),
        required: "選択は必須です" })}
      >
        <option value="" disabled>
          選択してください
        </option>
        <option value="0-1年">〜1&nbsp;年</option>
        <option value="1-3年">1〜3&nbsp;年</option>
        <option value="3-5年">3〜5&nbsp;年</option>
        <option value="5-10年">5〜10&nbsp;年</option>
        <option value="10年以上">10&nbsp;年以上</option>
      </select>
      { errors.years && typeof errors.years.message === "string" && (
        <p className="error">
          <SurpriseMark />
          {errors.years.message}
        </p>
      )}
    </li>
  );
};

export default Years;
