// react
import { useEffect, useRef, useState } from "react";
// type
import { FormWithSetValueProps } from "@/types/form";
// functions
import { storageTextSaveData } from "@/functions/functions";
// style
import "./reason.scss";

export const Reason = ({ 
  register, 
  errors, 
  setValue 
}: FormWithSetValueProps) => {

  // 制限文字数
  const maxLength = 1000;
  // 文字カウント
  const [textCount, setTextCount] = useState(maxLength);

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_reason") || "";
    // 画面遷移から戻った時にストレージデータを反映
    setValue("reason", getStorageData);
    setTextCount(maxLength - getStorageData.length);
  }, []);

  // 遅延処理用のタイマーを保持する参照
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
            // setValue, 
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
