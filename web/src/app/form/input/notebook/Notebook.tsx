import { BaseFormProps, FormWithSetValueProps } from "@/app/types/form";
import "./notebook.scss";
import { SurpriseMark } from "@/public/svg/icon/mark";
import { useEffect, useRef, useState } from "react";
import { storageSelectSaveData } from "@/app/functions/functions";

const Notebook = ({
  register,
  errors, 
  setValue 
}: FormWithSetValueProps) => {

    // 表示用state 
    const [saveData, setSaveData] = useState("");

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_notebook") || ''
    setValue("notebook",getStorageData)
    setSaveData(getStorageData)
  }, [])

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  return (
    <li className="notebook">
      <label htmlFor="notebook">
        障害者手帳の有無
        <span className="must">必須</span>
      </label>
      <select 
      id="notebook"
      // className={`notebook-select ${isNotebookInvalid ? "isInvalid" : ""}`}
      value={saveData}
      {...register("notebook", { 
        onChange: (e) => storageSelectSaveData(
          e, 
          "stutter_job_notebook", 
          setValue, 
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
        errors.notebook && typeof errors.notebook.message === 'string' && (
          <p className="error">
            <SurpriseMark />
            {errors.notebook.message}
          </p>
        )
      }
      
    </li>
  );
};

export default Notebook;
