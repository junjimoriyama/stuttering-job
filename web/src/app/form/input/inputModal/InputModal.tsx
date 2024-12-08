'use client'

import { Dispatch, SetStateAction } from "react";
import "./inputModal.scss";

export const InputModal = ({
  isOpen,
  setIsOpen
} : {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {

  // モーダル閉じたら
  const handleModalClose = () => {
    setIsOpen(false)
    // 背景固定解除
    document.body.style.overflow = ''
  }
  return (
    <div className={`modal ${isOpen ? 'isOpen' : ''}`}>
      <div className="mask"
      onClick={handleModalClose}
      ></div>
      <div className="inputModal">
      <div 
      className="inputModalCloseBtn"
      onClick={handleModalClose}
      >×</div>
        <ul className="inputModalList">
          <li className="inputModalItem target">
            <p className="heading">対象者について</p>
            <p className="text">現在お仕事されている吃音ある方、過去にお仕事されていた吃音ある方</p>
            <p className="text">（学生アルバイトの方も対象です。）</p>
          </li>
          <li className="inputModalItem InputField">
            <p className="heading">入力欄について</p>
            <p className="text">
              「必須」欄にはご回答お願いします。「自由記述欄」に関しては必須ではありません。
            </p>
          </li>
          <li className="inputModalItem publish">
            <p className="heading">掲載について</p>
            <p className="text">
              送って頂いたアンケートは内容を確認させて頂き準備出来次第、掲載いたします。
              管理者の状況によりお時間頂くこともございますが、ご容赦ください。
            </p>
            <p className="text">
              また内容が公序良俗に反する内容、その他掲載にそぐわないと判断した場合には、掲載を見送ら
              せて頂く場合がございますので予めご了承ください。
            </p>
          </li>
          <li className="inputModalItem privacy">
            <p className="heading">プライバシーについて</p>
            <p className="text">
              {" "}
              ご記入頂いたアンケートはニックネームは載せますが、その他、個人の特定ができないように
              します。
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InputModal;
