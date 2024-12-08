import { BaseFormProps } from "@/app/types/form";
import "./userInfo.scss";
import { SurpriseMark } from "@/public/svg/svg";

const UserInfo = ({
  register,
  errors
}: BaseFormProps) => {
  
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
          autoComplete="name"
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
          autoComplete="email"
          {...register("email", {
            required: '記入は必須です',
            maxLength: 255,
            setValueAs: (value) => value.trim()
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