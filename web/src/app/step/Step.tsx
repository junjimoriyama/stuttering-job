import "./step.scss";

const Step = () => {
  return (
    <div className="step">
      <ul className="stepList">
        <li className={`stepItem current`}>入力</li>
        <li className={`stepItem `}>確認</li>
        <li className={`stepItem`}>完了</li>
      </ul>
    </div>
  );
};

export default Step;
