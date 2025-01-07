"use client";

import "./footer.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FooterMainLogo, HeaderMainLogo } from "@/assets/svg/logo/logoSvg";
import {
  HomeIcon,
  HomeIconWhite,
  LookIcon,
  LookIconWhite,
  MenuIcon,
  WriteIcon,
  WriteIconWhite,
} from "@/assets/svg/icon/menuIcon";
import { SilhouetteChara } from "@/assets/svg/character/characterSvg";

const Footer = () => {
  const pathname = usePathname();
  // spメニュー
  const [isShow, setIsShow] = useState(false);
  const handleMenuIconClick = () => {
    setIsShow(!isShow);
  };

  const [isTopPage, setIsTopPage] = useState(false);

  useEffect(() => {
    if (pathname === "/top") {
      setIsTopPage(true);
    }
  }, []);

  return (
    <footer className={`${isShow ? "isShow" : ""}`}>
      <div className="footer_wrap">
        {/* トップページ以外又はどのページでもisShowクラスがついたら表示 */}

        {/* sp用メニュー */}
        <FooterMainLogo />
        <div className="footer_menu_and_chara">
          <ul className="footer_menu">
            <li className="footer_item">
              <span className="footer_item_text">ホーム</span>
            </li>
            <li className="footer_item">
              <span className="footer_item_text">見る</span>
            </li>
            <li className="footer_item">
              <span className="footer_item_text">書く</span>
            </li>
            <li className="footer_item">
              <span className="footer_item_text">知る</span>
            </li>
          </ul>
          <SilhouetteChara />
        </div>
      <small className="copyRight">
        &copy; 2025 ⚪︎⚪︎ All rights reserved.
      </small>
      </div>
    </footer>
  );
};

export default Footer;
