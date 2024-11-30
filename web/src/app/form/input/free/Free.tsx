import { ChangeEvent, useState } from "react";
import "./free.scss";

const Free = () => {

  const maxLength = 1000

  const [textCount, setTextCount] = useState(maxLength);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(maxLength - e.target.value.length)
    if(e.target.value.length > maxLength ) {
      e.target.blur()
    }
  }

  return (
    <li className="free">
      <div className="free-heading">
        <label htmlFor="free">
        見ている人に向けて
          <span className="free-text">自由記入</span>
        </label>
        <div className="textCount">
          {textCount} / {maxLength}
        </div>
      </div>
      <textarea 
      id="free" 
      name="job_hunt_struggles"
      maxLength={maxLength}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInput(e)}
      ></textarea>
      <hr />
    </li>
    // <li>
    //   <label htmlFor="free">
    //     見ている人に向けて
    //     <span className="free-text">自由記入</span>
    //   </label>
    //   <textarea id="free" name="free"></textarea>
    //   <hr />
    // </li>
  );
};

export default Free;
