// react
import { useEffect, useRef, useState } from "react";
// type
import { FormWithSetValueProps } from "@/types/form";
// functions
import { storageTextSaveData } from "@/functions/functions";
// style
import "./jobStruggles.scss";

export const JobStruggles = ({ 
  register, 
  errors, 
  setValue 
}: FormWithSetValueProps) => {

  // 制限文字数
  const maxLength = 1000
  // 文字カウント
  const [textCount, setTextCount] = useState(maxLength);

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_job_struggles") || "";
     // 画面遷移から戻った時にストレージデータを反映
    setValue("job_struggles", getStorageData);
    setTextCount(maxLength - getStorageData.length);
  }, []);

  // 遅延処理用のタイマーを保持する参照
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
          // setValue,
          setTextCount,
          timerRef,
          maxLength,),
        // 入力値の前後の空白を削除
        setValueAs: (value) => value.trim()
      })}
      ></textarea>
      <div className="underTextArea">
        <div className="temporarySave">
        </div>
        <div className="textCount">
          {textCount} / {maxLength}文字
        </div>
      </div>
    </li>
  );
};