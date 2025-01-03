"use client"

import { useRouter } from 'next/navigation'
import "./backStoryBtn.scss"

export const BackStoryBtn = () => {

  const router = useRouter()

  return (
    <div 
    className="back_story_btn"
    onClick={() => router.push("/story")}
    >
      戻る
    </div>
  )
}
