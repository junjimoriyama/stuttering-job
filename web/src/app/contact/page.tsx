"use client";

// next
import Link from "next/link";
// react
import { useForm } from "react-hook-form";
// components
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
// svg
import { UpHandChara } from "@/assets/svg/character/characterSvg";
import { DropArrow } from "@/assets/svg/icon/arrow";
import { SurpriseMark } from "@/assets/svg/icon/mark";
// style
import "./contact.scss";
import { useEffect } from "react";
import { sendAction } from "../form/confirm/actionConfirm";
import { sendContactAction } from "./actionContact";

const contact = () => {
  const {
    register,
    handleSubmit,
    // 書くページではwatchの代わりにuseState使用
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const contactData = data;
    try {
      sendContactAction(contactData);
    } catch {}
  };

  // const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  //   // e.preventDefault();
  //   const formData = new FormData(e.currentTarget)
  //   console.log(formData)
  // };

  // 監視する値
  const contentValue = watch("content", "");
  // 最大文字数
  const maxLength = 1000;
  // 残り文字数
  const textCount = maxLength - contentValue.trim().length;

  return (
    <>
      <Header />
      <div className="contact">
        <div className="contact_intro">
          <p className="contact_title">
            お問い合わせ
            <UpHandChara />
          </p>
          <p className="contact_details">
            当サイトの利用について何かご不明な点やご質問ございましたらお問い合わせください。
            <br />
            また一度投稿した体験談の修正、削除依頼もこちらからお願い致します。
          </p>
        </div>

        <div className="privacy_policy">
          <input
            type="checkbox"
            id="privacy"
            {...register("privacy", {
              required: "プライバシーポリシーに同意が必要です",
            })}
          />
          <label htmlFor="privacy">
            <Link href={"/privacy"}>
              <span>プライバシーポリシー</span>
            </Link>
            をご確認、同意の上、ご記入・送信お願いします。
          </label>
          {errors.privacy && typeof errors.privacy.message === "string" && (
            <p className="error_privacy">
              <SurpriseMark />
              {errors.privacy.message}
            </p>
          )}
        </div>
        <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
          <ul className="contact_form_list">
            <li className="contact_form_item">
              <label htmlFor="name">
                お名前
                <span className="must">必須</span>
              </label>
              <input
                id="name"
                className="contact_form_name"
                type="text"
                {...register("name", {
                  required: "入力は必須です",
                })}
              />
              {errors.name && typeof errors.name.message === "string" && (
                <p className="error">
                  <SurpriseMark />
                  {errors.name.message}
                </p>
              )}
            </li>

            <li className="contact_form_item">
              <label htmlFor="email">
                メールアドレス
                <span className="must">必須</span>
              </label>
              <input
                id="email"
                className="contact_form_email"
                type="email"
                {...register("email", {
                  required: "入力は必須です",
                })}
              />
              {errors.email && typeof errors.email.message === "string" && (
                <p className="error">
                  <SurpriseMark />
                  {errors.email.message}
                </p>
              )}
            </li>

            <li className="contact_form_item">
              <label htmlFor="overview">
                お問い合わせの種別
                <span className="must">必須</span>
              </label>
              <div className="select_wrapper">
                <select
                  id="overview"
                  {...register("overview", {
                    required: "選択は必須です",
                  })}
                >
                  <option value="">選択してください</option>
                  <option value="write">体験談記入について</option>
                  <option value="edit">体験談修正について</option>
                  <option value="delete">体験談削除について</option>
                  <option value="site">サイト全体について</option>
                </select>
                <DropArrow />
              </div>
              {errors.overview &&
                typeof errors.overview.message === "string" && (
                  <div className="error">
                    <SurpriseMark />
                    {errors.overview.message}
                  </div>
                )}
            </li>

            <li className="contact_form_item">
              <label htmlFor="content">
                お問い合わせ内容
                <span className="must">必須</span>
              </label>
              <textarea
                id="content"
                className="contact_form_content"
                {...register("content", {
                  setValueAs: (value) => value.trim(),
                  required: "入力は必須です",
                })}
              />
              {errors.content && typeof errors.content.message === "string" && (
                <div className="error_content">
                  <SurpriseMark />
                  {errors.content.message}
                </div>
              )}
              <div className="textCount">
                {textCount} / {maxLength}文字
              </div>
            </li>
          </ul>

          <button className="contact_form_send_button" type="submit">
            送信する
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default contact;

// test197029@gmail.com
// testtesttest
