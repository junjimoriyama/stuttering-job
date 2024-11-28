"use client";

import React, { useState, ChangeEvent } from "react";
import "./age.scss";

const Age = ({
  isAgeInvalid,
  setIsAgeInvalid,
}: {
  isAgeInvalid: boolean;
  setIsAgeInvalid: (value: boolean) => void;
}) => {
  
  const handleSelect = () => {
      setIsAgeInvalid(false)
  };
  return (
    <li className="age">
      <label htmlFor="age">
        年代 <span className="must">必須</span>
      </label>
      <select
        id="age"
        className={`age-select ${isAgeInvalid ? "isInvalid" : ""}`}
        name="age"
        defaultValue=""
        onChange={() => handleSelect()}
        // required
      >
        <option value="" disabled>
          選択してください
        </option>
        {[...Array(9)].map((_, i) => {
          const value = `${(i + 1) * 10}代`;
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
      <hr />
    </li>
  );
};

export default Age;

{
  /* <option value="10s">10代</option>
<option value="20s">20代</option>
<option value="30s">30代</option>
<option value="40s">40代</option>
<option value="50s">50代</option>
<option value="60s">60代</option>
<option value="70s">70代</option>
<option value="80s">80代</option>
<option value="90s">90代</option> */
}
