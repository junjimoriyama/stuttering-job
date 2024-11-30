import { BaseFormProps } from "@/app/types/form";
import "./gender.scss";
import { SurpriseMark } from "../../../../../public/svg/svg";

export const Gender =({ register, errors }: BaseFormProps) => {

  return (
    <li className="gender">
      <label htmlFor="gender">
        性別
        <span className="must">必須</span>
      </label>
      <select 
      id="gender"
      defaultValue=""
      {...register('gender', {required: "選択は必須です" })}
      >
        <option value="" disabled>
          選択してください
        </option>
        <option value="male">男性</option>
        <option value="female">女性</option>
        <option value="non-binary">どちらでもない</option>
        <option value="no-answer">無回答</option>
      </select>
      { errors.gender && typeof errors.gender.message === 'string' && (
        <p className="error">
          <SurpriseMark />
          {errors.gender.message}
        </p>
      )}
      <hr />
    </li>
  );
};

export default Gender;
