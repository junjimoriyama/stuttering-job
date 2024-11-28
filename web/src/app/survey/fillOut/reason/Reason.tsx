"use client";

import { ChangeEvent, useState } from 'react'
import './reason.scss'

const Reason = () => {

  const maxLength = 1000
  const [textCount, setTextCount] = useState(maxLength);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(maxLength - e.target.value.length);
    if(e.target.value.length > maxLength) {
      // 入力を制限する
      e.target.blur();
    }
  }

  return (
    <li className='reason'>
    <div className="reason-heading">
        <label htmlFor="reason">
          今の仕事を選んだ理由
          <span className="free-text">自由記入</span>
        </label>
        <div className="textCount">
          {textCount} / {maxLength}
        </div>
      </div>
    <textarea 
    id="reason"
    className="reason-textArea"
    name="reason"
    maxLength={maxLength}
    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInput(e)} 
    >
    
    </textarea>

    <hr />
  </li>
  )
}

export default Reason