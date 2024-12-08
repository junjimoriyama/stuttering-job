import { BaseFormProps } from "@/app/types/form";
import "./employment.scss";
import { SurpriseMark } from "@/public/svg/svg";

const Employment = ({
  register,
  errors
} : BaseFormProps) => {

  return (
    <li className="employment">
      <label htmlFor="employment">
        働き方
        <span className="must">必須</span>
      </label>
      <select 
      id="employment"
      defaultValue=""
      {...register('employment', {required: '選択は必須です'})}
      >
        <option value="" disabled>
          選択してください
        </option>
        <option value="正社員">正社員</option>
        <option value="契約・派遣・嘱託社員">契約・派遣・嘱託社員</option>
        <option value="パート＆アルバイト">パート＆アルバイト</option>
        <option value="自営業＆フリーランス">自営業＆フリーランス</option>
        <option value="その他">その他</option>
      </select>
      { errors.employment && typeof errors.employment.message === 'string' && (
        <p className="error">
        <SurpriseMark />
        {errors.employment.message}
      </p>
      )}
      <hr />
    </li>
  );
};

export default Employment;
