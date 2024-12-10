"use client";

import { ChangeEvent, useEffect, useState, useRef } from "react";
import "./jobDetails.scss";
import { BaseFormProps, FormWithSetValueProps } from "@/app/types/form";
import { CheckMark } from "@/public/svg/svg";
import { storageTextSaveData } from "@/app/functions/functions";
// import { handleInput } from '@/app/functions/functions'

const JobDetails = ({ register, errors, setValue }: FormWithSetValueProps) => {
  const maxLength = 300;
  const [textCount, setTextCount] = useState(maxLength);
  const [isSave, setIsSave] = useState(false);

  // setValueで値を管理する
  // 読み込み時にlsよりデータ取得
  // 入力したらlsとstateに保存
  // 保存ボタン押したらlsに保存

  useEffect(() => {
    const savedText = localStorage.getItem("job_details") || "";
    setValue("job_details", savedText);
    setIsSave(true);
    setTextCount(maxLength - savedText.length);
  }, []);

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  return (
    <li className="job-details">
      <label htmlFor="job-details-textarea">
        具体的な仕事内容
        <span className="free-text">自由記入</span>
      </label>
      <textarea
        id="job-details-textarea"
        className="job-details-textarea"
        // value={saveText}
        // onInput={handleInput}
        // name="job_details"
        maxLength={maxLength}
        {...register("job_details", {
          onChange: (e) => storageTextSaveData(
            e,
            "job_details",
            setValue,
            timerRef,
            maxLength,),
          // 入力値の前後の空白を削除
          setValueAs: (value) => value.trim(),
        })}
      />
      <div className="underTextArea">
        <div className="textCount">
          {textCount} / {maxLength}
        </div>
      </div>
    </li>
  );
};

export default JobDetails;

{/* <div className="temporarySave">
  <button
    className={`temporarySaveBtn ${isSave ? 'isCheck' : ''}`}
    type="button"
    onClick={handleSave}
  >
    一時保存
  <span 
  className={`CheckMark ${isSave ? 'isCheck' : ''}`}
  onAnimationEnd={handleAnimationEnd}
  >
    <CheckMark />
  </span>
  </button>
</div> */}
