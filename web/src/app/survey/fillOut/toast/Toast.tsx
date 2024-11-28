import "./toast.scss";

import React from "react";

const Toast = ({
  isAppear,
  setIsAppear,
}: {
  isAppear: boolean;
  setIsAppear: (value: boolean) => void;
}) => {
  const handleDelete = () => {
    setIsAppear(!isAppear);
  };
  return (
    <div className={`toast ${isAppear ? "isDisplay" : ""}`}>
      <button
        className="deleteToastBtn"
        onClick={handleDelete}
      >
        ×
      </button>
      <p className="toast-text">未選択のところがあります。</p>
      <p className="toast-text">ご確認お願いします。</p>
    </div>
  );
};

export default Toast;
