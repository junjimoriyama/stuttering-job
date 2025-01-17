"use client";

// next
import { useRouter } from "next/navigation";
// react
import React, { useEffect, useContext } from "react";
import { useFormContext } from "react-hook-form";
// components
import { Step } from "@/app/form/components/step/Step";
import { StepContext } from "@/app/form/components/step/stepContext";
// svg
import { ThanksChara } from "@/assets/svg/character/characterSvg";
// style
import "./complete.scss";
import Link from "next/link";

const complete = () => {
  const { reset } = useFormContext();
  const { step, setStep } = useContext(StepContext);
  const router = useRouter();

  useEffect(() => {
    // スクロールを一番上に
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
    // hooksデータを全てリセット
    reset();
    // localStorageデータを全てリセット
    // Object.keys(localStorage).forEach( key => {
    //   if(key.startsWith('stutter_job')) {
    //     localStorage.removeItem(key)
    //   }
    // })

    // 戻るボタンが押された場合の遷移先
    const handlePopState = (event: PopStateEvent) => {
      router.replace("/top"); // 最初のURLを置き換える
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [reset]);

  return (
    <div className="complete">
      <Step step={"complete"} setStep={setStep} />
      <div className="complete_message">
        <ThanksChara />
        <div className="complete_text">
          <p className="complete_text_main">体験談をご記入いただき、誠にありがとうございます。</p>
          <p className="complete_text_sub">
            ご登録いただきましたメールアドレス宛に自動返信メールをお送りしておりますので、内容をご確認ください。
          </p>
        </div>
      <Link href="/top">
        <button className="go_to_top_btn">HOMEへ</button>
      </Link>
      </div>
    </div>
  );
};

export default complete;
