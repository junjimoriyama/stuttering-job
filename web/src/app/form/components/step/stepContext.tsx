import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const StepContext = createContext<{
  step: string;
  setStep: Dispatch<SetStateAction<string>>;
}>({
  step: "input",
  setStep: () => {},
});

export const StepProvider = ({ children }: { children: ReactNode }) => {
  // ステップ状態
  const [step, setStep] = useState("input");

  // StepContext.Provider を使用して子コンポーネントにステップ情報を渡す
  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};
