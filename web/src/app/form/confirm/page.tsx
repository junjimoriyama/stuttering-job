"use client";

import Step from "@/app/form/step/Step";
import "./confirm.scss";
import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { useActionState, useContext, useEffect } from "react";
import { sendAction } from "./actionConfirm";
import StepContext from "@/app/form/step/stepContext";
import { useRouter } from "next/navigation";

// サーバーからデータを取得
const confirm = () => {
  const { getValues } = useFormContext<Record<string, string>>();
  const formValues = getValues();

  const { step, setStep } = useContext(StepContext);

  const router = useRouter();

  const labels: Record<string, string> = {
    age: "年代",
    gender: "性別",
    industry: "業種",
    job_details: "具体的な仕事内容",
    reason: "今の仕事を選んだ理由",
    employment: "雇用形態",
    years: "勤続年数",
    job_difficulty: "仕事の苦労度",
    job_struggles: "仕事中の苦労や工夫",
    job_hunt_difficulty: "就職活動の苦労度",
    job_hunt_struggles: "就職活動中の苦労や工夫",
    notebook: "手帳の有無",
    free: "自由記入欄",
    username: "ユーザー名",
    email: "連絡用メールアドレス",
  };

  useEffect(() => {
    console.log("confirm")
  }, [])

  // formの値を配列に
  const formArray = Object.entries(formValues);

  return (
    <div className="confirm">
      <Step step={"confirm"} setStep={setStep} />

      <form action={sendAction} className="confirm_form">
        <div className="confirm_guide">
          <p>以下の内容で送信しても</p>
          <p>よろしいでしょうか？</p>
        </div>
        <ul className="confirm_form_list">
          {formArray.map(([key, value]) => (
            <li className="confirm_form_row" key={key}>
              <p className="confirm_form_label">{labels[key]}</p>
              <p className="confirm_form_value">{value || "未記入"}</p>
              <input type="hidden" name={key} value={value} readOnly />
            </li>
          ))}
        </ul>

        <button
          className="back-_fill_out_button"
          type="button"
          onClick={() => router.push("/form/input")}
        >
          戻る
        </button>

        <button className="complete_step_button" type="submit">
          送信する
        </button>

        {/* </Link> */}
      </form>
    </div>
  );
};

export default confirm;