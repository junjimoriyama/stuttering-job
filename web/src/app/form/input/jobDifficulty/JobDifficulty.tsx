// react
import { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
// type
import { FormWithSetValueProps } from "@/app/types/form";
// svg
import { SurpriseMark } from "@/public/svg/icon/mark";
// style
import "./jobDifficulty.scss";

export const JobDifficulty = ({  
  register, 
  errors, 
  setValue 
}: FormWithSetValueProps) => {
  // useFormより値取得
  const { getValues } = useFormContext();
  const values = getValues()

  // クリックした番号
  const [clickIndex, setClickedIndex] = useState<number | null>(values.job_difficulty || null);
  // フォーカスの状態
  const [onFocus, setOnFocus] = useState(false);


  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_job_difficulty") || ""
     // 画面遷移から戻った時にストレージデータを反映
    setValue("job_difficulty",Number(getStorageData))
    setClickedIndex(Number(getStorageData))
  }, [])

  const handleClick = (value: number) => {
    setOnFocus(true)
    // フォームの状態に値を設定し、必要に応じて即時バリデーションを実行
    setValue("job_difficulty", value, { shouldValidate: true }); 
    setClickedIndex(value)
    localStorage.setItem("stutter_job_job_difficulty", String(value)) 
  };

  return (
    <li className="job_difficulty">
      <label>
        吃音による仕事の苦労度
        <span className="must">必須</span>
      </label>
      <div
        tabIndex={0}
        onBlur={() => setOnFocus(false)} 
        className={`
          job_difficulty_level ${onFocus ? "isActive" : ""}`}
      >
        <span className="job_difficulty_level_text">小</span>
        {[...Array(5)].map((_, i) => {
          const value = i + 1
          return (
            <span
              key={value}
              className={`job_difficulty_level_item ${
                clickIndex === i + 1 ? "isClicked" : ""
              } `}
              onClick={() => {
                handleClick(i + 1); 
              }}
            >
              {value}
            </span>
          );
        })}
        <span className="job_difficulty_level_text">大</span>
      </div>
      {errors.job_difficulty && typeof errors.job_difficulty.message === "string" && (
        <p className="error">
          <SurpriseMark />
          {errors.job_difficulty.message}
        </p>
      )}
      <input
        id="job_difficulty"
        type="hidden"
        value={clickIndex !== null ? clickIndex : ""}
        {...register("job_difficulty", { required: "選択してください" })}
      />
    </li>
  );
};