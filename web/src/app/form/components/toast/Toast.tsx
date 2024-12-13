import "./toast.scss";

import React from "react";

const Toast = ({
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
    <div className={`toast ${toast.text === "" ? "" : "isDisplay"}`}>
      <button className="deleteToastBtn" onClick={handleDelete}>
        ×
      </button>
      <div className={`toastBox ${toast.text === "notAnswered" ? "isDisplay" : ""}`}>
        <p className="toast_text">必須欄の</p>
        <p className="toast_text">ご確認をお願いします。</p>
      </div>
      <div className={`toastBox ${toast.text === "emailAlreadyTaken" ? "isDisplay" : ""}`}>
        <p className="toast_text">このメールアドレスは</p>
        <p className="toast_text">使用されています。</p>
        <p className="toast_text">他のアドレスを</p>
        <p className="toast_text">お試しください。</p>
      </div>
    </div>
  );
};

export default Toast;
