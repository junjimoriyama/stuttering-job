import React from "react";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import "./age.scss";
import { BaseFormProps } from "@/app/types/form";
import { SurpriseMark } from "../../../../public/svg/svg";

const Age = ({ register, errors }: BaseFormProps) => {
  return (
    <li className="age">
      <label htmlFor="age">
        年代 <span className="must">必須</span>
      </label>
      <select
        id="age"
        defaultValue=""
        {...register("age", { required: "選択は必須です" })}
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
      <hr />
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
//       <hr />
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
//       <hr />
//     </li>
//   );
// };
