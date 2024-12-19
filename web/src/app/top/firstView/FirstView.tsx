import "./firstView.scss";
import { MainLogo } from "@/public/svg/logo/logoSvg";

const FirstView = () => {
  return (
    <div className="first_view">
      <div className="first_view_wrap">
        <MainLogo />
      </div>
        <div className="first_view_Text">
          <p>ここは吃音症という悩みがありながら</p>
          <p>働いている人の</p>
          <p>リアルな体験談を集めた場所です。</p>
        </div>
    </div>
  );
};

export default FirstView;
