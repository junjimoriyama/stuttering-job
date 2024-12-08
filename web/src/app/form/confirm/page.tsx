"use client";

import Step from "@/app/step/Step";
import "./confirm.scss";
import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { useActionState, useContext } from "react";
import { sendAction } from "./actionConfirm";
import StepContext from "@/app/step/stepContext";
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

  // formの値を配列に
  const formArray = Object.entries(formValues);

  return (
    <div className="confirm">
      <Step step={"confirm"} setStep={setStep} />

      <form action={sendAction} className="confirm-form">
        <div className="confirm-form-title">確認画面</div>
        <ul className="confirm-form-list">
          {formArray.map(([key, value]) => (
            <li className="confirm-form-row" key={key}>
              <p className="confirm-form-label">{labels[key]}</p>
              <p className="confirm-form-value">{value || "未記入"}</p>
              <input type="hidden" name={key} value={value} readOnly />
            </li>
          ))}
        </ul>

        <button
          className="back-fill-out-button"
          type="button"
          onClick={() => router.push("/form/input")}
        >
          戻る
        </button>
        
        <button className="complete-step-button" type="submit">
          送信する
        </button>

        {/* </Link> */}
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

{
  /* <li className="confirm-form-row">
            <p className="confirm-form-label">年代</p>
            <p className="confirm-form-value">{formValues.age}</p>
            <input type="hidden" name="age" value={formValues.age} readOnly />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">性別</p>
            <p className="confirm-form-value">{formValues.gender}</p>
            <input
              type="hidden"
              name="gender"
              value={formValues.gender}
              readOnly
            />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">業種</p>
            <p className="confirm-form-value">{formValues.industry}</p>
            <input
              type="hidden"
              name="gender"
              value={formValues.industry}
              readOnly
            />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">具体的な業種</p>
            <p className="confirm-form-value">{formValues.job_details}</p>
            <input
              type="hidden"
              name="gender"
              value={formValues.details}
              readOnly
            />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">今の仕事を選んだ理由</p>
            <p className="confirm-form-value">{formValues.reason}</p>
            <input
              type="hidden"
              name="gender"
              value={formValues.industry}
              readOnly
            />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">雇用形態</p>
            <p className="confirm-form-value">{formValues.employment}</p>
            <input
              type="hidden"
              name="gender"
              value={formValues.employment}
              readOnly
            />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">勤続年数</p>
            <p className="confirm-form-value">{formValues.years}</p>
            <input
              type="hidden"
              name="gender"
              value={formValues.years}
              readOnly
            />
          </li>

          <li className="confirm-form-row">
            <p className="confirm-form-label">仕事の苦労度</p>
            <p className="confirm-form-value">{formValues.job_difficulty}</p>
            <input
              type="hidden"
              name="job_difficulty"
              value={formValues.job_difficulty}
              readOnly
            />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">仕事中の苦労や工夫</p>
            <p className="confirm-form-value">{formValues.job_struggles}</p>
            <input
              type="hidden"
              name="job_difficulty"
              value={formValues.job_difficulty}
              readOnly
            />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">就職活動の苦労度</p>
            <p className="confirm-form-value">
              {formValues.job_hunt_difficulty}
            </p>
            <input
              type="hidden"
              name="job_hunt_difficulty"
              value={formValues.job_hunt_difficulty}
              readOnly
            />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">就職活動で苦労していること</p>
            <p className="confirm-form-value">
              {formValues.job_hunt_struggles}
            </p>
            <input
              type="hidden"
              name="job_difficulty"
              value={formValues.job_hunt_struggles}
              readOnly
            />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">障害者手帳の有無</p>
            <p className="confirm-form-value">
              {formValues.notebook}
            </p>
            <input
              type="hidden"
              name="job_difficulty"
              value={formValues.notebook}
              readOnly
            />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">見ている人に向けて</p>
            <p className="confirm-form-value">
              {formValues.free}
            </p>
            <input
              type="hidden"
              name="job_difficulty"
              value={formValues.free}
              readOnly
            />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">連絡用メールアドレス</p>
            <p className="confirm-form-value">
              {formValues.username}
            </p>
            <input
              type="hidden"
              name="job_difficulty"
              value={formValues.username}
              readOnly
            />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">パスワード</p>
            <p className="confirm-form-value">
              {formValues.email}
            </p>
            <input
              type="hidden"
              name="job_difficulty"
              value={formValues.email}
              readOnly
            />
          </li> */
}
