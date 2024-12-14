import { HeaderMainLogo, HomeIcon, LookIcon, WriteIcon } from "@/public/svg/svg";
import "./topHeader.scss";

const TopHeader = () => {
  return (
    <header>
    <ul className="top_header_menu">
      <li className="top_header_item">
        <span>
          <HomeIcon />
        </span>
        ホーム
      </li>
      <li className="top_header_item">
        <span>
          <LookIcon />
        </span>
        見る
      </li>
      <li className="top_header_item">
        <span>
        <WriteIcon />
        </span>
        書く
      </li>
    </ul>
  </header>
  );
};

export default TopHeader;
