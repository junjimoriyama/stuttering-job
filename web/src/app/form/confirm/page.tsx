"use client";

// next
import { useRouter } from "next/navigation";
// react
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
// dataLists
import { industryLabels } from "@/dataLists/industryList";
// functions
import { sendAction } from "./actionConfirm";
// components
import { Step } from "@/app/form/components/step/Step";
import { StepContext } from "@/app/form/components/step/stepContext";
// style
import "./confirm.scss";

// サーバーからデータを取得
const confirm = () => {

  // router
  const router = useRouter();
  // フォーム進行状況
  const { step, setStep } = useContext(StepContext);

  // フォームに入力された全ての値
  const { getValues } = useFormContext<Record<string, string>>();
  const formValues = getValues();
  // formの値を配列に
  const formArray = Object.entries(formValues);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    try {
      await sendAction(formData)
    } catch(error) {
      console.error("送信エラー:", error);
    }
  }

  return (
    <div className="confirm">
      <Step step={"confirm"} setStep={setStep} />
      <form onSubmit={handleSubmit} className="confirm_form">
        <div className="confirm_guide">
          <p>以下の内容で送信しても</p>
          <p>よろしいでしょうか？</p>
        </div>
        <ul className="confirm_form_list">
          {formArray.map(([key, value]) => (
            <li className="confirm_form_row" key={key}>
              {/* 業種ラベル */}
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
  );
};

export default confirm;
// "use client";

// // next
// import { useRouter } from "next/navigation";
// // react
// import { useContext } from "react";
// import { useFormContext } from "react-hook-form";
// // dataLists
// import { industryLabels } from "@/dataLists/industryList";
// // functions
// import { sendAction } from "./actionConfirm";
// // components
// import { Step } from "@/app/form/components/step/Step";
// import { StepContext } from "@/app/form/components/step/stepContext";
// // style
// import "./confirm.scss";

// // サーバーからデータを取得
// const confirm = () => {

//   // router
//   const router = useRouter();
//   // フォーム進行状況
//   const { step, setStep } = useContext(StepContext);

//   // フォームに入力された全ての値
//   const { getValues } = useFormContext<Record<string, string>>();
//   const formValues = getValues();
//   // formの値を配列に
//   const formArray = Object.entries(formValues);

//   return (
//     <div className="confirm">
//       <Step step={"confirm"} setStep={setStep} />
//       <form action={sendAction} className="confirm_form">
//         <div className="confirm_guide">
//           <p>以下の内容で送信しても</p>
//           <p>よろしいでしょうか？</p>
//         </div>
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

//         {/* </Link> */}
//       </form>
//     </div>
//   );
// };

// export default confirm;
