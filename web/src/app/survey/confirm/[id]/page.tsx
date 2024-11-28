import Step from "@/app/step/Step";
import "./confirm.scss";
import Link from "next/link";
// import { useContext } from "react";
// import { StepContext } from "../../stepContext";

// サーバーからデータを取得
async function fetchSurveyData(id: string) {
  const res = await fetch(`http://localhost:3000/api/v1/surveys/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("データの取得に失敗しました");
  }

  return res.json();
}

export default async function ConfirmPage({
  params,
}: {
  params: { id: string };
}) {
  // 非同期にデータを取得
  const data = await fetchSurveyData(params.id);

  // const { dispatch } = useContext(StepContext);

  // const handleComplete = () => {
  //   dispatch({ type: "SET_COMPLETE" }); // 完了ステップに移動
  // };

  const fields = [
    { label: "年齢", value: data.age },
    { label: "性別", value: data.gender },
    { label: "業種", value: data.industry },
    { label: "具体的な業種", value: data.job_details || "未入力" },
    { label: "理由", value: data.reason || "未入力" },
    { label: "働き方", value: data.employment },
    { label: "勤続年数", value: data.years },
    { label: "仕事の苦労度", value: data.job_difficulty },
    { label: "仕事中の苦労や工夫", value: data.job_struggles || "未入力" },
    { label: "就職活動中の苦労度", value: data.job_hunt_difficulty },
    {
      label: "就職活動中の苦労や工夫",
      value: data.job_hunt_struggles || "未入力",
    },
    { label: "障害者手帳の有無", value: data.notebook },
    { label: "自由記入", value: data.free || "未入力" },
    { label: "お名前", value: data.username },
    { label: "連絡用メールアドレス", value: data.email },
  ];

  return (
    <div className="confirm">
      <Step />

      <div className="confirm-form">
        <div className="confirm-form-title">確認画面</div>
        <ul>
          {fields.map(({ label, value }) => {
            return (
              <li className="confirm-form-row" key={label}>
                <p className="confirm-form-label">{label}</p>
                <p className="confirm-form-value">{value}</p>
              </li>
            );
          })}
        </ul>
        {/* <ul>
          <li className="confirm-form-row">
            <p className="confirm-form-label">年齢</p>
            <p className="confirm-form-value">{data.age}</p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">性別</p>
            <p className="confirm-form-value">{data.gender}</p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">業種</p>
            <p className="confirm-form-value">{data.industry}</p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">具体的な業種</p>
            <p className="confirm-form-value">{data.job_details || "未入力"}</p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">理由</p>
            <p className="confirm-form-value">{data.reason || "未入力"}</p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">働き方</p>
            <p className="confirm-form-value">{data.employment}</p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">勤続年数</p>
            <p className="confirm-form-value">{data.years}</p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">仕事の苦労度</p>
            <p className="confirm-form-value">{data.job_difficulty}</p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">仕事中の苦労や工夫</p>
            <p className="confirm-form-value">
              {data.job_struggles || "未入力"}
            </p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">就職活動中の苦労度</p>
            <p className="confirm-form-value">{data.job_hunt_difficulty}</p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">就職活動中の苦労や工夫</p>
            <p className="confirm-form-value">
              {data.job_hunt_struggles || "未入力"}
            </p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">障害者手帳の有無</p>
            <p className="confirm-form-value">{data.notebook}</p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">自由記入</p>
            <p className="confirm-form-value">{data.free || "未入力"}</p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">お名前</p>
            <p className="confirm-form-value">{data.username}</p>
            <hr />
          </li>
          <li className="confirm-form-row">
            <p className="confirm-form-label">連絡用メールアドレス</p>
            <p className="confirm-form-value">{data.email}</p>
            <hr />
          </li>
        </ul> */}

        <button
          className="complete-step-button"
          type="submit"
          // onClick={handleComplete}
        >
          送信する
        </button>

        <Link href="/">
          {/* <Link href="/survey/fillOut"> */}
          <button className="back-fill-out-button" type="submit">
            戻る
          </button>
        </Link>
      </div>
    </div>
  );
}

// import React from "react";

// const confirm = async ({ params }: { params: Promise<{ id: string }>}) => {
//   // `params` を待機して解決
//   const { id } = await params;

//   // `id` を使用して API リクエスト
//   const res = await fetch(`http://localhost:3000/api/v1/surveys/${id}`, {
//     method: "GET",
//   });

//   if (!res.ok) {
//     throw new Error("データの取得に失敗しました");
//   }

//   const data = await res.json();
//   console.log(data);

//   return (
//     <div className="confirm">
//       <div className="title">確認画面</div>
//       <ul>
//         <li>{data.id}</li>
//         <li>
//           <p>年齢:</p> {data.age}
//         </li>
//         <li>
//           <p>性別:</p> {data.gender}
//         </li>
//         <li>
//           <p>理由:</p> {data.reason}
//         </li>
//         {/* 他のフィールドも追加 */}
//       </ul>
//     </div>
//   );
// };

// export default confirm;

// app/confirm/[id]/page.tsx
// import { use } from "react";

// // データを取得する関数
// async function fetchSurveyData(id: string) {
//   const res = await fetch(`http://localhost:3000/api/v1/surveys/${id}`, {
//     method: "GET",
//     cache: "no-store", // 常に最新データを取得
//   });

//   if (!res.ok) {
//     throw new Error("データの取得に失敗しました");
//   }

//   return res.json();
// }

// export default async function ConfirmPage({ params }: { params: { id: string } }) {
//   const data = await use(fetchSurveyData(params.id)); // データを非同期に取得

//   return (
//     <div className="confirm">
//       <div className="title">確認画面</div>
//       <ul>
//         <li><p>年齢:</p> {data.age}</li>
//         <li><p>性別:</p> {data.gender}</li>
//         <li><p>業種:</p> {data.industry}</li>
//         <li><p>理由:</p> {data.reason}</li>
//         <li><p>自由記入:</p> {data.free}</li>
//         {/* 他のフィールドもここに追加 */}
//       </ul>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import Survey from "./Survey";

// const SurveyConfirm = () => {
//   const [formData, setFormData] = useState<any | null>(null); // フォームデータを保持
//   const [isConfirming, setIsConfirming] = useState(false); // 確認画面の表示切り替え

//   // フォーム送信時の処理
//   const handleFormSubmit = (data: any) => {
//     setFormData(data); // フォームデータを状態に保存
//     setIsConfirming(true); // 確認画面を表示
//   };

//   const handleBack = () => {
//     setIsConfirming(false); // 入力画面に戻る
//   };

//   const handleSend = () => {
//     alert("送信が完了しました！");
//     // サーバーに送信する処理をここに追加
//   };

//   return (
//     <div className="survey-confirm">
//       {isConfirming ? (
//         <div className="confirmation">
//           <h2>確認画面</h2>
//           <ul>
//             <li>
//               <p>年代:</p> {formData?.age || "未入力"}
//             </li>
//             <li>
//               <p>性別:</p> {formData?.gender || "未入力"}
//             </li>
//             <li>
//               <p>業種:</p> {formData?.industry || "未入力"}
//             </li>
//             <li>
//               <p>仕事内容:</p> {formData?.jobDetails || "未入力"}
//             </li>
//             <li>
//               <p>勤続年数:</p> {formData?.years || "未入力"}
//             </li>
//             <li>
//               <p>働き方:</p> {formData?.employment || "未入力"}
//             </li>
//             <li>
//               <p>苦労度:</p> {formData?.difficulty || "未入力"}
//             </li>
//             <li>
//               <p>自由記入:</p> {formData?.free || "未入力"}
//             </li>
//           </ul>
//           <button onClick={handleBack}>戻る</button>
//           <button onClick={handleSend}>送信</button>
//         </div>
//       ) : (
//         <Survey onSubmit={handleFormSubmit} />
//       )}
//     </div>
//   );
// };

// export default SurveyConfirm;
