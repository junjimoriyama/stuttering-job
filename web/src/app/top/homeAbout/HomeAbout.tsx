"use client";

// react
import { useState, useRef } from "react";
// functions
import useIntersectionObserver from "@/functions/functions";
// svg
import {
  HomeAboutChara,
  LearnChara,
  LookChara,
  WriteChara,
} from "@/assets/svg/character/characterSvg";
// style
import "./homeAbout.scss";
import { useRouter } from "next/navigation";
import {
  LookIcon,
  LookIconWhite,
  WriteIconQuestion,
  WriteIconWhite,
} from "@/assets/svg/icon/menuIcon";

const HomeAbout = () => {
  // useRouter
  const router = useRouter();
  // 説明
  const homeAboutRef = useRef<HTMLDivElement>(null);
  const homeAboutTextRef = useRef<HTMLDivElement>(null);
  const homeAboutBlockRef = useRef<SVGGElement>(null);
  const homeAboutCharaRef = useRef<SVGSVGElement>(null);
  const homeAboutHeadingRef = useRef<HTMLDivElement>(null);
  // 見る
  const homeAboutLookBubbleRef = useRef<HTMLDivElement>(null);
  const homeAboutLookBlockRef = useRef<SVGGElement>(null);
  const homeAboutLookCharaRef = useRef<SVGSVGElement>(null);
  // 書く
  const homeAboutWriteBubbleRef = useRef<HTMLDivElement>(null);
  const homeAboutWriteBlockRef = useRef<SVGGElement>(null);
  const homeAboutWriteCharaRef = useRef<SVGSVGElement>(null);
  // 知る
  const homeAboutLearnBubbleRef = useRef<HTMLDivElement>(null);
  const homeAboutLearnBlockRef = useRef<SVGGElement>(null);
  const homeAboutLearnCharaRef = useRef<SVGSVGElement>(null);

  // 説明
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isBlockVisible, setIsBlockVisible] = useState(false);
  const [isCharaVisible, setIsCharaVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  // 見る
  const [isLookBubbleVisible, setIsLookBubbleVisible] = useState(false);
  const [isLookBlockVisible, setIsLookBlockVisible] = useState(false);
  const [isLookCharaVisible, setIsLookCharaVisible] = useState(false);
  // 書く
  const [isWriteBubbleVisible, setIsWriteBubbleVisible] = useState(false);
  const [isWriteBlockVisible, setIsWriteBlockVisible] = useState(false);
  const [isWriteCharaVisible, setIsWriteCharaVisible] = useState(false);
  // 知る
  const [isLearnBubbleVisible, setIsLearnBubbleVisible] = useState(false);
  const [isLearnBlockVisible, setIsLearnBlockVisible] = useState(false);
  const [isLearnCharaVisible, setIsLearnCharaVisible] = useState(false);

  // 説明
  useIntersectionObserver(homeAboutRef, setIsAboutVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(homeAboutTextRef, setIsTextVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(homeAboutBlockRef, setIsBlockVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(homeAboutCharaRef, setIsCharaVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(homeAboutHeadingRef, setIsHeadingVisible, {
    threshold: 0.5,
  });

  // 見る
  useIntersectionObserver(homeAboutLookBubbleRef, setIsLookBubbleVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(homeAboutLookBlockRef, setIsLookBlockVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(homeAboutLookCharaRef, setIsLookCharaVisible, {
    threshold: 0.5,
  });

  //書く
  useIntersectionObserver(homeAboutWriteBubbleRef, setIsWriteBubbleVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(homeAboutWriteBlockRef, setIsWriteBlockVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(homeAboutWriteCharaRef, setIsWriteCharaVisible, {
    threshold: 0.5,
  });

  // 知る
  useIntersectionObserver(homeAboutLearnBubbleRef, setIsLearnBubbleVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(homeAboutLearnBlockRef, setIsLearnBlockVisible, {
    threshold: 0.5,
  });
  useIntersectionObserver(homeAboutLearnCharaRef, setIsLearnCharaVisible, {
    threshold: 0.5,
  });

  return (
    <div
      className={`home_about ${isAboutVisible ? "isVisible" : ""}`}
      ref={homeAboutRef}
    >
      <div className="home_about_lead_wrap">
        <div
          className={`home_about_lead ${isTextVisible ? "isVisible" : ""}`}
          ref={homeAboutTextRef}
        >
          <div className="home_about_lead_heading">
            「みんな、こうやって働いているんだ！」
          </div>
          <div className="home_about_lead_text">
            <p>吃音ある人にとって言葉に対して</p>
            <p>仕事に大きな不安を抱えている人</p>
            <p>がとても多くいます。</p>
            <p>体験談を通して、自分の未来を</p>
            <p>考えるヒントを見つけてください。</p>
          </div>
        </div>
        <div className="home_about_chara">
          <HomeAboutChara
            isBlockVisible={isBlockVisible}
            homeAboutBlockRef={homeAboutBlockRef}
            isCharaVisible={isCharaVisible}
            homeAboutCharaRef={homeAboutCharaRef}
          />
        </div>
      </div>
      <div className="home_about_description_wrap">
        <div
          className={`home_about_overview ${
            isHeadingVisible ? "isVisible" : ""
          }`}
          ref={homeAboutHeadingRef}
        >
          体験談を「見る」と「書く」、吃音について「知る」ことができます。
        </div>
        <div className="home_about_look">
          <div
            className={`home_about_look_bubble ${
              isLookBubbleVisible ? "isVisible" : ""
            }`}
            ref={homeAboutLookBubbleRef}
          >
            <div className="home_about_look_heading">
              <LookIconWhite />
              「 見 る 」
            </div>
            <div className="home_about_look_Content">
              うまく話せずに苦労したことや日々の工夫など、さまざまな人の体験談を見ることができます。年代、性別や業種などを通じて仕事に対するイメージにつながれば嬉しいです。
            </div>
            <button
              className="link_look_btn"
              onClick={() => router.push("/story")}
            >
              見るページへ
            </button>
          </div>
          <LookChara
            isLookBlockVisible={isLookBlockVisible}
            homeAboutLookBlockRef={homeAboutLookBlockRef}
            isLookCharaVisible={isLookCharaVisible}
            homeAboutLookCharaRef={homeAboutLookCharaRef}
          />
        </div>

        <div className="home_about_write">
          <div
            className={`home_about_write_bubble ${
              isWriteBubbleVisible ? "isVisible" : ""
            }`}
            ref={homeAboutWriteBubbleRef}
          >
            <div className="home_about_write_heading">
              <WriteIconWhite />
              「 書 く 」
            </div>
            <div className="home_about_write_Content">
            ご自身の体験投稿にご協力お願いいたします。一つひとつの貴重な体験談が、仕事に対して悩みがある誰かにとって新たな気づきや安心感につながるかもしれません。
            </div>
            <button
              className="link_write_btn"
              onClick={() => router.push("/form/input")}
            >
              書くページへ
            </button>
          </div>
          <WriteChara
            isWriteBlockVisible={isWriteBlockVisible}
            homeAboutWriteBlockRef={homeAboutWriteBlockRef}
            isWriteCharaVisible={isWriteCharaVisible}
            homeAboutWriteCharaRef={homeAboutWriteCharaRef}
          />
        </div>
        
        <div className="home_about_learn">
          <div
            className={`home_about_learn_bubble ${
              isLearnBubbleVisible ? "isVisible" : ""
            }`}
            ref={homeAboutLearnBubbleRef}
          >
            <div className="home_about_learn_heading">
              <WriteIconQuestion />
              「 知 る 」
            </div>
            <div className="home_about_learn_Content">
            吃音について知ることは、自分自身はもちろん、当事者だけでなく、家族や友人、同僚、上司にとっても、理解を深めたり、必要な配慮を考えるきっかけになるかもしれません。
            </div>
            <button
              className="link_learn_btn"
              onClick={() => router.push("/learn")}
            >
              知るページへ
            </button>
          </div>
          <LearnChara
          isLearnBlockVisible={isLearnBlockVisible}
          homeAboutLearnBlockRef={homeAboutLearnBlockRef}
          isLearnCharaVisible={isLearnCharaVisible}
          homeAboutLearnCharaRef={homeAboutLearnCharaRef}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;

{
  /* <p> うまく話せずに苦労したことや</p>
            <p> 日々の工夫など、さまざまな人</p>
            <p> の体験談を見ることができます。</p>
            <p> 年代、性別や業種などを通じて</p>
            <p> 仕事に対するイメージにつなが</p>
            <p> れば嬉しいです。</p> */
}
