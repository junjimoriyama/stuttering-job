"use client";

import { useEffect, useState } from "react";
import "./jobHuntDifficulty.scss";
import { FormWithSetValueProps } from "@/app/types/form";
import { SurpriseMark } from "@/public/svg/svg";
import { useFormContext } from "react-hook-form";

const JobHuntDifficulty = ({
  register,
  errors,
  setValue
}: FormWithSetValueProps) => {

  // useFormより値取得
  const { getValues } = useFormContext()
  const values = getValues()

  const [clickIndex, setClickedIndex] = useState<number | null>(values.job_hunt_difficulty || null);
  const [onFocus, setOnFocus] = useState(false);

  useEffect(() => {
    const savedAgeData = localStorage.getItem("job_hunt_difficulty") || ''
    setValue("job_hunt_difficulty",Number(savedAgeData))
    setClickedIndex(Number(savedAgeData))
  }, [])

  const handleClick = (value: number) => {
    setOnFocus(true)
    setValue("job_hunt_difficulty", value, { shouldValidate: true }); 
    setClickedIndex(value)
    localStorage.setItem("job_hunt_difficulty", String(value)) 
  };

  return (
    <li className="job-hunt-difficulty">
      <label>
        吃音による就職活動の苦労度
        <span className="must">必須</span>
      </label>
      <div
        tabIndex={0}
        onBlur={() => setOnFocus(false)}
        className={`
          job-hunt-difficulty-level ${onFocus  ? "isActive" : ""}`}
        >
        <span className="job-hunt-difficulty-level-text">小</span>
        {[...Array(5)].map((_, i) => {
          const value = `${i + 1}`;
          return (
            <span
            key={value}
            className={`job-hunt-difficulty-item ${
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
        <span className="job-hunt-difficulty-level-text">大</span>
      </div>
      {errors.job_hunt_difficulty && typeof errors.job_hunt_difficulty.message === "string" && (
        <p className="error">
          <SurpriseMark />
          {errors.job_hunt_difficulty.message}
        </p>
      )}


      <input
        id="job-hunt-difficulty"
        type="hidden"
        value={clickIndex !== null ? clickIndex : ""}
        {...register("job_hunt_difficulty", { required: "選択してください" })}
      />
    </li>
  );
};

export default JobHuntDifficulty;

