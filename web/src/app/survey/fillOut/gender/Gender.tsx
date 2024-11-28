import "./gender.scss";

export const Gender =({
  isGenderInvalid,
  setIsGenderInvalid,
}: {
  isGenderInvalid: boolean;
  setIsGenderInvalid: (value: boolean) => void;
}) => {
  const handleSelect = () => {
    setIsGenderInvalid(false)
};

  return (
    <li className="gender">
      <label htmlFor="gender">
        性別
        <span className="must">必須</span>
      </label>
      <select 
      id="gender"
      className={`gender-select ${isGenderInvalid ? 'isInvalid' : ''}`}
      name="gender"
      defaultValue=""
      onChange={() => handleSelect()}
      // required
      >
        <option value="" disabled>
          選択してください
        </option>
        <option value="male">男性</option>
        <option value="female">女性</option>
        <option value="non-binary">どちらでもない</option>
        <option value="no-answer">無回答</option>
      </select>
      <hr />
    </li>
  );
};

export default Gender;
