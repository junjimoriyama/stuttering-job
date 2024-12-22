"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import "./reason.scss";
import { BaseFormProps, FormWithSetValueProps } from "@/app/types/form";
import { storageTextSaveData } from "@/app/functions/functions";

const Reason = ({ 
  register, 
  errors, 
  setValue 
}: FormWithSetValueProps) => {
  const maxLength = 1000;
  const [textCount, setTextCount] = useState(maxLength);

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_reason") || "";
    setValue("reason", getStorageData);
    setTextCount(maxLength - getStorageData.length);
    console.log(textCount)
  }, []);

  const timerRef = useRef<NodeJS.Timeout | null>(null)


  return (
    <li className="reason">
        <label htmlFor="reason">
          今の仕事を選んだ理由
          <span className="free_text">自由記入</span>
        </label>
      <textarea
        id="reason"
        className="reason_textarea"
        maxLength={maxLength}
        {...register("reason", { 
          onChange: (e) => storageTextSaveData(
            e, 
            "stutter_job_reason", 
            setValue, 
            setTextCount,
            timerRef,
            maxLength),
          // 入力値の前後の空白を削除
        setValueAs: (value) => value.trim()
      })}
      />
      <div className="textCount">
        {textCount} / {maxLength}
      </div>
    </li>
  );
};

export default Reason;
