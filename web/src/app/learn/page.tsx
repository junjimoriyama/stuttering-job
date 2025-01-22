// components
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import LearnContent from "./learnContent/LearnContent";
import BackGroundAnimation from "../top/components/backgroundAnimation/BackgroundAnimation";

const learn = () => {
  return (
    <div className="learn">
      {/* <BackGroundAnimation /> */}
      <Header />
      <LearnContent/>
      <Footer />
    </div>
  );
};

export default learn;

// 職場で吃音が出やすいシーン
// •  会議中の発言
// 突然指名され、大勢の前で意見を求められる場面。
// •  プレゼンや説明
// 途中で言葉を置き換えたり省略が難しく、順序立てて話す必要がある場面。
// •  電話対応
// 声だけのやり取りで、相手の表情や反応が見えない場面。
// •  上司や取引先とのやり取り
// 商談や進捗報告など、緊張を伴うやり取りの場面。
// •  自己紹介やスピーチ
// 歓迎会やイベントなどで名前や挨拶を話す場面。
// •  報告・連絡・相談（ホウレンソウ）
// 進捗確認や報告など、正確な情報伝達が求められる場面。
// ・　社訓の読み上げ
// 言い換えができず、決まった文章を読む場面。

// 発言を強制しない雰囲気づくり
// 意見を求める際は、無理に発言を求めず、話しやすい空気をつくる。
// 代替手段の提供
// 発言が難しい場合は、メモやメール、チャットツールでの報告を許可する。
// 発表形式の柔軟な選択
// プレゼンでは、スライドや動画を使った補助を認めるなど、話し方以外で伝えられる方法を用意する。
// 電話対応の負担軽減
// 必要に応じてメール、チャットツール対応を優先させたり、他のメンバーと分担する。
// 自己紹介やスピーチのサポート
// なるべく本人のペースででき、簡潔な自己紹介にするなどの配慮をする。
// 相談しやすい環境づくり
// 話しにくさを理解し、困りごとを気軽に相談できる雰囲気をつくる。
