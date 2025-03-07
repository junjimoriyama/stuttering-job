// react
import React, { useState, useEffect, useRef } from "react";
// type
import { FormWithSetValueProps } from "@/types/form";
// functions
import { storageSelectSaveDataAge } from "@/functions/functions";
// svg
import { SurpriseMark } from "@/assets/svg/icon/mark";
import { DropArrow } from "@/assets/svg/icon/arrow";
// style
import "./age.scss";

export const Age = ({ register, errors, setValue }: FormWithSetValueProps) => {
  
  // 選択されている値
  const [saveData, setSaveData] = useState<number>(0);

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_age") || "";
    // 画面遷移から戻った時にストレージデータを反映
    setValue("age",Number(getStorageData));
    setSaveData(Number(getStorageData));
  }, [setValue]);

  // 遅延処理用のタイマーを保持する参照
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <li className="age">
      <label htmlFor="age">
        年代 <span className="must">必須</span>
      </label>
      <div className="select_wrapper">
      <DropArrow />
      <select
        id="age"
        value={saveData}
        {...register("age", {
          onChange: (e) =>
            storageSelectSaveDataAge(
              e,
              "stutter_job_age",
              // setValue,
              setSaveData,
              timerRef
            ),
          required: "選択は必須です",
        })}
      >
        <option value="" disabled>
          選択してください
        </option>
        {[...Array(9)].map((_, i) => {
          const value = (i + 1) * 10;
          return (
            <option key={value} value={value}>
              {value}代
            </option>
          );
        })}
      </select>

      </div>
      {errors.age && typeof errors.age.message === "string" && (
        <p className="error">
          <SurpriseMark />
          {errors.age.message}
        </p>
      )}
    </li>
  );
};
