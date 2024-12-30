// react
import { useEffect, useRef, useState } from "react";
// type
import { FormWithSetValueProps } from "@/app/types/form";
// functions
import { storageTextSaveData } from "@/app/functions/functions";
// style
import "./free.scss";

export const Free = ({ 
  register, 
  errors,
  setValue
}: FormWithSetValueProps) => {
  
  // 制限文字数
  const maxLength = 1000;
  // 文字カウント
  const [textCount, setTextCount] = useState(maxLength);
  
  useEffect(() => {
    const getStorageData = localStorage.getItem('stutter_job_free') || ""
    setValue("free", getStorageData)
    setTextCount(maxLength - getStorageData.length);
  }, [])

  // 遅延処理用のタイマーを保持する参照
  const timerRef = useRef<NodeJS.Timeout | null>(null)

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
            // setValue,
            setTextCount,
            timerRef,
            maxLength,),
          setValueAs: (value) => value.trim(),
        })}
      ></textarea>
      <div className="underTextArea">
        <div className="temporarySave">
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
