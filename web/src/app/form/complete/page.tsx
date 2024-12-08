"use client";

import Step from "@/app/step/Step";
import StepContext from "@/app/step/stepContext";
import React, { useContext, useEffect } from "react";
import "./complete.scss";
import { useFormContext } from "react-hook-form";
import { Thanks } from "@/public/svg/svg";

const complete = () => {
  const { reset } = useFormContext();

  useEffect(() => {
    // データを全てリセットする
    reset();
  }, []);

  const { step, setStep } = useContext(StepContext);

  return (
    <div className="complete">
      <Step step={"complete"} setStep={setStep} />
      <div className="complete_message">
      <Thanks />
        <p className="text">体験談のご記入</p>
        <p className="text">ありがとうございます。</p>
        <p className="text">準備でき次第、掲載いたします。</p>
      </div>
    </div>
  );
};

export default complete;
