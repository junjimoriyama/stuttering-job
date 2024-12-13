import {
  FirstViewLogo,
  SpeechBubbleCircleLeft,
  SpeechBubbleCircleRight,
  SpeechBubbleRectLeft,
  SpeechBubbleRectRight,
} from "@/public/svg/svg";
import FirstView from "./firstView/FirstView";

import "./top.scss";

const page = () => {
  return (
    <div className="top">
      <FirstView />
    </div>
  );
};

export default page;
