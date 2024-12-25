import React from 'react'

export const GenderSearch = (
  {
    gender,
    setGender
  } : {
    gender: string,
    setGender: (value: string) => void
  }
) => {
  return (
    <li>
    <select 
    id="gender"
    onChange={(e) => setGender(e.target.value)}
    defaultValue={''}
    >
       <option value="">
          選択しない
        </option>
        <option value="男性">男性</option>
        <option value="女性">女性</option>
        <option value="どちらでもない">どちらでもない</option>
        <option value="無回答">無回答</option>
    </select>
  </li>
  )
}
