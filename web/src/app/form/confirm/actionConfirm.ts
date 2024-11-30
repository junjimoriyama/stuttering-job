'use server';

import { redirect } from "next/navigation";

export const sendAction = async (formData: FormData) => {

  console.log('test')

  const age = formData.get('age')
  const gender = formData.get('gender')
  const job_difficulty = Number(formData.get('job_difficulty'))


  const res = await fetch("http://localhost:3000/api/v1/forms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", 
    body: JSON.stringify({
      age: age, 
      gender: gender, 
      job_difficulty: job_difficulty
    }),
  });
  
  if (!res.ok) {
    console.log("送信に失敗しました");
    return
  } else {
    const data = await res.json()
    console.log(data)
    // if(data.id) {
      //   redirect(`/input/confirm/${data.id}`)
      // }
    }
  };
  
  // if (
  //   !allData.age ||
  //   !allData.gender ||
  //   !allData.industry ||
  //   !allData.employment ||
  //   !allData.years ||
  //   !allData.job_difficulty ||
  //   !allData.job_hunt_difficulty ||
  //   !allData.notebook ||
  //   !allData.username || // 名前
  //   !allData.email // メール
  // ) {
  //   console.error("必須項目が未入力です");
  //   return; // 必須項目が未入力の場合は処理を中断
  // }