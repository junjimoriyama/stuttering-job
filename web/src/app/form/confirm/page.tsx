"use client";

// next
import { useRouter } from "next/navigation";
// react
import { useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
// dataLists
import { industryLabels } from "@/dataLists/industryList";
// functions
import { sendAction } from "./actionConfirm";
// components
import { Step } from "@/app/form/components/step/Step";
import { StepContext } from "@/app/form/components/step/stepContext";
import Loading from "@/app/loading/loading";
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
  const formValues = getValues();

  // formの値を配列に
  const formArray = Object.entries(formValues);
  // ローディング状態の有無
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ローディングをtrue
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      await sendAction(formData);
      // パラメーター付与
      router.push("/form/complete?from=confirm");
    } catch (error) {
      console.error("送信エラー:", error);
    }
  };

  // データが空なら前のページに戻す
  useEffect(() => {
    if(formArray.length === 0) {
      router.push("/form/input")
    }
  }, [formArray, router])

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
            {formArray
              .filter(([key]) => ["username", "email"].includes(key))
              .map(([key, value]) => (
                <li className="confirm_form_row" key={key}>
                  <p className="confirm_form_label">{industryLabels[key]}</p>
                  <p className="confirm_form_value">{value || "未記入"}</p>
                  <input type="hidden" name={key} value={value} readOnly />
                </li>
              ))}
            <div className="confirm_age_gender_industry">
              {formArray
                .filter(([key]) => ["age", "gender", "industry"].includes(key))
                .map(([key, value]) => (
                  <li className="confirm_form_row" key={key}>
                    <p className="confirm_form_label">{industryLabels[key]}</p>
                    <p className="confirm_form_value">
                      {value || "未記入"}
                      {key === "age" ? "代" : ""}
                    </p>
                    <input type="hidden" name={key} value={value} readOnly />
                  </li>
                ))}
            </div>

            {formArray
                .filter(([key]) => ["detail", "reason"].includes(key))
                .map(([key, value]) => (
                  <li className="confirm_form_row" key={key}>
                    <p className="confirm_form_label">{industryLabels[key]}</p>
                    <p className="confirm_form_value">
                      {value || "未記入"}
                      {key === "age" ? "代" : ""}
                    </p>
                    <input type="hidden" name={key} value={value} readOnly />
                  </li>
                ))}

            <div className="confirm_employment_years">
              {formArray
                .filter(([key]) => ["employment", "years"].includes(key))
                .map(([key, value]) => (
                  <li className="confirm_form_row" key={key}>
                    <p className="confirm_form_label">{industryLabels[key]}</p>
                    <p className="confirm_form_value">{value || "未記入"}</p>
                    <input type="hidden" name={key} value={value} readOnly />
                  </li>
                ))}
            </div>

            {/* それ以外の項目を個別に表示 */}
            {formArray
              .filter(
                ([key]) =>
                  ![
                    "username", 
                    "email",
                    "age",
                    "gender",
                    "industry",
                    "detail", 
                    "reason",
                    "employment",
                    "years",
                  ].includes(key)
              )
              .map(([key, value]) => (
                <li className="confirm_form_row" key={key}>
                  <p className="confirm_form_label">{industryLabels[key]}</p>
                  <p className="confirm_form_value">{value || "未記入"}</p>
                  <input type="hidden" name={key} value={value} readOnly />
                </li>
              ))}
          </ul>

          <div className="confirm_buttons">
            <button
              className="back_fill_out_button"
              type="button"
              onClick={() => router.push("/form/input")}
            >
              戻る
            </button>

            <button className="complete_step_button" type="submit">
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
// "use client";

// // next
// import { useRouter } from "next/navigation";
// // react
// import { useContext, useState } from "react";
// import { useFormContext } from "react-hook-form";
// // dataLists
// import { industryLabels } from "@/dataLists/industryList";
// // functions
// import { sendAction } from "./actionConfirm";
// // components
// import { Step } from "@/app/form/components/step/Step";
// import { StepContext } from "@/app/form/components/step/stepContext";
// import Loading from "@/app/loading/loading";
// // style
// import "./confirm.scss";

// // サーバーからデータを取得
// const confirm = () => {

//   // router
//   const router = useRouter();
//   // フォーム進行状況
//   const { setStep } = useContext(StepContext);

//   // フォームに入力された全ての値
//   const { getValues } = useFormContext<Record<string, string>>();
//   const formValues = getValues();
//   // formの値を配列に
//   const formArray = Object.entries(formValues);
//   // ローディング状態の有無
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
//     console.log('t')
//     e.preventDefault()
//     setIsLoading(true)
//     const formData = new FormData(e.currentTarget)
//     try {
//       await sendAction(formData)
//     } catch(error) {
//       console.error("送信エラー:", error);
//     }
//   }

//   return (
//     <>
//     {isLoading && <Loading />}
//     <div className="confirm">
//       <Step step={"confirm"} setStep={setStep} />
//         <div className="confirm_guide">
//           <p>以下の内容で送信しても</p>
//           <p>よろしいでしょうか？</p>
//         </div>
//       <form onSubmit={handleSubmit} className="confirm_form">
//         <ul className="confirm_form_list">
//           {formArray.map(([key, value]) => (
//             <li className="confirm_form_row" key={key}>
//               {/* 業種ラベル */}
//               <p className="confirm_form_label">{industryLabels[key]}</p>
//               <p className="confirm_form_value">{value || "未記入"}</p>
//               <input type="hidden" name={key} value={value} readOnly />
//             </li>
//           ))}
//         </ul>

//         {/* </Link> */}
//       </form>
//         <div className="confirm_buttons">
//           <button
//             className="back_fill_out_button"
//             type="button"
//             onClick={() => router.push("/form/input")}
//           >
//             戻る
//           </button>

//           <button className="complete_step_button" type="submit">
//             送信する
//           </button>
//         </div>
//     </div>
//     </>
//   );
// };

// export default confirm;
