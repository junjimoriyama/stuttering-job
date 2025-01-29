"use client";

// next
import { useRouter } from "next/navigation";
// react
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// type
import { contactFormData } from "@/types/contact";
// functions
import { sendContactAction } from "../actionContact";
// components
import Loading from "@/components/common/loading/loading";
import { PolicyCheck } from "@/components/common/policyCheck/PolicyCheck";
// svg
import { UpHandChara } from "@/assets/svg/character/characterSvg";
import { DropArrow } from "@/assets/svg/icon/arrow";
import { SurpriseMark } from "@/assets/svg/icon/mark";
// style
import "./contactForm.scss";

export const ContactForm = () => {
  // router
  const router = useRouter();

  // ローディング状態の有無
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    // 書くページではwatchの代わりにuseState使用
    watch,
    formState: { errors },
  } = useForm<contactFormData>();

  // 問い合わせデータ送信
  const onSubmit = async (formData: contactFormData) => {
    setIsLoading(true);
    // 送信するデータのみ取り出す(privacyは除外)
    try {
      // sendContactAction(formData);
      // 次画面アクセスのためパラメーターも付与する
      router.push("contact/received?from=contact");
    } catch (error) {
      console.error("送信エラー:", error);
    }
  };

  useEffect(() => {
    // チェック状態falseに初期化
    setIsChecked(false);
    // window.scrollTo({
    //   top: 0,
    // });
  }, [router]);

  // 監視する値
  const contentValue = watch("content", "");
  // 最大文字数
  const maxLength = 1000;
  // 残り文字数
  const textCount = maxLength - contentValue.trim().length;
  // チェックボックスをクリックの状態
  const [isChecked, setIsChecked] = useState(false);

  // チェックボックスをクリック
  const handleCheckBox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="contact">
        <div className="contact_intro">
          <p className="contact_title">
            お問い合わせ
            <UpHandChara />
          </p>
          <p className="contact_details">
            当サイトの利用について何かご不明な点やご質問ございましたらお問い合わせください。
            <br />
            また一度投稿した
            <span>体験談の修正、削除依頼</span>
            もこちらからお願い致します。
          </p>
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
                  <option value="" hidden>
                    選択してください
                  </option>
                  <option value="体験談記入について">体験談記入について</option>
                  <option value="体験談修正について">体験談修正について</option>
                  <option value="体験談削除について">体験談削除について</option>
                  <option value="サイト全体について">サイト全体について</option>
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

          <PolicyCheck isChecked={isChecked} handleCheckBox={handleCheckBox} />

          <button
            className={`contact_form_send_button ${
              isChecked ? "isActive" : ""
            }`}
            type="submit"
          >
            送信する
          </button>
        </form>
      </div>
    </>
  );
};
