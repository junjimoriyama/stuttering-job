'use client'

import React from "react";

export const AgeSearch = (
  {
    age,
    setAge
  } : {
    age: number,
    setAge: (value: number) => void
  }
) => {
  return (
    <li>
      <select 
      id="age"
      onChange={(e) => setAge(Number(e.target.value))}
      defaultValue={''}
      >
        <option value="">
          選択しない
        </option>
        {[...Array(9)].map((_, i) => {
          const value = (i + 1) * 10;
          return (
            <option key={value} value={value}>
              {value}代
            </option>
          );
        })}
      </select>
    </li>
  );
};
