// components
import { StoryRender } from "./storyRender/StoryRender";
// style
import "./story.scss";

const story = async() => {

    // データ取得
    const res = await fetch(`${process.env.API_URL}/api/v1/user_data`, {
      method: "GET",
      cache: 'no-store' 
    })
  
    const fetchData = await res.json()
    
  return (
    <div className="story">
      <StoryRender fetchData={fetchData}/>
    </div>
  );
};

export default story;
