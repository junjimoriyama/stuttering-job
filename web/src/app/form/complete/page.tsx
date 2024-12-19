"use client";

import Step from "@/app/form/step/Step";
import StepContext from "@/app/form/step/stepContext";
import React, { useContext, useEffect } from "react";
import "./complete.scss";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Thanks } from "@/public/svg/other/other";

const complete = () => {
  const { reset } = useFormContext();
  const { step, setStep } = useContext(StepContext);
  const router = useRouter(); 

  useEffect(() => {
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
        router.replace("/form/input"); // 最初のURLを置き換える
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
