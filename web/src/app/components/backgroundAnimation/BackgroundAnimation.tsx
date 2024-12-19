import {
  SpeechBubbleCircleLeft,
  SpeechBubbleCircleRight,
  SpeechBubbleRectLeft,
  SpeechBubbleRectRight,
} from "@/public/svg/icon/speechBubbuleSvg";

import './backgroundAnimation.scss'

const BackGroundAnimation = () => {

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
  return (
    <div className="backgroundAnimation">
      {[...Array(8)].map((_, index) =>
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
  )
}

export default BackGroundAnimation