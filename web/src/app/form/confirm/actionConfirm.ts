"use server";

import { redirect } from "next/navigation";

export const sendAction = async (formData: FormData) => {
  const allData = Object.fromEntries(formData.entries());

  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/user_data`, {
    // const res = await fetch(`http://localhost:3000/api/v1/user_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(allData),
    });

    if (!res.ok) {
      const errorMessage = await res.json();
      // メールアドレスが重複していたらリダイレクト
      if (errorMessage.errors?.includes("Email has already been taken")) {
        redirect("/form/input?error=EmailAlreadyTaken"); // ここで処理終了
        // return; // redirectの後に処理を続行しないようにreturnで終了
      }
      // その他のエラー
      throw new Error(JSON.stringify(errorMessage));
    }
    // 成功時リダイレクト
    redirect("/form/complete");

  } catch (error) {
     // Error.tsxページに遷移
    throw error;
  }
};