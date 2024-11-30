import "./employment.scss";

const Employment = ({
  isEmploymentInvalid,
  setIsEmploymentInvalid
} : {
  isEmploymentInvalid: boolean,
  setIsEmploymentInvalid: (value: boolean) => void,
}) => {

  const handleSelect = () => {
    setIsEmploymentInvalid(false);
  };
  return (
    <li className="employment">
      <label htmlFor="employment">
        働き方
        <span className="must">必須</span>
      </label>
      <select 
      id="employment"
      className={`employment-select ${isEmploymentInvalid ? "isInvalid" : ""}`}
      name="employment" 
      defaultValue=""
      onChange={() => handleSelect()}
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
      <hr />
    </li>
  );
};

export default Employment;
