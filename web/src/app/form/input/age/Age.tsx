import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import "./age.scss";
import { BaseFormProps, FormWithSetValueProps } from "@/app/types/form";
import { SurpriseMark } from "../../../../public/svg/svg";
import { storageSelectSaveData } from "@/app/functions/functions";

const Age = ({ 
  register, 
  errors, 
  setValue 
}: FormWithSetValueProps) => {
  
  // 表示用state 
  const [saveData, setSaveData] = useState("");

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_age") || ''
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
          <SurpriseMark />
          {errors.age.message}
        </p>
      )}
      
    </li>
  );
};

export default Age;

// "use client";

// import React, { useState, ChangeEvent } from "react";
// import "./age.scss";
// import { useFormContext } from "react-hook-form";

// const Age = ({
//   isAgeInvalid,
//   setIsAgeInvalid,
// }: {
//   isAgeInvalid: boolean;
//   setIsAgeInvalid: (value: boolean) => void;
// }) => {

//   const handleSelect = () => {
//       setIsAgeInvalid(false)
//   };
//   return (
//     <li className="age">
//       <label htmlFor="age">
//         年代 <span className="must">必須</span>
//       </label>
//       <select
//         id="age"
//         className={`age-select ${isAgeInvalid ? "isInvalid" : ""}`}
//         name="age"
//         defaultValue=""
//         onChange={() => handleSelect()}
//         // required
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
//       
//     </li>
//   );
// };

// export default Age;

// type AgeProps = {
//   register: UseFormRegister<any>;
//   errors: FieldErrors<any>;
//   // setValue: UseFormSetValue<any>;
// };

// const Age: React.FC<AgeProps> = ({ register, errors }) => {
//   // const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     // setValue("age", e.target.value);
//   // };

//   return (
//     <li className="age">
//       <label htmlFor="age">
//         年代 <span className="must">必須</span>
//       </label>
//       <select
//         id="age"
//         // className={`age-select ${errors.age ? "isInvalid" : ""}`}
//         {...register("age", { required: "選択は必須です" })}
//         defaultValue=""
//         // onChange={handleSelect}
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
//       {errors.age && typeof errors.age.message === "string" && (
//         <p className="error">{errors.age.message} </p>
//       )}
//       
//     </li>
//   );
// };
