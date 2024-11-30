"use client";

import Step from "@/app/step/Step";
import "./confirm.scss";
import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { useActionState } from "react";
import { sendAction } from "./actionConfirm";

// サーバーからデータを取得
const confirm = () => {
  const { getValues } = useFormContext();
  const values = getValues();

  return (
    <div className="confirm">
      <Step />
      <form
        action={sendAction}
        className="confirm-form"
        // onSubmit={handleSubmit}
      >
        <div className="confirm-form-title">確認画面</div>
        <ul>
          <li className="confirm-form-row">
            <p className="confirm-form-label">年代</p>
            <p className="confirm-form-value">{values.age}</p>
            <input type="hidden" name="age" value={values.age} readOnly />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">性別</p>
            <p className="confirm-form-value">{values.gender}</p>
            <input type="hidden" name="gender" value={values.gender} readOnly />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">苦労度</p>
            <p className="confirm-form-value">{values.job_difficulty}</p>
            <input
              type="hidden"
              name="job_difficulty"
              value={values.job_difficulty}
              readOnly
            />
          </li>
        </ul>

        <button
          className="complete-step-button"
          type="submit"
          // onClick={handleComplete}
        >
          送信する
        </button>

        <Link href="/form/input">
          {/* <Link href="/input/fillOut"> */}
          <button className="back-fill-out-button" type="submit">
            戻る
          </button>
        </Link>
      </form>
    </div>
  );
};

export default confirm;
// import Step from "@/app/step/Step";
// import "./confirm.scss";
// import Link from "next/link";
// // import { useContext } from "react";
// // import { StepContext } from "../../stepContext";

// // サーバーからデータを取得
// async function fetchinputData(id: string) {
//   const res = await fetch(`http://localhost:3000/api/v1/inputs/${id}`, {
//     method: "GET",
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("データの取得に失敗しました");
//   }

//   return res.json();
// }

// export default async function ConfirmPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   // 非同期にデータを取得
//   const data = await fetchinputData(params.id);

//   const fields = [
//     { label: "年齢", value: data.age },
//     { label: "性別", value: data.gender },
//     { label: "業種", value: data.industry },
//     { label: "具体的な業種", value: data.job_details || "未入力" },
//     { label: "理由", value: data.reason || "未入力" },
//     { label: "働き方", value: data.employment },
//     { label: "勤続年数", value: data.years },
//     { label: "仕事の苦労度", value: data.job_difficulty },
//     { label: "仕事中の苦労や工夫", value: data.job_struggles || "未入力" },
//     { label: "就職活動中の苦労度", value: data.job_hunt_difficulty },
//     {
//       label: "就職活動中の苦労や工夫",
//       value: data.job_hunt_struggles || "未入力",
//     },
//     { label: "障害者手帳の有無", value: data.notebook },
//     { label: "自由記入", value: data.free || "未入力" },
//     { label: "お名前", value: data.username },
//     { label: "連絡用メールアドレス", value: data.email },
//   ];

//   return (
//     <div className="confirm">
//       <Step />

//       <div className="confirm-form">
//         <div className="confirm-form-title">確認画面</div>
//         <ul>
//           {fields.map(({ label, value }) => {
//             return (
//               <li className="confirm-form-row" key={label}>
//                 <p className="confirm-form-label">{label}</p>
//                 <p className="confirm-form-value">{value}</p>
//               </li>
//             );
//           })}
//         </ul>

//         <button
//           className="complete-step-button"
//           type="submit"
//           // onClick={handleComplete}
//         >
//           送信する
//         </button>

//         <Link href="/">
//           {/* <Link href="/input/fillOut"> */}
//           <button className="back-fill-out-button" type="submit">
//             戻る
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
