// next
import Link from "next/link";
// svg
import { ThanksChara } from "@/assets/svg/character/characterSvg";
// style
import "./received.scss";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const received = () => {
  return (
    <>
      <Header />
      <div className="received">
        <div className="received_message">
          <ThanksChara />
          <div className="received_text">
            <p className="received_text_main">
              お問い合わせありがとうございます。
            </p>
            <p className="received_text_sub">
              入力されたメールアドレス宛に受付の自動返信メールをお送りしております。
            </p>
            <p className="received_text_sub">
              返信までに7日ほど要する場合がございますがご了承ください。
            </p>
          </div>
          <Link href="/top">
            <button className="go_to_top_btn">トップ画面へ</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default received;
