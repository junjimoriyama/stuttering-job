import { ChangeEvent, useState } from "react";
import "./jobHuntStruggles.scss";
import { BaseFormProps } from "@/app/types/form";

const JobHuntStruggles = ({
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
    <li className="job-hunt-struggles">
      <div className="job-hunt-struggles-heading">
        <label htmlFor="job-hunt-struggles">
        就職活動中の苦労や工夫
          <span className="free-text">自由記入</span>
        </label>
        <div className="textCount">
          {textCount} / {maxLength}
        </div>
      </div>
      <textarea 
      id="job-hunt-struggles" 
      maxLength={maxLength}
      {...register("job_hunt_struggles", {
        onChange: (e) => handleInput(e),
        // 入力値の前後の空白を削除
        setValueAs: (value) => value.trim()
      })}
      ></textarea>
      <hr />
    </li>
  );
};

export default JobHuntStruggles;
