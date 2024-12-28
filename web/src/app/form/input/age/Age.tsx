import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import "./age.scss";
import { BaseFormProps, FormWithSetValueProps } from "@/app/types/form";
import { storageSelectSaveData } from "@/app/functions/functions";
import { surprise_mark } from "@/public/svg/icon/mark";

export const Age = ({ 
  register, 
  errors, 
  setValue 
}: FormWithSetValueProps) => {
  
  // 表示用state 
  const [saveData, setSaveData] = useState("");

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_age") || ''
    // 画面遷移から戻った時にストレージデータを反映
    setValue("age",getStorageData)
    setSaveData(getStorageData)
  }, [])

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  return (
    <li className="age">
      <label htmlFor="age">
        年代 <span className="must">必須</span>
      </label>
      <select
        id="age"
        value={saveData}
        {...register("age", { 
          onChange: (e) => storageSelectSaveData(
            e, 
            "stutter_job_age", 
            setValue, 
            setSaveData,
            timerRef),
          required: "選択は必須です" })}
      >
        <option value="" disabled>
          選択してください
        </option>
        {[...Array(9)].map((_, i) => {
          const value = `${(i + 1) * 10}代`;
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
      { errors.age && typeof errors.age.message === "string" && (
        <p className="error">
          <surprise_mark />
          {errors.age.message}
        </p>
      )}
      
    </li>
  );
};
// import React, { ChangeEvent, useEffect, useRef, useState } from "react";
// import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
// import "./age.scss";
// import { BaseFormProps, FormWithSetValueProps } from "@/app/types/form";
// import { storageSelectSaveData } from "@/app/functions/functions";
// import { surprise_mark } from "@/public/svg/icon/mark";

// export const Age = ({ 
//   register, 
//   errors, 
//   setValue 
// }: FormWithSetValueProps) => {
  
//   // 表示用state 
//   const [saveData, setSaveData] = useState("");

//   useEffect(() => {
//     const getStorageData = localStorage.getItem("stutter_job_age") || ''
//     setValue("age",getStorageData)
//     setSaveData(getStorageData)
//   }, [])

//   const timerRef = useRef<NodeJS.Timeout | null>(null)

//   return (
//     <li className="age">
//       <label htmlFor="age">
//         年代 <span className="must">必須</span>
//       </label>
//       <select
//         id="age"
//         value={saveData}
//         {...register("age", { 
//           onChange: (e) => storageSelectSaveData(
//             e, 
//             "stutter_job_age", 
//             setValue, 
//             setSaveData,
//             timerRef),
//           required: "選択は必須です" })}
//       >
//         <option value="" disabled>
//           選択してください
//         </option>
//         {[...Array(9)].map((_, i) => {
//           const value = `${(i + 1) * 10}代`;
//           return (
//             <option key={value} value={value}>
//               {value}
//             </option>
//           );
//         })}
//       </select>
//       { errors.age && typeof errors.age.message === "string" && (
//         <p className="error">
//           <surprise_mark />
//           {errors.age.message}
//         </p>
//       )}
      
//     </li>
//   );
// };

