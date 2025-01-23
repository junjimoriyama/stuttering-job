// type
import { allDataType } from "@/types/story";
// components
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { BackStoryBtn } from "../components/backStoryBtn/BackStoryBtn";
// style
import "./storyItem.scss";
import { UpHandChara } from "@/assets/svg/character/characterSvg";

// 各体験談
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // 非同期的にparamsを処理
  const { id } = await params;

  // APIリクエスト
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user_data/${id}`, {
    method: "GET",
  });

  // if (!res.ok) {
  //   return <div>エラーが発生しました。</div>;
  // }

  const data: allDataType = await res.json();

  return (
    <>
      <Header />
      <div className="single_story">
        <div className="single_story_heading">
          <p>{data.username}さんの体験談</p>
        </div>
        <ul className="single_story_list">
          <UpHandChara />
          <li className="single_story_item">
            <span className="single_story_label">No</span>
            <span className="single_story_value">{data.id}</span>
          </li>
          <li className="single_story_item">
            <span className="single_story_label">年代</span>
            <span className="single_story_value">{data.age}代</span>
          </li>
          <li className="single_story_item">
            <span className="single_story_label">性別</span>
            <span className="single_story_value">{data.gender}</span>
          </li>
          <li className="single_story_item">
            <span className="single_story_label">業種</span>
            <span className="single_story_value">{data.industry}</span>
          </li>
          <li className="single_story_item">
            <span className="single_story_label">具体的な仕事内容</span>
            <span className="single_story_value">
              {data.detail || "未記載"}
            </span>
          </li>
          <li className="single_story_item">
            <span className="single_story_label">今の仕事を選んだ理由</span>
            <span className="single_story_value">
              {data.reason || "未記載"}
            </span>
          </li>
          <li className="single_story_item">
            <span className="single_story_label">働き方</span>
            <span className="single_story_value">{data.employment}</span>
          </li>
          <li className="single_story_item">
            <span className="single_story_label">勤続年数</span>
            <span className="single_story_value">{data.years}</span>
          </li>
          <li className="single_story_item single_story_number">
            <span className="single_story_label">吃音による仕事の苦労度</span>
            <div className="single_story_level">
              <span>小</span>
              {[...Array(5)].map((_, i) => {
                const value = i + 1;
                return (
                  <span
                    className={`single_story_level_difficulty ${
                      value === data.job_difficulty ? "isActive" : ""
                    }`}
                    key={value}
                  >
                    {value}
                  </span>
                );
              })}
              <span>大</span>
            </div>
          </li>
          <li className="single_story_item">
            <span className="single_story_label">仕事の苦労や工夫</span>
            <span className="single_story_value">
              {data.job_struggles || "未記載"}
            </span>
          </li>
          <li className="single_story_item single_story_number">
            <span className="single_story_label">
              吃音による就職活動の苦労度
            </span>
            <div className="single_story_level">
              <span>小</span>
              {[...Array(5)].map((_, i) => {
                const value = i + 1;
                return (
                  <span
                    className={`single_story_level_difficulty ${
                      value === data.job_hunt_difficulty ? "isActive" : ""
                    }`}
                    key={value}
                  >
                    {value}
                  </span>
                );
              })}
              <span>大</span>
            </div>
          </li>
          <li className="single_story_item">
            <span className="single_story_label">就職活動中の苦労や工夫</span>
            <span className="single_story_value">
              {data.job_hunt_struggles || "未記載"}
            </span>
          </li>
          <li className="single_story_item">
            <span className="single_story_label">障害者手帳の有無</span>
            <span className="single_story_value">{data.notebook}</span>
          </li>
          <li className="single_story_item">
            <span className="single_story_label">見ている人に向けて</span>
            <span className="single_story_value">{data.free || "未記載"}</span>
          </li>
          <li className="single_story_item">
            <span className="single_story_label">投稿日</span>
            <span className="single_story_value">
              {new Date(data.created_at).toLocaleDateString("ja-JP")}
            </span>
          </li>
        </ul>
      <BackStoryBtn />
      </div>
      <Footer />
    </>
  );
};

export default Page;
