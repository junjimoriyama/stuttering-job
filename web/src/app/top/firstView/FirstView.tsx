import {
  FirstViewLogo,
  MainLogo,
  SpeechBubbleCircleLeft,
  SpeechBubbleCircleRight,
  SpeechBubbleRectLeft,
  SpeechBubbleRectRight,
} from "@/public/svg/svg";
import "./firstView.scss";

const speechBubbleData = [
  {
    id: "bubble1",
    className: "circleLeft",
    component: <SpeechBubbleCircleLeft />,
  },
  {
    id: "bubble2",
    className: "circleRight",
    component: <SpeechBubbleCircleRight />,
  },
  { id: "bubble3", className: "rectLeft", component: <SpeechBubbleRectLeft /> },
  {
    id: "bubble4",
    className: "rectRight",
    component: <SpeechBubbleRectRight />,
  },
];

const FirstView = () => {
  return (
    <div className="firstView">
      {/* <FirstViewLogo /> */}
      <div className="logo_catch">
      <MainLogo />
      <div className="catch">
        <p>ここは吃音症という悩みがありながら</p>
        <p>働いている人の</p>
        <p>リアルな体験談を集めた場所です。</p>
      </div>

      </div>
      {[...Array(5)].map((_, index) =>
        speechBubbleData.map((bubble) => (
          <li
            className={`speech_bubble ${bubble.className}_${index + 1}`}
            key={bubble.id}
          >
            {bubble.component}
          </li>
        ))
      )}
    </div>
  );
};

export default FirstView;
