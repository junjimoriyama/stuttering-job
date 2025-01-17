import { BaseFormProps, FormWithSetValueProps } from "@/types/form";
import "./notebook.scss";
import { SurpriseMark } from "@/assets/svg/icon/mark";
import { useEffect, useRef, useState } from "react";
import { storageSelectSaveData } from "@/functions/functions";

export const Notebook = ({
  register,
  errors, 
  setValue 
}: FormWithSetValueProps) => {

   // 選択されている値
    const [saveData, setSaveData] = useState("");

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_notebook") || ""
    // 画面遷移から戻った時にストレージデータを反映
    setValue("notebook",getStorageData)
    setSaveData(getStorageData)
  }, [])

  // 遅延処理用のタイマーを保持する参照
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  return (
    <li className="notebook">
      <label htmlFor="notebook">
        障害者手帳の有無
        <span className="must">必須</span>
      </label>
      <select 
      id="notebook"
      value={saveData}
      {...register("notebook", { 
        onChange: (e) => storageSelectSaveData(
          e, 
          "stutter_job_notebook", 
          // setValue, 
          setSaveData,
          timerRef),
        required: "選択は必須です" })}
      >
        <option value="" disabled>
          選択してください
        </option>
        <option value="あり">あり</option>
        <option value="なし">なし</option>
        <option value="無回答">無回答</option>
      </select>
      {
        errors.notebook && typeof errors.notebook.message === "string" && (
          <p className="error">
            <SurpriseMark />
            {errors.notebook.message}
          </p>
        )
      }
    </li>
  );
};