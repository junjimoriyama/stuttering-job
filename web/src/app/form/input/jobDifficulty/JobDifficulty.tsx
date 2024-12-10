"use client";

import { useEffect, useState } from "react";
import "./jobDifficulty.scss";
import { register } from "module";
import { FormWithSetValueProps } from "@/app/types/form";
import { useFormContext } from "react-hook-form";
import { SurpriseMark } from "@/public/svg/svg";

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
    const savedAgeData = localStorage.getItem("job_difficulty") || ''
    setValue("job_difficulty",Number(savedAgeData))
    setClickedIndex(Number(savedAgeData))
  }, [])

  const handleClick = (value: number) => {
    setOnFocus(true)
    setValue("job_difficulty", value, { shouldValidate: true }); 
    setClickedIndex(value)

    localStorage.setItem("job_difficulty", String(value)) 
  };

  return (
    <li className="job-difficulty">
      <label>
        吃音による仕事の苦労度
        <span className="must">必須</span>
      </label>
      <div
        tabIndex={0}
        onBlur={() => setOnFocus(false)} 
        className={`
          job-difficulty-level ${onFocus ? "isActive" : ""}`}
      >
        <span className="job-difficulty-level-text">小</span>
        {[...Array(5)].map((_, i) => {
          const value = `${i + 1}`;
          return (
            <span
              key={value}
              className={`job-difficulty-level-item ${
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
        <span className="job-difficulty-level-text">大</span>
      </div>
      {errors.job_difficulty && typeof errors.job_difficulty.message === "string" && (
        <p className="error">
          <SurpriseMark />
          {errors.job_difficulty.message}
        </p>
      )}

      <input
        id="job-difficulty"
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