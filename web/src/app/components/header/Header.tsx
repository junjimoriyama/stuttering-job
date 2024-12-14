"use client"

import { HeaderMainLogo, HomeIcon, LookIcon, MenuIcon, WriteIcon } from "@/public/svg/svg";
import "./header.scss";
import { useState } from "react";

const Header = () => {


  const [ isShow, setIisShow  ] = useState(false)

  return (
<header>
      <div className="header_wrap">
      <HeaderMainLogo />

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
    <MenuIcon 
      isShow={isShow}
      setIsShow={setIisShow}
    />
      </div>
    </header>
  );
};

export default Header;