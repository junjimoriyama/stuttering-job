import { ChangeEvent, useEffect, useRef, useState } from "react";
import "./jobStruggles.scss";
import { BaseFormProps, FormWithSetValueProps } from "@/app/types/form";
import { storageTextSaveData } from "@/app/functions/functions";

const JobStruggles = ({ 
  register, 
  errors, 
  setValue 
}: FormWithSetValueProps) => {

  const maxLength = 1000
  const [textCount, setTextCount] = useState(maxLength);

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_job_struggles") || "";
    setValue("job_struggles", getStorageData);
    setTextCount(maxLength - getStorageData.length);
  }, []);

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  return (
    <li className="job_struggles">
      <div className="job_struggles_heading">
        <label htmlFor="job_struggles">
        仕事中の苦労や工夫
          <span className="free_text">自由記入</span>
        </label>
      </div>
      <textarea 
      id="job_struggles" 
      maxLength={maxLength}
      {...register("job_struggles", {
        onChange: (e) => storageTextSaveData(
          e,
          "stutter_job_job_struggles",
          setValue,
          setTextCount,
          timerRef,
          maxLength,),
        // 入力値の前後の空白を削除
        setValueAs: (value) => value.trim(),
      })}
      ></textarea>
      <div className="underTextArea">
        <div className="temporarySave">
          {/* <button
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
          </button> */}
        </div>
        <div className="textCount">
          {textCount} / {maxLength}
        </div>
      </div>
    </li>
  );
};

export default JobStruggles;
