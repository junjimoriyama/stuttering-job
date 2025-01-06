// react
import { Dispatch, SetStateAction} from "react";
// style
import "./step.scss";

export const Step = ({
  step,
  setStep
} : {
  step: string,
  setStep: Dispatch<SetStateAction<string>>, 
}) => {

  return (
    <div className="step">
      <ul className="stepList">
        <li className={`stepItem ${step === "input" ? "current" : ""}`}>入力</li>
        <li className={`stepItem ${step === "confirm" ? "current" : ""}`}>確認</li>
        <li className={`stepItem  ${step === "complete" ? "current" : ""}`}>完了</li>
      </ul>
    </div>
  );
};
