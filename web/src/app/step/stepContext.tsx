import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

const StepContext = createContext<{
  step: string;
  setStep: Dispatch<SetStateAction<string>>;
}>({
  step: "input",
  setStep: () => {},
});

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState("input");

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};

export default StepContext;
