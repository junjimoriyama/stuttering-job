// react
import { useEffect, useRef } from "react";
// type
import { FormWithSetValueProps } from "@/types/form";
// functions
import { storagePersonalSaveData } from "@/app/functions/functions";
// svg
import { SurpriseMark } from "@/assets/svg/icon/mark";
// style
import "./userInfo.scss";

export const UserInfo = ({
  register,
  errors,
  setValue
}: FormWithSetValueProps) => {

  useEffect(() => {
    // username
    const getStorageUsernameData = localStorage.getItem("stutter_job_username") || "";
    setValue("username", getStorageUsernameData);
    // email
    const getStorageEmailData = localStorage.getItem("stutter_job_email") || "";
    setValue("email", getStorageEmailData);
  }, []);

  // 遅延処理用のタイマーを保持する参照
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  
  return (
    <li className="userInfo">
      <div className="username">
        <label htmlFor="username">
          お名前(ニックネーム可)
          <span className="must">必須</span>
        </label>
        <input
          id="username"
          type="text"
          // autoComplete="name"
          {...register("username", {
            onChange: (e) => storagePersonalSaveData(
              e,
              "stutter_job_username",
              setValue,
              timerRef
            ),
            // 入力値の前後の空白を削除
            setValueAs: (value) => value.trim(),
          })}
          {...register("username", {
            required: "記入は必須です",
            maxLength: 225,
            setValueAs: (value) => value.trim()
          })}
        />
        {errors.username && typeof errors.username.message === "string" && (
          <p className="error">
          <SurpriseMark />
          {errors.username.message}
          </p>
        )}
      </div>
      <div
      >
        <label htmlFor="email">
          連絡先メールアドレス
          <span className="must">必須</span>
        </label>
        <input
          id="email"
          type="email"
          // autoComplete="email"
          {...register("email", {
            onChange: (e) => storagePersonalSaveData(
              e,
              "stutter_job_email",
              setValue,
              timerRef
            ),
            // 入力値の前後の空白を削除
            setValueAs: (value) => value.trim(),
          })}
        />
        {errors.email && typeof errors.email.message === "string" && (
          <p className="error">
          <SurpriseMark />
          {errors.email.message}
          </p>
        )}
      </div>
    </li>
  );
};