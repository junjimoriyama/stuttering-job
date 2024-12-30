// react
import { useEffect, useRef, useState } from "react";
// style
import "./jobDetails.scss";
// type
import { FormWithSetValueProps } from "@/app/types/form";
// functions
import { storageTextSaveData } from "@/app/functions/functions";

export const JobDetails = ({ 
  register, 
  errors, 
  setValue 
}: FormWithSetValueProps) => {

  // 制限文字数
  const maxLength = 300;
  // 文字カウント
  const [textCount, setTextCount] = useState(maxLength);

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_job_details") || "";
    // 画面遷移から戻った時にストレージデータを反映
    setValue("job_details", getStorageData);
    setTextCount(maxLength - getStorageData.length);
  }, [setValue]);

  // 遅延処理用のタイマーを保持する参照
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  return (
    <li className="job_details">
      <label htmlFor="job_details_textarea">
        具体的な仕事内容
        <span className="free_text">自由記入</span>
      </label>
      <textarea
        id="job_details_textarea"
        className="job_details_textarea"
        maxLength={maxLength}
        {...register("job_details", {
          onChange: (e) => storageTextSaveData(
            e,
            "stutter_job_job_details",
            // setValue,
            setTextCount,
            timerRef,
            maxLength,),
          // 入力値の前後の空白を削除
          setValueAs: (value) => value.trim(),
          // setValueAs: (value) => value.replace(/\s/g, "").trim(),
        })}
      />
        <div className="textCount">
          {textCount} / {maxLength}
      </div>
    </li>
  );
};
