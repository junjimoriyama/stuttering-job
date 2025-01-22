// react
import React, { useState, useEffect, useRef } from "react";
// type
import { FormWithSetValueProps } from "@/types/form";
// functions
import { storageSelectSaveData } from "@/functions/functions";
// svg
import { SurpriseMark } from "@/assets/svg/icon/mark";
import { DropArrow } from "@/assets/svg/icon/arrow";
// style
import "./gender.scss";

export const Gender = ({ 
  register, 
  errors, 
  setValue 
} : FormWithSetValueProps) => {
  // 選択されている値
  const [saveData, setSaveData] = useState("");

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_gender") || "";
    // 画面遷移から戻った時にストレージデータを反映
    setValue("gender", getStorageData);
    setSaveData(getStorageData);
  }, [setValue]);

  // 遅延処理用のタイマーを保持する参照
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <li className="gender">
      <label htmlFor="gender">
        性別
        <span className="must">必須</span>
      </label>
      <div className="select_wrapper">
      <DropArrow />
      <select
        id="gender"
        value={saveData} // 選択中の値を表示
        {...register("gender", {
          onChange: (e) =>
            storageSelectSaveData(
              e, 
              "stutter_job_gender", 
              // setValue, 
              setSaveData, 
              timerRef),
          required: "選択は必須です",
        })}
      >
        <option value="" disabled>
          選択してください
        </option>
        <option value="男性">男性</option>
        <option value="女性">女性</option>
        <option value="どちらでもない">どちらでもない</option>
        <option value="無回答">無回答</option>
      </select>
      </div>
      {errors.gender && typeof errors.gender.message === "string" && (
        <p className="error">
          <SurpriseMark />
          {errors.gender.message}
        </p>
      )}
    </li>
  );
};

export default Gender;
