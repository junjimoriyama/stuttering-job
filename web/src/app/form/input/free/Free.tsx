import { ChangeEvent, useEffect, useRef, useState } from "react";
import "./free.scss";
import { BaseFormProps, formHookProps } from "@/app/types/form";
import { storageTextSaveData } from "@/app/functions/functions";

const Free = ({ 
  register, 
  errors,
  setValue
}: formHookProps) => {
  const maxLength = 1000;

  const [textCount, setTextCount] = useState(maxLength);

  const timerRef = useRef<NodeJS.Timeout | null>(null)

useEffect(() => {
  const getStorageData = localStorage.getItem('stutter_job_free') || ""
  setValue("free", getStorageData)
}, [])

  return (
    <li className="free">
      <div className="free_heading">
        <label htmlFor="free">
          見ている人に向けて
          <span className="free_text">自由記入</span>
        </label>
      </div>
      <textarea
        id="free"
        maxLength={maxLength}
        {...register("free", {
          onChange: (e) => storageTextSaveData( 
            e,
            "stutter_job_free",
            setValue,
            setTextCount,
            timerRef,
            maxLength,),
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
      <hr />
    </li>
  );
};

export default Free;
