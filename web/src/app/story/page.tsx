// story.tsx
import { StoryRender } from "./storyRender/StoryRender";

const fetchData = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/user_data`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Story = async () => {
  const data = await fetchData();

  return (
    <div className="story">
      <StoryRender fetchData={data} />
    </div>
  );
};

export default Story;
