"use server";

import { redirect } from "next/navigation";

export const sendAction = async (formData: FormData) => {
  // formData.entries() は FormData を [[key, value], ...] の形式に変換し、Object.fromEntries() はそれを {key: value} の形式に変換する。
  const allData = Object.fromEntries(formData.entries());
  // エラー表示
  let hasError = false;
  // try {
    const res = await fetch("http://localhost:3000/api/v1/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(allData),
    });

    if (res.ok) {
      hasError = false;
    } else {
      hasError = true;
      // エラーメッセージ
      const errorMessage = await res.json()
      // メールアドレスが重複していたら
      if(errorMessage.errors.includes('Email has already been taken')) {
        redirect("/form/input?error=EmailAlreadyTaken");
      }
    }
  // } catch (error) {
  //   hasError = true;
  // }

  if (!hasError) {
    redirect("/form/complete");
  } else {
    // redirect("/");
  }
};
