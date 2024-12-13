"use client";

import Step from "@/app/form/step/Step";
import StepContext from "@/app/form/step/stepContext";
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
    // hooksデータを全てリセット
    reset();
    // localStorageデータを全てリセット
    Object.keys(localStorage).forEach( key => {
      if(key.startsWith('stutter_job')) {
        localStorage.removeItem(key)
      }
    })
    
    // 戻るボタンが押された場合の遷移先
    const handlePopState = (event: PopStateEvent) => {
      setTimeout(() => {
        router.replace("/form/input"); // 最初のURLを置き換える
      }, 2000)
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
