"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// react
import { useEffect, useState, useMemo } from "react";
// svg
import { HeaderMainLogo } from "@/assets/svg/logo/logoSvg";
import {
  HomeIcon,
  LookIcon,
  MenuIcon,
  QuestionIcon,
  WriteIcon,
} from "@/assets/svg/icon/menuIcon";
// style
import "./header.scss";
import { MailIcon } from "@/assets/svg/icon/mail";

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
      return { isTopPage: true, activePage: "top_page" };
    } else if (pathname.includes("/story")) {
      return { isTopPage: false, activePage: "story_page" };
    } else if (pathname.includes("/form")) {
      return { isTopPage: false, activePage: "form_page" };
    } else if (pathname.includes("/learn")) {
      return { isTopPage: false, activePage: "learn_page" };
    } else if (pathname.includes("/contact")) {
      return { isTopPage: false, activePage: "contact_page"}
    }
    // デフォルト値
    return { isTopPage: false, activePage: "" };
  }, [pathname]);

  return (
    <>
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
            <li className="header_item">
              <Link href="/top">
                <span>{/* <HomeIcon /> */}</span>
                <span
                  className={`header_item_text ${
                    activePage === "top_page" ? "top_page" : ""
                  }`}
                >
                  TOP
                </span>
              </Link>
            </li>
            <li className="header_item">
              <Link href="/story">
                <span>{/* <LookIcon /> */}</span>
                <span
                  className={`header_item_text ${
                    activePage === "story_page" ? "story_page" : ""
                  }`}
                >
                  見る
                </span>
              </Link>
            </li>
            <li className="header_item">
              <Link href="/form/input">
                <span>{/* <WriteIcon /> */}</span>
                <span
                  className={`header_item_text ${
                    activePage === "form_page" ? "form_page" : ""
                  }`}
                >
                  書く
                </span>
              </Link>
            </li>
            <li className="header_item">
              <Link href="/learn">
                <span>{/* <QuestionIcon /> */}</span>
                <span
                  className={`header_item_text ${
                    activePage === "learn_page" ? "learn_page" : ""
                  }`}
                >
                  知る
                </span>
              </Link>
            </li>
            <li className="header_item">
              <Link href="/contact">
                <span></span>
                <span
                  className={`header_item_text header_item_text_contact ${
                    activePage === "contact_page" ? "contact_page" : ""
                  }`}
                >
                  {/* お問い合わせ */}
                  <MailIcon />
                </span>
              </Link>
            </li>
          </ul>

          {/* sp用メニュー */}
          <ul className={`sp_header_menu ${isShow ? "isShow" : ""}`}>
            <Link href="/top">
              <li className="sp_header_item">
                <span
                  className={`sp_header_item_text ${
                    activePage === "top_page" ? "top_page" : ""
                  }`}
                  onClick={() => setIsShow(false)}
                >
                  TOP
                </span>
              </li>
            </Link>
            <Link href="/story">
              <li className="sp_header_item">
                <span
                  className={`sp_header_item_text ${
                    activePage === "story_page" ? "story_page" : ""
                  }`}
                  onClick={() => setIsShow(false)}
                >
                  見る
                </span>
              </li>
            </Link>
            <Link href="/form/input">
              <li className="sp_header_item">
                <span
                  className={`sp_header_item_text ${
                    activePage === "form_page" ? "form_page" : ""
                  }`}
                  onClick={() => setIsShow(false)}
                >
                  書く
                </span>
              </li>
            </Link>
            <Link href="/learn">
              <li className="sp_header_item">
                <span
                  className={`sp_header_item_text ${
                    activePage === "learn_page" ? "learn_page" : ""
                  }`}
                  onClick={() => setIsShow(false)}
                >
                  知る
                </span>
              </li>
            </Link>
            <Link href="/contact">
              <li className="sp_header_item">
                <span
                  className={`sp_header_item_text ${
                    activePage === "contact_page" ? "contact_page" : ""
                  }`}
                  onClick={() => setIsShow(false)}
                >
                  お問い合わせ
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
