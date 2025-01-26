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


// 127942248
// E94573
// E48444

// 昨日電話してきゅんパスとの紐付けなしで指定席を取っていたということがわかったのですが、
// どこ見ても明確に指定席の予約を申し込んだきゅんパスから予約してくださいとは書いてなくて。
// 320円の手数料はかかってもいいので、そちらできゅんパスと紐付けしてもらいたい
// 指定席の買い方
// 購入後に駅ネットのマイページにあるきゅんパスの申し込みから

// 駅ねっとの予約時間
// 何時ごろに予約取れるか？