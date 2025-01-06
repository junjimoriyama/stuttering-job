"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// react
import { useEffect, useState, useMemo} from "react";
// svg
import { HeaderMainLogo } from "@/assets/svg/logo/logoSvg";
import {
  HomeIcon,
  LookIcon,
  MenuIcon,
  WriteIcon,
} from "@/assets/svg/icon/menuIcon";
// style
import "./header.scss";

const Header = () => {
  // パス
  const pathname = usePathname();
  // spメニュー
  const [isShow, setIsShow] = useState(false);

  // メニュークリックしたら
  const handleMenuIconClick = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    // spメニューが開かれたら背景スクロール
    if (isShow) {
      // 背景スクロール固定
      document.body.style.overflow = "hidden";
    } else {
      // 背景スクロール解除
      document.body.style.overflow = "auto";
    }
  }, [isShow]);

  // ページ遷移先にヘッダーのレイアウト変更、色でアクティブ化
  const { isTopPage, activePage } = useMemo(() => {
    if (pathname.includes("/top")) {
      return { isTopPage: true, activePage: "top" };
    } else if (pathname.includes("/story")) {
      return { isTopPage: false, activePage: "story" };
    } else if (pathname.includes("/form")) {
      return { isTopPage: false, activePage: "form" };
    }
    // デフォルト値
    return { isTopPage: false, activePage: "" };
  }, [pathname]);

  return (
    <>
    {/* Skipping auto-scroll エラー対処の<div></div> */}
      <div></div>
      <header
        className={`${isShow ? "isShow" : ""} ${isTopPage ? "isTopPage" : ""}`}
      >
        <div
          className={`header_wrap ${isShow ? "isShow" : ""} ${
            isTopPage ? "isTopPage" : ""
          }`}
        >
          {/* トップページ以外又はどのページでもisShowクラスがついたら表示 */}
          {(pathname !== "/top" || isShow) && (
            <Link href="/top">
              <HeaderMainLogo isShow={isShow} />
            </Link>
          )}

          <ul className="header_menu">
            <Link href="/top">
              <li className="header_item">
                <span>
                  <HomeIcon />
                </span>
                <span
                  className={`header_item_text ${
                    activePage === "top" ? "top" : ""
                  }`}
                >
                  ホーム
                </span>
              </li>
            </Link>
            <Link href="/story">
              <li className="header_item">
                <span>
                  <LookIcon />
                </span>
                <span
                  className={`header_item_text ${
                    activePage === "story" ? "story" : ""
                  }`}
                >
                  見る
                </span>
              </li>
            </Link>
            <Link href="/form/input">
              <li className="header_item">
                <span>
                  <WriteIcon />
                </span>
                <span
                  className={`header_item_text ${
                    activePage === "form" ? "form" : ""
                  }`}
                >
                  書く
                </span>
              </li>
            </Link>
          </ul>

          {/* sp用メニュー */}
          <ul className={`sp_header_menu ${isShow ? "isShow" : ""}`}>
            <Link href="/top">
              <li className="sp_header_item">
                <span
                  className={`sp_header_item_text ${
                    activePage === "top" ? "top" : ""
                  }`}
                >
                  ホーム
                </span>
              </li>
            </Link>
            <Link href="/story">
              <li className="sp_header_item">
                <span
                  className={`sp_header_item_text ${
                    activePage === "story" ? "story" : ""
                  }`}
                >
                  見る
                </span>
              </li>
            </Link>
            <Link href="/form/input">
              <li className="sp_header_item">
                <span
                  className={`sp_header_item_text ${
                    activePage === "form" ? "form" : ""
                  }`}
                >
                  書く
                </span>
              </li>
            </Link>
          </ul>
          <MenuIcon isShow={isShow} handleMenuIconClick={handleMenuIconClick} />
        </div>
      </header>
    </>
  );
};

export default Header;
