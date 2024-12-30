// react
import { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
// type
import { FormWithSetValueProps } from "@/app/types/form";
// svg
import { SurpriseMark } from "@/public/svg/icon/mark";
// style
import "./jobHuntDifficulty.scss";

export const JobHuntDifficulty = ({
  register,
  errors,
  setValue
}: FormWithSetValueProps) => {

  // useFormより値取得
  const { getValues } = useFormContext()
  const values = getValues()

   // クリックした番号
  const [clickIndex, setClickedIndex] = useState<number | null>(values.job_hunt_difficulty || null);
   // フォーカスの状態
  const [onFocus, setOnFocus] = useState(false);

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_job_hunt_difficulty") || ""
    // 画面遷移から戻った時にストレージデータを反映
    setValue("job_hunt_difficulty",Number(getStorageData))
    setClickedIndex(Number(getStorageData))
  }, [])

  const handleClick = (value: number) => {
    setOnFocus(true)
    // フォームの状態に値を設定し、必要に応じて即時バリデーションを実行
    setValue("job_hunt_difficulty", value, { shouldValidate: true }); 
    setClickedIndex(value)
    localStorage.setItem("stutter_job_job_hunt_difficulty", String(value)) 
  };

  return (
    <li className="job_hunt_difficulty">
      <label>
        吃音による就職活動の苦労度
        <span className="must">必須</span>
      </label>
      <div
        tabIndex={0}
        onBlur={() => setOnFocus(false)}
        className={`
          job_hunt_difficulty_level ${onFocus  ? "isActive" : ""}`}
        >
        <span className="job_hunt_difficulty_level_text">小</span>
        {[...Array(5)].map((_, i) => {
          const value = `${i + 1}`;
          return (
            <span
            key={value}
            className={`job_hunt_difficulty_item ${
              clickIndex === i + 1 ? "isClicked" : ""
            }`}
            onClick={() => {
              setClickedIndex(i + 1)
              handleClick(i + 1)
              }}
            >
              {value}
            </span>
          );
        })}
        <span className="job_hunt_difficulty_level_text">大</span>
      </div>
      {errors.job_hunt_difficulty && typeof errors.job_hunt_difficulty.message === "string" && (
        <p className="error">
          <SurpriseMark />
          {errors.job_hunt_difficulty.message}
        </p>
      )}
      <input
        id="job_hunt_difficulty"
        type="hidden"
        value={clickIndex !== null ? clickIndex : ""}
        {...register("job_hunt_difficulty", { required: "選択してください" })}
      />
    </li>
  );
};

export default JobHuntDifficulty;

