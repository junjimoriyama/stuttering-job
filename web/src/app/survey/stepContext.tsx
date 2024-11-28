// "use client";

// import React, {
//   createContext,
//   Dispatch,
//   ReactNode,
//   SetStateAction,
//   useReducer,
//   useState,
// } from "react";
// import { initialStepState, stepReducer } from "./stepReducer";

// export const StepContext = createContext<{
//   state: { currentStep: string };
//   dispatch: React.Dispatch<any>;
// }>({
//   state: initialStepState,
//   dispatch: () => null,
// });

// export const StepProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(stepReducer, initialStepState);

//   return (
//     <StepContext.Provider value={{ state, dispatch }}>
//       {children}
//     </StepContext.Provider>
//   );
// };
