"use client";

import { Dispatch, SetStateAction } from "react";
import "./inputModal.scss";

export const InputModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  // モーダル閉じたら
  const handleModalClose = () => {
    setIsOpen(false);
    // 背景固定解除
    document.body.style.overflow = "";
  };
  return (
    <div className={`modal ${isOpen ? "isOpen" : ""}`}>
      <div className="mask" onClick={handleModalClose}></div>
      <div className="input_modal_body">
        <div className="input_modal_window">
          <div className="inputModalCloseBtn" onClick={handleModalClose}>
            ×
          </div>
          <div className="inputModalItem target">
            <div className="heading">
              <div className="inner">対象者について</div>
            </div>
            <p className="text">
              現在お仕事されている吃音ある方、過去にお仕事されていた吃音ある方
            </p>
            <p className="text">（学生アルバイトの方も対象です。）</p>
          </div>

          <div className="stitch"></div>

          <div className="inputModalItem InputField">
            <p className="heading">入力欄について</p>
            <p className="text">
              「必須」欄にはご回答お願いします。「自由記述欄」に関しては必須ではありません。
            </p>
          </div>

          <div className="stitch"></div>

          <div className="inputModalItem pubdivsh">
            <p className="heading">掲載について</p>
            <p className="text">
              送って頂いたアンケートは内容を確認させて頂き準備出来次第、掲載いたします。
            </p>
            <p className="text">
              管理者の状況によりお時間頂くこともございますが、ご容赦ください。
            </p>
            <p className="text">
              また内容が公序良俗に反する内容、その他掲載にそぐわないと判断した場合には、掲載を見送らせて頂くこともございますので予めご了承ください。
            </p>
          </div>

          <div className="stitch"></div>

          <div className="inputModalItem privacy">
            <p className="heading">プライバシーについて</p>
            <p className="text">
              {" "}
              ご記入頂いたアンケートはニックネームは載せますが、その他、個人の特定ができないようにします。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
