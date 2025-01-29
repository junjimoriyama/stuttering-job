"use client";

// next
import { useRouter } from "next/navigation";
// react
import { useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
// dataLists
import { allDataLabels } from "@/dataLists/industryList";
// functions
import { sendAction } from "./actionConfirm";
// components
import { Step } from "@/app/form/components/step/Step";
import { StepContext } from "@/app/form/components/step/stepContext";
import Loading from "@/components/common/loading/loading";
import { PolicyCheck } from "@/components/common/policyCheck/PolicyCheck";
// style
import "./confirm.scss";

// サーバーからデータを取得
const confirm = () => {
  // router
  const router = useRouter();
  // フォーム進行状況
  const { setStep } = useContext(StepContext);
  // フォームに入力された全ての値
  const { getValues } = useFormContext<Record<string, string>>();
  // 全てのデータ
  const formValues = getValues();
  // formの値を配列に
  const sendFormArray = Object.entries(formValues);
  // ローディング状態の有無
  const [isLoading, setIsLoading] = useState(false);

  // 送信ボタンクリック
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ローディングをtrue
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      // 非同期でデータ送信
      // await sendAction(formData);
      // パラメーター付与
      router.push("/form/complete?from=confirm");
    } catch (error) {
      console.error("送信エラー:", error);
    }
  };

  // 一番上にスクロールされる様にする
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 500); // 遅延させる
  }, []);

  // データが空なら前のページに戻す
  useEffect(() => {
    if (sendFormArray.length === 0) {
      router.push("/form/input");
    }
  }, [sendFormArray, router]);

  // チェックボックスをクリックの状態
  const [isChecked, setIsChecked] = useState(false);

  // useForm
  const {
    // 入力された値登録
    register,
    // 送信時の処理
    // formの状態（エラー、送信中等）
    formState: { errors },
  } = useFormContext();

  // チェックボックスをクリック
  const handleCheckBox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="confirm">
        <Step step={"confirm"} setStep={setStep} />
        <div className="confirm_guide">
          <p>以下の内容で送信しても</p>
          <p>よろしいでしょうか？</p>
        </div>
        <form onSubmit={handleSubmit} className="confirm_form">
          <ul className="confirm_form_list">
            {/* 特定のキーに該当する項目をまとめる */}
            {sendFormArray
              .filter(([key]) => ["username", "email"].includes(key))
              .map(([key, value]) => (
                <li className="confirm_form_row" key={key}>
                  <p className="confirm_form_label">{allDataLabels[key]}</p>
                  <p className="confirm_form_value">{value || "未記入"}</p>
                  <input type="hidden" name={key} value={value} readOnly />
                </li>
              ))}
            <div className="confirm_age_gender_industry">
              {sendFormArray
                .filter(([key]) => ["age", "gender", "industry"].includes(key))
                .map(([key, value]) => (
                  <li className="confirm_form_row" key={key}>
                    <p className="confirm_form_label">{allDataLabels[key]}</p>
                    <p className="confirm_form_value">
                      {value || "未記入"}
                      {key === "age" ? "代" : ""}
                    </p>
                    <input type="hidden" name={key} value={value} readOnly />
                  </li>
                ))}
            </div>

            {sendFormArray
              .filter(([key]) => ["job_details", "reason"].includes(key))
              .map(([key, value]) => (
                <li className="confirm_form_row" key={key}>
                  <p className="confirm_form_label">{allDataLabels[key]}</p>
                  <p className="confirm_form_value">
                    {value || "未記入"}
                    {key === "age" ? "代" : ""}
                  </p>
                  <input type="hidden" name={key} value={value} readOnly />
                </li>
              ))}

            <div className="confirm_employment_years">
              {sendFormArray
                .filter(([key]) => ["employment", "years"].includes(key))
                .map(([key, value]) => (
                  <li className="confirm_form_row" key={key}>
                    <p className="confirm_form_label">{allDataLabels[key]}</p>
                    <p className="confirm_form_value">{value || "未記入"}</p>
                    <input type="hidden" name={key} value={value} readOnly />
                  </li>
                ))}
            </div>

            {/* それ以外の項目を個別に表示 */}
            {sendFormArray
              .filter(
                ([key]) =>
                  ![
                    "username",
                    "email",
                    "age",
                    "gender",
                    "industry",
                    "job_details",
                    "reason",
                    "employment",
                    "years",
                  ].includes(key)
              )
              .map(([key, value]) => (
                <li className="confirm_form_row" key={key}>
                  <p className="confirm_form_label">{allDataLabels[key]}</p>
                  <p className="confirm_form_value">{value || "未記入"}
                  {["job_difficulty", "job_hunt_difficulty"].includes(key) ? " / 5" : ""}
                  </p>
                  <input type="hidden" name={key} value={value} readOnly />
                </li>
              ))}
          </ul>

          <PolicyCheck isChecked={isChecked} handleCheckBox={handleCheckBox} />

          <div className="confirm_buttons">
            <button
              className="back_fill_out_button"
              type="button"
              onClick={() => router.push("/form/input")}
            >
              戻る
            </button>

            <button
              className={`complete_step_button ${isChecked ? "isActive" : ""}`}
              type="submit"
            >
              送信する
            </button>
          </div>
          {/* </Link> */}
        </form>
      </div>
    </>
  );
};

export default confirm;
