"use client";

import "./footer.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FooterMainLogo, HeaderMainLogo } from "@/public/svg/logo/logoSvg";
import { HomeIcon, HomeIconWhite, LookIcon, LookIconWhite, MenuIcon, WriteIcon, WriteIconWhite } from "@/public/svg/icon/menuIcon";

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
      <div className={`footer_wrap ${isShow ? "isShow" : ""}`}>
        {/* トップページ以外又はどのページでもisShowクラスがついたら表示 */}
        <FooterMainLogo/>

        {/* sp用メニュー */}
        <ul className="sp_footer_menu">
          <li className="sp_footer_item">
            {/* <span><HomeIconWhite /></span> */}
            <span className="sp_footer_item_text">ホーム</span>
          </li>
          <li className="sp_footer_item">
            {/* <span><LookIconWhite /></span> */}
            <span className="sp_footer_item_text">見る</span>
          </li>
          <li className="sp_footer_item">
            {/* <span><WriteIconWhite /></span> */}
            <span className="sp_footer_item_text">書く</span>
          </li>
        </ul>
        <small className="copyRight">&copy; 2025 ⚪︎⚪︎ All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
