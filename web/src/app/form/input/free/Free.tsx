import { ChangeEvent, useState } from "react";
import "./free.scss";
import { BaseFormProps } from "@/app/types/form";

const Free = ({ register, errors }: BaseFormProps) => {
  const maxLength = 1000;

  const [textCount, setTextCount] = useState(maxLength);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(maxLength - e.target.value.length);
    if (e.target.value.length > maxLength) {
      e.target.blur();
    }
  };

  return (
    <li className="free">
      <div className="free-heading">
        <label htmlFor="free">
          見ている人に向けて
          <span className="free-text">自由記入</span>
        </label>
      </div>
      <textarea
        id="free"
        maxLength={maxLength}
        {...register("free", {
          onChange: (e) => handleInput(e),
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
