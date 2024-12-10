import { BaseFormProps, formHookProps, FormWithSetValueProps } from "@/app/types/form";
import "./gender.scss";
import { SurpriseMark } from "@/public/svg/svg";
import { useEffect, useRef, useState } from "react";
import { storageSelectSaveData } from "@/app/functions/functions";

export const Gender = ({ 
  register, 
  errors, 
  setValue 
} : FormWithSetValueProps) => {
  // 表示用state
  const [saveData, setSaveData] = useState("");

  // 初期値の設定
  useEffect(() => {
    const savedGenderData = localStorage.getItem("gender") || "";
    setValue("gender", savedGenderData); // react-hook-form にセット
    setSaveData(savedGenderData); // 表示用にセット
  }, [setValue]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <li className="gender">
      <label htmlFor="gender">
        性別
        <span className="must">必須</span>
      </label>
      <select
        id="gender"
        value={saveData} // 選択中の値を表示
        {...register("gender", {
          onChange: (e) =>
            storageSelectSaveData(e, "gender", setValue, setSaveData, timerRef),
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
