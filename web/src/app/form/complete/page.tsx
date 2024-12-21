"use client";

import Step from "@/app/form/step/Step";
import StepContext from "@/app/form/step/stepContext";
import React, { useContext, useEffect } from "react";
import "./complete.scss";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Thanks } from "@/public/svg/other/other";
import { ThanksChara } from "@/public/svg/character/characterSvg";

const complete = () => {
  const { reset } = useFormContext();
  const { step, setStep } = useContext(StepContext);
  const router = useRouter(); 

  useEffect(() => {
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
      console.log('test_1')
    };
    
    window.addEventListener("popstate", handlePopState);
    
    return () => {
      console.log('test_2')
      window.removeEventListener("popstate", handlePopState);
    };
  }, [reset]);

  return (
    <div className="complete">
      <Step step={"complete"} setStep={setStep} />
      <div className="complete_message">
      {/* <Thanks /> */}
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
