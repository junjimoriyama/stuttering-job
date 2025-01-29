"use client";

// next
import { useParams, useRouter, useSearchParams } from "next/navigation";
// react
import React, { useEffect, useContext, useState } from "react";
import { useFormContext } from "react-hook-form";
// components
import { Step } from "@/app/form/components/step/Step";
import { StepContext } from "@/app/form/components/step/stepContext";
// svg
import { ThanksChara } from "@/assets/svg/character/characterSvg";
// style
import "./complete.scss";
import Link from "next/link";

export const CompleteContent = () => {
  // router
  const router = useRouter();
  // params
  const searchParams = useSearchParams();
  // formの内容削除
  const { reset } = useFormContext();
  // step
  const { step, setStep } = useContext(StepContext);

  const [isFromConfirm, setIsFromConfirm] = useState(false);

  useEffect(() => {
    // hooksデータを全てリセット
    reset();
    // localStorageデータを全てリセット
    // Object.keys(localStorage).forEach( key => {
    //   if(key.startsWith('stutter_job')) {
    //     localStorage.removeItem(key)
    //   }
    // })

    const from = searchParams.get("from");
    if (from === "confirm") {
      setIsFromConfirm(true);
    } else {
      router.replace("/form/input");
    }
  }, [reset]);

  return (
    <>
      {isFromConfirm}
      {isFromConfirm ? (
        <div className="complete">
          <Step step={"complete"} setStep={setStep} />
          <div className="complete_message">
            <ThanksChara />
            <div className="complete_text">
              <p className="complete_text_main">
                体験談をご記入いただき、誠にありがとうございます。
              </p>
              <p className="complete_text_sub">
                ご登録いただきましたメールアドレス宛に自動返信メールをお送りしておりますので、内容をご確認ください。
              </p>
            </div>
            <Link href="/top">
              <button className="go_to_top_btn">トップへ</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="completeBlanc"></div>
      )}
    </>
  );
}
