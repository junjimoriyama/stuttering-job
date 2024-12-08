"use client";

import { ChangeEvent, useState } from "react";
import "./reason.scss";
import { BaseFormProps } from "@/app/types/form";

const Reason = ({
  register,
  errors
}: BaseFormProps) => {
  const maxLength = 1000;
  const [textCount, setTextCount] = useState(maxLength);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(maxLength - e.target.value.length);
    if (e.target.value.length > maxLength) {
      // 入力を制限する
      e.target.blur();
    }
  };

  return (
    <li className="reason">
        <label htmlFor="reason">
          今の仕事を選んだ理由
          <span className="free-text">自由記入</span>
        </label>
      <textarea
        id="reason"
        className="reason-textarea"
        maxLength={maxLength}
        {...register('reason', {
          onChange: (e) => handleInput(e),
           // 入力値の前後の空白を削除
          setValueAs: (value) => value.trim()
        })}
      ></textarea>
      <div className="textCount">
        {textCount} / {maxLength}
      </div>

      <hr />
    </li>
  );
};

export default Reason;
