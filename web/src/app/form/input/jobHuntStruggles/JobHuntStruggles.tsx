// react
import { useEffect, useRef, useState } from "react";
// type
import { FormWithSetValueProps } from "@/types/form";
// functions
import { storageTextSaveData } from "@/app/functions/functions";
// style
import "./jobHuntStruggles.scss";


export const JobHuntStruggles = ({ 
  register, 
  errors, 
  setValue 
}: FormWithSetValueProps) => {

  // 制限文字数
  const maxLength = 1000;
   // 文字カウント
  const [textCount, setTextCount] = useState(maxLength);

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_job_struggles") || "";
    // 画面遷移から戻った時にストレージデータを反映
    setValue("job_hunt_struggles", getStorageData);
    setTextCount(maxLength - getStorageData.length);
  }, []);

  // 遅延処理用のタイマーを保持する参照
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  return (
    <li className="job_hunt_struggles">
      <div className="job_hunt_struggles_heading">
        <label htmlFor="job_hunt_struggles">
          就職活動中の苦労や工夫
          <span className="free_text">自由記入</span>
        </label>
      </div>
      <textarea
        id="job_hunt_struggles"
        maxLength={maxLength}
        {...register("job_hunt_struggles", {
          onChange: (e) => storageTextSaveData(
            e,
            "stutter_job_job_hunt_struggles",
            // setValue,
            setTextCount,
            timerRef,
            maxLength,),
          // 入力値の前後の空白を削除
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
    </li>
  );
};

export default JobHuntStruggles;
