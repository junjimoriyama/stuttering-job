"use client";

import Step from "@/app/step/Step";
import StepContext from "@/app/step/stepContext";
import React, { useContext, useEffect } from "react";
import "./complete.scss";
import { useFormContext } from "react-hook-form";
import { Thanks } from "@/public/svg/svg";
import { useRouter } from "next/navigation";

const complete = () => {
  const { reset } = useFormContext();
  const { step, setStep } = useContext(StepContext);
  const router = useRouter(); 

  useEffect(() => {
    // データを全てリセットする
    reset();

    // 現在の履歴を置き換えて戻るボタンの挙動を制御
    
    // 戻るボタンが押された場合の遷移先
    const handlePopState = (event: PopStateEvent) => {
      setTimeout(() => {
        router.replace("/form/input"); // 最初のURLを置き換える
      }, 2000)
      // router.push("/form/input");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [reset, router]);

  return (
    <div className="complete">
      <Step step={"complete"} setStep={setStep} />
      <div className="complete_message">
      <Thanks />
      <div className="text">
        <p>体験談のご記入</p>
        <p>ありがとうございます。</p>
        <p>準備でき次第、掲載いたします。</p>
      </div>
      </div>
    </div>
  );
};

export default complete;
