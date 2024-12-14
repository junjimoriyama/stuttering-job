import {
  FirstViewLogo,
  SpeechBubbleCircleLeft,
  SpeechBubbleCircleRight,
  SpeechBubbleRectLeft,
  SpeechBubbleRectRight,
} from "@/public/svg/svg";
import FirstView from "./firstView/FirstView";

import "./top.scss";
// import Header from "../components/header/Header";
import TopHeader from "../components/header/TopHeader";

const page = () => {
  return (
    <div className="top">
      <TopHeader />
      <FirstView />
    </div>
  );
};

export default page;
