"use client";

// next
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
// react
import { Suspense, useEffect, useState } from "react";
// svg
import { ThanksChara } from "@/assets/svg/character/characterSvg";
// style
import "./receivedContent.scss";

export const ReceivedContent = () => {
  // router
  const router = useRouter();
  // params
  const searchParams = useSearchParams();
  // contactページから来たか(直打ちURL対策)
  const from = searchParams.get("from");
  
  const [isFromContact, setIsFromContact] = useState(false);

  useEffect(() => {
    // params取得
    if (from === "contact") {
      setIsFromContact(true);
    } else {
      // 無効なアクセスはリダイレクト
      router.replace("/contact");
    }
  }, [router]);

  return (
    <>
      {isFromContact ? (
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
      ) : (
        <div className="receivedBlanc"></div>
      )}
    </>
  );
};

// export default received;
