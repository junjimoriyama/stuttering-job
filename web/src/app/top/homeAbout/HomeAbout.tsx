"use client";

// react
import { useState, useRef } from "react";
// functions
import useIntersectionObserver from "@/app/functions/functions";
// svg
import {
  HomeAboutChara,
  LookChara,
  WriteChara,
} from "@/public/svg/character/characterSvg";
// style
import "./homeAbout.scss";
import { useRouter } from "next/navigation";

const HomeAbout = () => {
  // useRouter
  const router = useRouter()
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
          <p>吃音ある人にとって「ことば」の部分</p>
          <p>で仕事に大きな不安を抱えている人が</p>
          <p>とても多くいます。</p>
          <p>「みんな、こんな風に働いているんだ」</p>
          <p>と知ることで、自分の未来を考える</p>
          <p>ヒントを見つけてください。</p>
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
          ここでは体験談を「見る」と「書く」ことができます。
        </div>
        <div className="home_about_look">
          <div
            className={`home_about_look_bubble ${
              isLookBubbleVisible ? "isVisible" : ""
            }`}
            ref={homeAboutLookBubbleRef}
          >
            <div 
            className="home_about_look_heading">
            「見る」
            </div>
            <div className="home_about_look_Content">
              うまく話せずに苦労したことや日々の工夫など、さまざまな人の体験談を見ることができます。年代、性別や業種などを通じて仕事に対するイメージにつながれば嬉しいです。
            </div>
            <button 
            className="link_look_btn"
            onClick={() => router.push('/story')}
            >見るページへ</button>
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
              「書く」
              </div>
            <div className="home_about_write_Content">
              ご自身の体験投稿にご協力お願いいたします。一つひとつの貴重な体験談が、仕事に対して悩みがある誰かにとって新たな気づきや安心感につながるかもしれません。
            </div>
            <button 
            className="link_write_btn"
            onClick={() => router.push('/form/input')}
            >書くページへ</button>
          </div>
          <WriteChara
            isWriteBlockVisible={isWriteBlockVisible}
            homeAboutWriteBlockRef={homeAboutWriteBlockRef}
            isWriteCharaVisible={isWriteCharaVisible}
            homeAboutWriteCharaRef={homeAboutWriteCharaRef}
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
