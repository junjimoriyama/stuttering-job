"use client";

import { useEffect, useState } from "react";
import "./jobDifficulty.scss";
import { register } from "module";
import { FormWithSetValueProps } from "@/app/types/form";
import { useFormContext } from "react-hook-form";
import { surprise_mark } from "@/public/svg/icon/mark";

const JobDifficulty = ({  
  register, 
  errors, 
  setValue 
}: FormWithSetValueProps) => {
  // useFormより値取得
  const { getValues } = useFormContext();
  const values = getValues()
  // クリックした番号
  const [clickIndex, setClickedIndex] = useState<number | null>(values.job_difficulty || null);
  const [onFocus, setOnFocus] = useState(false);


  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_job_difficulty") || ''
    setValue("job_difficulty",Number(getStorageData))
    setClickedIndex(Number(getStorageData))
  }, [])

  const handleClick = (value: number) => {
    setOnFocus(true)
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
          // const value = `${i + 1}`
          return (
            <span
              key={value}
              className={`job_difficulty_level_item ${
                clickIndex === i + 1 ? "isClicked" : ""
              } `}
              onClick={() => {
                handleClick(i + 1); 
                // setClickedIndex(i + 1)
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
          <surprise_mark />
          {errors.job_difficulty.message}
        </p>
      )}

      <input
        id="job_difficulty"
        type="hidden"
        // name="job_difficulty"
        value={clickIndex !== null ? clickIndex : ""}
        {...register("job_difficulty", { required: "選択してください" })}
      />
    </li>
  );
};

export default JobDifficulty;

// const handleClick = (value: number) => {
//   setOnFocus(true)
//   setValue("job_difficulty", value, { shouldValidate: true }); 
//   setClickedIndex(value)
  
// };