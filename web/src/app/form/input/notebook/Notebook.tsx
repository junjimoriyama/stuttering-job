import { BaseFormProps } from "@/app/types/form";
import "./notebook.scss";
import { SurpriseMark } from "@/public/svg/svg";

const Notebook = ({
  register,
  errors
} : BaseFormProps) => {

  return (
    <li className="notebook">
      <label htmlFor="notebook">
        障害者手帳の有無
        <span className="must">必須</span>
      </label>
      <select 
      id="notebook"
      // className={`notebook-select ${isNotebookInvalid ? "isInvalid" : ""}`}
      defaultValue=""
      {...register('notebook', {required: '選択は必須です。'})}
      >
        <option value="" disabled>
          選択してください
        </option>
        <option value="あり">あり</option>
        <option value="なし">なし</option>
        <option value="無回答">無回答</option>
      </select>
      {
        errors.notebook && typeof errors.notebook.message === 'string' && (
          <p className="error">
            <SurpriseMark />
            {errors.notebook.message}
          </p>
        )
      }
      <hr />
    </li>
  );
};

export default Notebook;
