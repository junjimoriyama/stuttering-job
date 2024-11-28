import "./years.scss";

const Years = ({
  isYearsInvalid,
  setIsYearsInvalid,
}: {
  isYearsInvalid: boolean;
  setIsYearsInvalid: (value: boolean) => void;
}) => {

  const handleSelect = () => {
    setIsYearsInvalid(false);
  };
  return (
    <li className="years">
      <label htmlFor="years">
        勤続年数
        <span className="must">必須</span>
      </label>
      <select 
      id="years" 
      className={`years-select ${isYearsInvalid ? "isInvalid" : ""}`}
      name="years" 
      defaultValue=""
      onChange={() => handleSelect()}
      >
        <option value="" disabled>
          選択してください
        </option>
        <option value="0-1年">〜1&nbsp;年</option>
        <option value="1-3年">1〜3&nbsp;年</option>
        <option value="3-5年">3〜5&nbsp;年</option>
        <option value="5-10年">5〜10&nbsp;年</option>
        <option value="10+年">10&nbsp;年以上</option>
      </select>
      <hr />
    </li>
  );
};

export default Years;
