"use client";

// next
import Link from "next/link";
// svg
import { FooterMainLogo } from "@/assets/svg/logo/logoSvg";
import { SilhouetteChara } from "@/assets/svg/character/characterSvg";
// style
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <FooterMainLogo />
      <ul className="footer_menu">
        <li className="footer_item">
          <Link href="/top">
            <span className="footer_item_text">TOP</span>
          </Link>
        </li>
        <li className="footer_item">
          <Link href="/story">
            <span className="footer_item_text">見る</span>
          </Link>
        </li>
        <li className="footer_item">
          <Link href="/form/input">
            <span className="footer_item_text">書く</span>
          </Link>
        </li>
        <li className="footer_item">
          <Link href="/learn">
            <span className="footer_item_text">知る</span>
          </Link>
        </li>
        <li className="footer_item">
          <Link href="/contact">
            <span className="footer_item_text">お問い合わせ</span>
          </Link>
        </li>
      </ul>
      <SilhouetteChara />

      <small className="copyRight">
        &copy; 2025 ⚪︎⚪︎ All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
// "use client";

// // next
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// // react
// import { useEffect, useState } from "react";
// // svg
// import { FooterMainLogo, HeaderMainLogo } from "@/assets/svg/logo/logoSvg";
// import { SilhouetteChara } from "@/assets/svg/character/characterSvg";
// // style
// import "./footer.scss";

// const Footer = () => {
//   // const pathname = usePathname();
//   // spメニュー
//   const [isShow, setIsShow] = useState(false);
//   // const handleMenuIconClick = () => {
//   //   setIsShow(!isShow);
//   // };

//   // const [isTopPage, setIsTopPage] = useState(false);

//   // useEffect(() => {
//   //   if (pathname === "/top") {
//   //     setIsTopPage(true);
//   //   }
//   // }, []);

//   return (
//     <footer className={`${isShow ? "isShow" : ""}`}>
//       <div className="footer_wrap">
//         {/* トップページ以外又はどのページでもisShowクラスがついたら表示 */}

//         {/* sp用メニュー */}
//         <FooterMainLogo />
//         <div className="footer_menu_and_chara">
//           <ul className="footer_menu">
//             <li className="footer_item">
//               <Link href="/top">
//                 <span className="footer_item_text">TOP</span>
//               </Link>
//             </li>
//             <li className="footer_item">
//               <Link href="/story">
//                 <span className="footer_item_text">見る</span>
//               </Link>
//             </li>
//             <li className="footer_item">
//               <Link href="/form/input">
//                 <span className="footer_item_text">書く</span>
//               </Link>
//             </li>
//             <li className="footer_item">
//               <span className="footer_item_text">知る</span>
//             </li>
//           </ul>
//           <SilhouetteChara />
//         </div>
//         <small className="copyRight">
//           &copy; 2025 ⚪︎⚪︎ All rights reserved.
//         </small>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
