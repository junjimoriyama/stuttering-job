"use client";

import "./header.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HeaderMainLogo } from "@/public/svg/logo/logoSvg";
import { HomeIcon, LookIcon, MenuIcon, WriteIcon } from "@/public/svg/icon/menuIcon";

const Header = (
) => {

  const pathname = usePathname(); 
  // spメニュー
  const [ isShow, setIsShow  ] = useState(false)
  const handleMenuIconClick = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    // spメニューが開かれたら
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShow]);

  const [ isTopPage,  setIsTopPage ] = useState(false)

  useEffect(() => {
    if(pathname === "/top") {
      setIsTopPage(true)
    }
  }, [])


  return (
    <header className={`${isShow ? "isShow" : ""} ${isTopPage ? "isTopPage" : ""}`}>
      <div className={`header_wrap ${isShow ? "isShow" : ""} ${isTopPage ? "isTopPage" : ""}`}>
        {/* トップページ以外又はどのページでもisShowクラスがついたら表示 */}
        {(pathname !== "/top" || isShow) && <HeaderMainLogo isShow={isShow} />}


        <ul className="header_menu">
          <li className="header_item">
            <span>
              <HomeIcon />
            </span>
            <span className="header_item_text">ホーム</span>
          </li>
          <li className="header_item">
            <span>
              <LookIcon />
            </span>
            <span className="header_item_text">見る</span>
          </li>
          <li className="header_item">
            <span>
              <WriteIcon />
            </span>
            <span className="header_item_text">書く</span>
          </li>
        </ul>

        {/* sp用メニュー */}
        <ul className={`sp_header_menu ${isShow ? "isShow" : ""}`}>
          <li className="sp_header_item">
            <span>{/* <HomeIconWhite /> */}</span>
            <span className="sp_header_item_text">ホーム</span>
          </li>
          <li className="sp_header_item">
            <span>{/* <LookIcon /> */}</span>
            <span className="sp_header_item_text">見る</span>
          </li>
          <li className="sp_header_item">
            <span>{/* <WriteIcon /> */}</span>
            <span className="sp_header_item_text">書く</span>
          </li>
        </ul>
        <MenuIcon isShow={isShow} handleMenuIconClick={handleMenuIconClick} />
      </div>
    </header>
  );
};

export default Header;
