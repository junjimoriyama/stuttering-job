"use client";

// next
import { useRouter } from "next/navigation";
// react
import React, { useEffect, useContext } from "react";
import { useFormContext } from "react-hook-form";
// components
import {Step} from "@/app/form/components/step/Step";
import {StepContext} from "@/app/form/components/step/stepContext";
// svg
import { ThanksChara } from "@/assets/svg/character/characterSvg";
// style
import "./complete.scss";

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
        <p>体験談のご記入</p>
        <p>ありがとうございます。</p>
        <p>投稿欄にあるメールアドレスに</p>
        <p>自動メールを送信しました。</p>
        <p>ご確認お願いいたします。</p>
      </div>
      </div>
    </div>
  );
};

export default complete;
