"use client";

import { ChangeEvent, useEffect, useState } from "react";
import "./jobDetails.scss";
import { BaseFormProps, FormWithSetValueProps } from "@/app/types/form";
import { CheckMark } from "@/public/svg/svg";

const JobDetails = ({ register, errors, setValue }: FormWithSetValueProps) => {
  const maxLength = 300;
  const [textCount, setTextCount] = useState(maxLength);
  const [saveText, setSaveText] = useState("");
  const [isSave, setIsSave] = useState(false);

  // setValueで値を管理する
  // 読み込み時にlsよりデータ取得
  // 入力したらlsとstateに保存
  // 保存ボタン押したらlsに保存

  useEffect(() => {
    const savedText = localStorage.getItem("jobDetails") || "";
    setValue("job_details", savedText);
    setSaveText(savedText);
    setIsSave(true)
    setIsSave(false)
    setTextCount(maxLength - savedText.length);
  }, []);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setValue("job_details", value);
    setSaveText(value);
    setTextCount(maxLength - value.length);
    if (value.length > maxLength) {
      e.target.blur();
    }
  };

  const handleSave = () => {
    setIsSave(true)
    localStorage.setItem("jobDetails", saveText);
  };
  const handleAnimationEnd = () => {
    setIsSave(false)
  };

  return (
    <li className="job-details">
      <label htmlFor="job-details-textarea">
        具体的な仕事内容
        <span className="free-text">自由記入</span>
      </label>
      <textarea
        id="job-details-textarea"
        className="job-details-textarea"
        value={saveText}
        // name="job_details"
        maxLength={maxLength}
        {...register("job_details", {
          onChange: (e) => handleInput(e),
          // 入力値の前後の空白を削除
          setValueAs: (value) => value.trim(),
        })}
      />
      <div className="underTextArea">
        <div className="temporarySave">
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
        </div>
        <div className="textCount">
          {textCount} / {maxLength}
        </div>
      </div>
      <hr />
    </li>
  );
};

export default JobDetails;
