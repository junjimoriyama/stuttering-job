"use client";

// react
import { useRef, useState } from "react";
// svg
import {
  LoadingChara,
  QuestionChara,
  RepeatChara,
  StopChara,
  StretchChara,
  UpHandChara,
} from "@/assets/svg/character/characterSvg";
// style
import "./learnContent.scss";
import useIntersectionObserver from "@/functions/functions";

const LearnContent = () => {
  // 吃音について
  const [isAboutTitleVisible, setIsAboutTitleVisible] = useState(false);
  const [isAboutTextVisible, setIsAboutTextVisible] = useState(false);
  const aboutTitleRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(aboutTitleRef, setIsAboutTitleVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(aboutTextRef, setIsAboutTextVisible, {
    threshold: 0.5,
  });

  //原因
  const [isCauseTitleVisible, setIsCauseTitleVisible] = useState(false);
  const [isCauseTextVisible, setIsCauseTextVisible] = useState(false);
  const causeTitleRef = useRef<HTMLDivElement>(null);
  const causeTextRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(causeTitleRef, setIsCauseTitleVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(causeTextRef, setIsCauseTextVisible, {
    threshold: 0.5,
  });

  //症状
  const [isSymptomsTitleVisible, setIsSymptomsTitleVisible] = useState(false);
  const [isSymptomsTextVisible, setIsSymptomsTextVisible] = useState(false);
  const [isSymptomsIllustrationVisible, setIsSymptomsIllustrationVisible] =
    useState(false);
  const symptomsTitleRef = useRef<HTMLDivElement>(null);
  const symptomsTextRef = useRef<HTMLDivElement>(null);
  const symptomsIllustrationRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(symptomsTitleRef, setIsSymptomsTitleVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(symptomsTextRef, setIsSymptomsTextVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(
    symptomsIllustrationRef,
    setIsSymptomsIllustrationVisible,
    {
      threshold: 0.5,
    }
  );
  //出やすい場面
  const [isTriggerTitleVisible, setIsTriggerTitleVisible] = useState(false);
  const [isTriggerTextVisible, setIsTriggerTextVisible] = useState(false);
  const triggerTitleRef = useRef<HTMLDivElement>(null);
  const triggerTextRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(triggerTitleRef, setIsTriggerTitleVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(triggerTextRef, setIsTriggerTextVisible, {
    threshold: 0.2,
  });

  // 配慮
  const [isConsiderationTitleVisible, setIsConsiderationTitleVisible] =
    useState(false);
  const [isConsiderationTextVisible, setIsConsiderationTextVisible] =
    useState(false);
  const considerationTitleRef = useRef<HTMLDivElement>(null);
  const considerationTextRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(
    considerationTitleRef,
    setIsConsiderationTitleVisible,
    {
      threshold: 0.5,
    }
  );
  useIntersectionObserver(considerationTextRef, setIsConsiderationTextVisible, {
    threshold: 0.2,
  });



  return (
    <div className="learn_content">
      <div className="learn_title">
        吃音のこと
        <QuestionChara />
      </div>

      {/* 吃音について */}
      <section className="learn_about">
        <div
          className={`learn_about_title ${
            isAboutTitleVisible ? "isVisible" : ""
          }`}
          ref={aboutTitleRef}
        >
          <div className="learn_about_title_text">吃音とは？</div>
          {/* <PointingChara /> */}
        </div>
        <div
          className={`learn_about_description ${
            isAboutTextVisible ? "isVisible" : ""
          }`}
          ref={aboutTextRef}
        >
          吃音(きつおん)と読み、思い浮かべた言葉をスムーズに話すことができない発話障害です。
          現在では発達障害の一つとして分類されています。
          その症状は人それぞれ異なり、およそ100人に1人の割合で見られると言われています。残念ながら、今のところ根本的な治療法は見つかっていません。
        </div>
      </section>

      {/* 原因 */}
      <section className="learn_cause">
        <div
          className={`learn_cause_title ${
            isCauseTitleVisible ? "isVisible" : ""
          }`}
          ref={causeTitleRef}
        >
          <div className="learn_cause_title_text">原因は？</div>
        </div>

        <div
          className={`learn_cause_description ${
            isCauseTextVisible ? "isVisible" : ""
          }`}
          ref={causeTextRef}
        >
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

      {/* 症状 */}
      <section className="learn_symptoms">
        <div
          className={`learn_symptoms_title ${
            isSymptomsTitleVisible ? "isVisible" : ""
          }`}
          ref={symptomsTitleRef}
        >
          <div className="learn_symptoms_title_text">症状は？</div>
        </div>
        <div
          className={`learn_symptoms_description ${
            isSymptomsTextVisible ? "isVisible" : ""
          }`}
          ref={symptomsTextRef}
        >
          <p>症状は主に３つあります。</p>
          一般的には大人の吃音ある人は言葉が出にくい難発型を伴う場合が多く、
          言葉を出すために顔をしかめたり、舌に力が入ったり、不自然に体を動かしたりする2次的な症状が見られることもあります。
        </div>
        <div
          ref={symptomsIllustrationRef}
          className={`learn_symptoms_illustration ${
            isSymptomsIllustrationVisible ? "isVisible" : ""
          }`}
        >
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
          <div className="learn_symptoms_illustration_stop">
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

      {/* 出やすいシーン */}
      <section className="learn_trigger">
        <div className="learn_trigger_group">
          <div
            className={`learn_trigger_title ${
              isTriggerTitleVisible ? "isVisible" : ""
            }`}
            ref={triggerTitleRef}
          >
            <div className="learn_trigger_title_text">
              職場で吃音が出やすいシーン
            </div>
            {/* <PointingChara /> */}
          </div>
          <div
            className={`learn_trigger_description ${
              isTriggerTextVisible ? "isVisible" : ""
            }`}
            ref={triggerTextRef}
          >
            <div className="learn_trigger_description_item">
              <p className="learn_trigger_description_summary">
                プレゼンや説明
              </p>
              <p className="learn_trigger_description_detail">
                途中で言葉を置き換えたり省略が難しく、順序立てて話す必要がある場面。
              </p>
            </div>

            <div className="learn_trigger_description_item">
              <p className="learn_trigger_description_summary">電話対応</p>
              <p className="learn_trigger_description_detail">
                声だけのやり取りで、相手の表情や反応が見えない場面。
              </p>
            </div>

            <div className="learn_trigger_description_item">
              <p className="learn_trigger_description_summary">
                上司や取引先とのやり取り
              </p>
              <p className="learn_trigger_description_detail">
                商談や進捗報告など、緊張を伴うやり取りの場面。
              </p>
            </div>

            <div className="learn_trigger_description_item">
              <p className="learn_trigger_description_summary">
                自己紹介やスピーチ
              </p>
              <p className="learn_trigger_description_detail">
                歓迎会やイベントなどで名前や挨拶を話す場面。
              </p>
            </div>

            <div className="learn_trigger_description_item">
              <p className="learn_trigger_description_summary">
                報告、連絡、相談（ホウレンソウ）
              </p>
              <p className="learn_trigger_description_detail">
                進捗確認や報告など、正確な情報伝達が求められる場面。
              </p>
            </div>

            <div className="learn_trigger_description_item">
              <p className="learn_trigger_description_summary">
                社訓の読み上げ
              </p>
              <p className="learn_trigger_description_detail">
                言い換えができず、決まった文章を読む場面。
              </p>
            </div>

            <div className="learn_trigger_description_message">
              人により違いはありますが、このような傾向があると言われていますし、当事者として感じます。これらの状況では、話す際の負担を軽減するために、周囲の理解やサポートが重要です。
            </div>
          </div>
        </div>
      </section>

      {/* 配慮 */}
      <section className="learn_consideration">
        <div className="learn_consideration_group">
          <div
            className={`learn_consideration_title ${
              isConsiderationTitleVisible ? "isVisible" : ""
            }`}
            ref={considerationTitleRef}
          >
            <div className="learn_consideration_title_text">
              働く場所で配慮できること
            </div>
          </div>

          <div
            className={`learn_consideration_description ${
              isConsiderationTextVisible ? "isVisible" : ""
            }`}
            ref={considerationTextRef}
          >
            {/* <div className="learn_consideration_description_item">
            <p className="learn_consideration_summary">
              発言を強制しない雰囲気づくり
            </p>
            <p className="learn_consideration_detail">
              意見を求める際は、無理に発言を求めず、話しやすい空気をつくる。
            </p>
          </div> */}

            <div className="learn_consideration_description_item">
              <p className="learn_consideration_summary">代替手段の提供</p>
              <p className="learn_consideration_detail">
                発言が難しい場合は、メモやメール、チャットツールでの報告を許可する。
              </p>
            </div>

            <div className="learn_consideration_description_item">
              <p className="learn_consideration_summary">
                発表形式の柔軟な選択
              </p>
              <p className="learn_consideration_detail">
                プレゼンでは、スライドや動画を使った補助を認めるなど、話し方以外で伝えられる方法を用意する。
              </p>
            </div>

            <div className="learn_consideration_description_item">
              <p className="learn_consideration_summary">電話対応の負担軽減</p>
              <p className="learn_consideration_detail">
                必要に応じてメール、チャットツール対応を優先させたり、他のメンバーと分担する。
              </p>
            </div>

            <div className="learn_consideration_description_item">
              <p className="learn_consideration_summary">
                自己紹介やスピーチのサポート
              </p>
              <p className="learn_consideration_detail">
                なるべく本人のペースででき、簡潔な自己紹介にするなどの配慮をする。
              </p>
            </div>

            <div className="learn_consideration_description_item">
              <p className="learn_consideration_summary">
                相談しやすい環境づくり
              </p>
              <p className="learn_consideration_detail">
                話しにくさを理解し、困りごとを気軽に相談できる雰囲気をつくる。
              </p>
            </div>
            <div className="learn_trigger_consideration_message">
              これらの配慮を通じて、吃音のある方が少しでも安心して自分らしく働ける職場ができれば幸いです。
            </div>
          </div>
        </div>
      </section>

      <UpHandChara />
    </div>
  );
};

export default LearnContent;

// この様な配慮を受けることにより吃音ある人が
