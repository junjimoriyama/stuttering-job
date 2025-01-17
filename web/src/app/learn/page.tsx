import Header from "@/components/layout/header/Header";
import "./learn.scss";
import {
  PointingChara,
  QuestionChara,
  RepeatChara,
  StopChara,
  StretchChara,
} from "@/assets/svg/character/characterSvg";
import Footer from "@/components/layout/footer/Footer";

const learn = () => {
  return (
    <>
      <Header />
      <div className="learn">
        <div className="learn_title">
          吃音のこと
          <QuestionChara />
        </div>
        <section className="learn_about">
          <div className="learn_about_title">
            <p className="learn_about_title_text">吃音とは？</p>
            {/* <PointingChara /> */}
          </div>
          <div className="learn_about_description">
            吃音(きつおん)と読み、思い浮かべた言葉をスムーズに話すことができない
            発話障害です。 現在では発達障害の一つとして分類されています。
            その症状は人それぞれ異なり、およそ100人に1人
            の割合で見られると言われています。
            残念ながら、今のところ根本的な治療法は 見つかっていません。
          </div>
        </section>

        <section className="learn_cause">
          <div className="learn_cause_title">
            <p className="learn_cause_title_text">原因は？</p>
          </div>
          <div className="learn_cause_description">
            吃音は「生まれ持った体質」や「脳の働き」、
            さらに「周囲の環境」や「メンタルの状態」など、
            さまざまな要因が関わって発生することがあります。
            特に緊張する場面では症状が強まる
            ことがありますが、それは単なる気持ちの問題ではなく
            、身体のメカニズムが大きく関係しています。
            症状が悪化する原因は「努力不足」や「心の弱さ」ではなく、
            複数の要因が重なり合った結果と考えられています。
          </div>
        </section>

        <section className="learn_symptoms">
          <div className="learn_symptoms_title">
            <p className="learn_symptoms_title_text">症状は？</p>
          </div>
          <div className="learn_cause_description">
            <p>症状は主に３つあります。</p>
            一般的には大人の吃音ある人は言葉が出にくい難発型を伴う場合が多く、
            言葉を出すために顔をしかめたり、舌に力が入ったり、不自然に体を動かしたりする2次的な症状が見られることもあります。
          </div>
          <div className="learn_symptoms_illustration">
            <div className="learn_symptoms_illustration_repeat">
              <p className="learn_symptoms_illustration_bubble">
                <span className="repeat_word1">あ、</span>
                <span className="repeat_word2">あ、</span>
                <span className="repeat_word3">ありがとう</span>
              </p>
              <RepeatChara />
              <p>音の繰り返し（連発）</p>
            </div>
            <div className="learn_symptoms_illustration_stretch">
              <p className="learn_symptoms_illustration_bubble">
              <span className="repeat_word1">あ</span>
                <span className="repeat_word2">-----</span>
                <span className="repeat_word3">りがとう</span>
              </p>
              <StretchChara />
              <p>引き伸ばし（伸発）</p>
            </div>
            <div className="learn_symptoms_illustration_stretch">
              <p className="learn_symptoms_illustration_bubble">
              <span className="repeat_word1">・ </span>
                <span className="repeat_word2">・ </span>
                <span className="repeat_word3">ありがとう</span>
              </p>
              <StopChara />
              <p>言葉が出ない（難発）</p>
            </div>
          </div>
        </section>

        <section className="learn_trigger"></section>
        <section className="learn_consideration"></section>
      </div>
      <Footer />
    </>
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
