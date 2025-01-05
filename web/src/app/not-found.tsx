// next
import Link from "next/link";
// components
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
// style
import "./not-found.scss";
// svg
import { CryChara } from "@/assets/svg/character/characterSvg";

const Notfound = () => {
  return (
    <>
      <Header />
      <div className="not_found">
        <div className="not_found_content">
          <CryChara />
          <div className="not_found_message">
            <p className="not_found_message_heading">404 Not Found</p>
            <p className="not_found_message_description">お探しのページは</p>
            <p className="not_found_message_description">
              見つかりませんでした。
            </p>
          </div>
          <button className="linkTopBtn">
            <Link href="/top">ホームに戻る </Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notfound;
