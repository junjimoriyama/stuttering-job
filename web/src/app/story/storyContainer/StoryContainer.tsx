import React from 'react'
import StoreRender from './storyRender/StoreRender'

export const StoryContainer = async() => {

  // データ取得
  const res = await fetch("http://localhost:3000/api/v1/forms", {
    method: "GET"
  })

  const data = await res.json()

  return (
    <>
    <StoreRender data={data}/>
    </>
  )
}