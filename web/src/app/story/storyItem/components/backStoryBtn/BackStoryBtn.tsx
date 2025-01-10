"use client"

import { useRouter } from 'next/navigation'
import "./backStoryBtn.scss"

export const BackStoryBtn = () => {

  const router = useRouter()

  return (
    <div 
    className="back_story_btn"
    // 遷移前の位置から変えない
    onClick={() => router.back()}
    // onClick={() => router.push("/story")}
    >
      戻る
    </div>
  )
}
