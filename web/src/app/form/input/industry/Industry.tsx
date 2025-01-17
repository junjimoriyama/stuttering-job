// react
import { useState, useEffect, useRef } from "react";
// dataLists
import { industryList } from "@/dataLists/industryList";
// type
import { FormWithSetValueProps } from "@/types/form";
// functions
import { storageSelectSaveData } from "@/functions/functions";
// svg
import { SurpriseMark } from "@/assets/svg/icon/mark";
// style
import "./industry.scss";

export const Industry = ({ register, errors, setValue }: FormWithSetValueProps) => {

  // 選択されている値
  const [saveData, setSaveData] = useState("");

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_industry") || "";
     // 画面遷移から戻った時にストレージデータを反映
    setValue("industry", getStorageData);
    setSaveData(getStorageData);
  }, [setValue]);

  // 遅延処理用のタイマーを保持する参照
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <li className="industry">
      <label htmlFor="industry">
        業種
        <span className="must">必須</span>
      </label>
      <select
        id="industry"
        value={saveData}
        {...register("industry", {
          onChange: (e) =>
            storageSelectSaveData(
              e,
              "stutter_job_industry",
              setSaveData,
              timerRef
            ),
          required: "選択は必須です",
        })}
      >
        <option value="" disabled>
          選択してください
        </option>
        {industryList.map((industry) => (
          <option key={industry.value} value={industry.label}>
            {industry.label}
          </option>
        ))}
      </select>
      {errors.industry && typeof errors.industry.message === "string" && (
        <p className="error">
          <SurpriseMark />
          {errors.industry.message}
        </p>
      )}
    </li>
  );
};

export default Industry;
