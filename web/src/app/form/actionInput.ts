// import { redirect } from "next/navigation";

// export const sendAction = async (_: void | null, formData: FormData) => {
//   const allData = Object.fromEntries(formData.entries())

//   if (
//     !allData.age ||
//     !allData.gender ||
//     !allData.industry ||
//     !allData.employment ||
//     !allData.years ||
//     !allData.job_difficulty ||
//     !allData.job_hunt_difficulty ||
//     !allData.notebook ||
//     !allData.username || // 名前
//     !allData.email // メール
//   ) {
//     console.error("必須項目が未入力です");
//     return; // 必須項目が未入力の場合は処理を中断
//   }

//   const res = await fetch("http://localhost:3000/api/v1/inputs", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include", 
//     body: JSON.stringify(allData),
//   });
  
//   if (!res.ok) {
//     console.log("送信に失敗しました");
//     return
//   } else {
//     const data = await res.json()
//     console.log(data)
//     if(data.id) {
//       redirect(`/input/confirm/${data.id}`)
//     }
//   }
// };


// {id: 25, age: '40代', gender: null, industry: null, job_details: '', …}
// age
// : 
// "40代"
// created_at
// : 
// "2024-11-24T11:26:33.154Z"
// employment
// : 
// null
// free
// : 
// ""
// gender
// : 
// null
// id
// : 
// 25
// industry
// : 
// null
// job_details
// : 
// ""
// job_difficulty
// : 
// null
// job_hunt_difficulty
// : 
// null
// job_hunt_struggles
// : 
// ""
// job_struggles
// : 
// ""
// notebook
// : 
// null
// reason
// : 
// ""
// updated_at
// : 
// "2024-11-24T11:26:33.154Z"
// years
// : 
// null