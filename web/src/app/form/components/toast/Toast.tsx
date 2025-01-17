import "./toast.scss";

import React from "react";

export const Toast = ({
  toast,
  setToast,
}: {
  toast: {
    display: boolean;
    text: string;
  };
  setToast: React.Dispatch<
    React.SetStateAction<{ display: boolean; text: string }>
  >;
}) => {
  const handleDelete = () => {
    setToast({
      display: false,
      text: "",
    });
  };
  
  return (
      // エラー文により表示文章を分ける
    <div className={`toast ${toast.text === "" ? "" : "isVisible"}`}>
      <button className="deleteToastBtn" onClick={handleDelete}>
        ×
      </button>
      <div className={`toastBox ${toast.text === "notAnswered" ? "isVisible" : ""}`}>
        <p className="toast_text">必須欄のご確認をお願いします。</p>
      </div>
      <div className={`toastBox ${toast.text === "emailAlreadyTaken" ? "isVisible" : ""}`}>
        <p className="toast_text">すでに使用されているメールアドレスです。</p>
        <p className="toast_text">他のアドレスをお試しください。</p>
      </div>
    </div>
  );
};
