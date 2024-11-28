import "./notebook.scss";

const Notebook = ({
  isNotebookInvalid,
  setIsNotebookInvalid,
}: {
  isNotebookInvalid: boolean;
  setIsNotebookInvalid: (value: boolean) => void;
}) => {

  const handleSelect = () => {
    setIsNotebookInvalid(false);
  };
  return (
    <li className="notebook">
      <label htmlFor="notebook">
        障害者手帳の有無
        <span className="must">必須</span>
      </label>
      <select 
      id="notebook"
      className={`notebook-select ${isNotebookInvalid ? "isInvalid" : ""}`}
      name="notebook" 
      defaultValue=""
      onChange={() => handleSelect()}
      >
        <option value="" disabled>
          選択してください
        </option>
        <option value="あり">あり</option>
        <option value="なし">なし</option>
        <option value="無回答">無回答</option>
      </select>
      <hr />
    </li>
  );
};

export default Notebook;
