import { allDataType } from '@/app/types/story';
import React from 'react'

const page = ({
  data,
  index,
  }: {
    data: allDataType;
    index: number;
}) => {

  console.log(data)
  // http://localhost:3001/story/storyContainer/storyRender/mainArea/storyItems/storyItem/1

  return (
    <div>
      {/* <ul className="accordion_stories">
          <li className="accordion_story_item">
            <span className="accordion_story_label">ニックネーム</span>
            <span className="accordion_story_value">{data.username}</span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">具体的な仕事内容</span>
            <span className="accordion_story_value">{data.detail}</span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">今の仕事を選んだ理由</span>
            <span className="accordion_story_value">{data.reason}</span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">働き方</span>
            <span className="accordion_story_value">{data.employment}</span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">勤続年数</span>
            <span className="accordion_story_value">{data.years}</span>
          </li>
          <li className="accordion_story_item accordion_story_number">
            <span className="accordion_story_label">
              吃音による仕事の苦労度
            </span>
            <div className="accordion_story_level">
              <span className="accordion_story_value">小</span>
              {[...Array(5)].map((_, i) => {
                const value = i + 1;
                return (
                  <span
                    className={`accordion_story_level_difficulty ${
                      value === data.job_difficulty ? "isActive" : ""
                    }`}
                    key={value}
                  >
                    {value}
                  </span>
                );
              })}
              <span className="accordion_story_value">大</span>
            </div>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">
              就職活動中の苦労や工夫
            </span>
            <span className="accordion_story_value">{data.job_struggles}</span>
          </li>
          <li className="accordion_story_item accordion_story_number">
            <span className="accordion_story_label">
              吃音による就職活動の苦労度
            </span>
            <div className="accordion_story_level">
              <span className="accordion_story_value">小</span>
              {[...Array(5)].map((_, i) => {
                const value = i + 1;
                return (
                  <span
                    className={`accordion_story_level_difficulty ${
                      value === data.job_hunt_difficulty ? "isActive" : ""
                    }`}
                    key={value}
                  >
                    {value}
                  </span>
                );
              })}
              <span className="accordion_story_value">大</span>
            </div>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">
              就職活動中の苦労や工夫
            </span>
            <span className="accordion_story_value">
              {data.job_hunt_struggles}
            </span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">障害者手帳の有無</span>
            <span className="accordion_story_value">{data.notebook}</span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">見ている人に向けて</span>
            <span className="accordion_story_value">{data.free}</span>
          </li>
          <li className="accordion_story_item">
            <span className="accordion_story_label">投稿日</span>
            <span className="accordion_story_value">
              {new Date(data.created_at).toLocaleDateString("ja-JP")}
            </span>
          </li>
        </ul> */}
    </div>
  )
}

export default page