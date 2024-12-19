import { FormWithSetValueProps } from "@/app/types/form";
import "./userInfo.scss";
import { SurpriseMark } from "@/public/svg/icon/mark";
import { useEffect, useRef } from "react";
import { storagePersonalSaveData } from "@/app/functions/functions";

const UserInfo = ({
  register,
  errors,
  setValue
}: FormWithSetValueProps) => {

  useEffect(() => {
    const getStorageUsernameData = localStorage.getItem("stutter_job_username") || "";
    const getStorageEmailData = localStorage.getItem("stutter_job_email") || "";
    setValue("username", getStorageUsernameData);
    setValue("email", getStorageEmailData);
  }, []);

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // localStorage.clear()
  
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
            required: '記入は必須です',
            maxLength: 225,
            setValueAs: (value) => value.trim()
          })}
        />
        {errors.username && typeof errors.username.message === 'string' && (
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
        {errors.email && typeof errors.email.message === 'string' && (
          <p className="error">
          <SurpriseMark />
          {errors.email.message}
          </p>
        )}
      </div>
    </li>
  );
};

export default UserInfo;