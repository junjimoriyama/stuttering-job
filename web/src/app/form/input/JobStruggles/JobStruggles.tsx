import { ChangeEvent, useState } from "react";
import "./jobStruggles.scss";
import { BaseFormProps } from "@/app/types/form";

const JobStruggles = ({
  register,
  errors
} : BaseFormProps) => {

  const maxLength = 1000

  const [textCount, setTextCount] = useState(maxLength);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(maxLength - e.target.value.length)
    if(e.target.value.length > maxLength ) {
      e.target.blur()
    }
  }

  return (
    <li className="job-struggles">
      <div className="job-struggles-heading">
        <label htmlFor="job-struggles">
        仕事中の苦労や工夫
          <span className="free-text">自由記入</span>
        </label>
      </div>
      <textarea 
      id="job-struggles" 
      maxLength={maxLength}
      {...register("job_struggles", {
        onChange: (e) => handleInput(e),
        // 入力値の前後の空白を削除
        setValueAs: (value) => value.trim()
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
