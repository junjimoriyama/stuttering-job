"use client";

import { useEffect, useState } from "react";
import "./jobDifficulty.scss";
import { register } from "module";
import { FormWithSetValueProps } from "@/app/types/form";
import { SurpriseMark } from "../../../../../public/svg/svg";
import { useFormContext } from "react-hook-form";

const JobDifficulty = ({ register, errors, setValue }: FormWithSetValueProps) => {
  // useFormより値取得
  const { getValues } = useFormContext();
  const values = getValues()
  // クリックした番号
  const [clickIndex, setClickedIndex] = useState<number | null>(values.job_difficulty || null);
  const [onFocus, setOnFocus] = useState(false);

  const handleClick = (value: number) => {
    setOnFocus(true)
    setValue("job_difficulty", value, { shouldValidate: true }); 
    setClickedIndex(value)
  };

  return (
    <li className="job-difficulty">
      <label>
        吃音による仕事の苦労度
        <span className="must">必須</span>
      </label>
      <div
        tabIndex={0}
        onBlur={() => setOnFocus(false)} 
        className={`
          job-difficulty-level ${onFocus  ? "isActive" : ""}`}
      >
        <span className="job-difficulty-level-text">小</span>
        {[...Array(5)].map((_, i) => {
          const value = `${i + 1}`;
          return (
            <span
              key={value}
              className={`job-difficulty-level-item ${
                clickIndex === i + 1 ? "isClicked" : ""
              } `}
              onClick={() => {
                handleClick(i + 1); 
                // setClickedIndex(i + 1)
              }}
            >
              {value}
            </span>
          );
        })}
        <span className="job-difficulty-level-text">大</span>
      </div>
      {errors.job_difficulty && typeof errors.job_difficulty.message === "string" && (
        <p className="error">
          <SurpriseMark />
          {errors.job_difficulty.message}
        </p>
      )}

      <input
        id="job-difficulty"
        type="hidden"
        // name="job_difficulty"
        // value={clickIndex !== null ? clickIndex : ""}
        {...register("job_difficulty", { required: "選択してください" })}
      />
    </li>
  );
};

export default JobDifficulty;

//  <select id="job-difficulty-select" name="job-difficulty-select" defaultValue="">
{
  /* <option value="" disabled>
選択してください
</option>
<option value="5">とても苦労した</option>
<option value="4">少し苦労した</option>
<option value="3">普通</option>
<option value="2">あまり苦労しなかった</option>
<option value="1">全く苦労しなかった</option>
</select> */
}
{
  /* <li value="5">とても苦労した</li>
        <li value="4">少し苦労した</li>
        <li value="3">普通</li>
        <li value="2">あまり苦労しなかった</li>
        <li value="1">全く苦労しなかった</li> */
}


// "use client";

// import { useEffect, useState } from "react";
// import "./jobDifficulty.scss";
// import { register } from "module";

// const JobDifficulty = ({
//   isJobDifficultyInvalid,
//   setIsJobDifficultyInvalid,
// }: {
//   isJobDifficultyInvalid: boolean;
//   setIsJobDifficultyInvalid: (value: boolean) => void;
// }) => {
//   const [clickIndex, setClickedIndex] = useState<number | null>(null);
//   const [onFocus, setOnFocus] = useState(false);

//   const handleClick = () => {
//     setIsJobDifficultyInvalid(false);
//     setOnFocus(true)
//   };

//   const handleFocus = () => {
//     if(isJobDifficultyInvalid) {
//       setOnFocus(false)
//     } 
//     else {
//       setOnFocus(true)
//     }
//   }

//   return (
//     <li className="job-difficulty">
//       <label>
//         吃音による仕事の苦労度
//         <span className="must">必須</span>
//       </label>
//       <div
//         tabIndex={0}
//         onFocus={() => handleFocus()}
//         onBlur={() => setOnFocus(false)} 
//         className={`
//           job-difficulty-level 
//           ${onFocus && !isJobDifficultyInvalid ? "isActive" : ""}
//           ${isJobDifficultyInvalid ? "isInvalid" : ""}
//         `}
//       >
//         <span className="job-difficulty-level-text">小</span>
//         {[...Array(5)].map((_, i) => {
//           const value = `${i + 1}`;
//           return (
//             <span
//               // onClick={handleClick}
//               key={value}
//               className={`job-difficulty-level-item ${
//                 clickIndex === i + 1 ? "isClicked" : ""
//               } `}
//               onClick={() => {
//                 setClickedIndex(i + 1);
//                 handleClick()
//               }}
//             >
//               {value}
//             </span>
//           );
//         })}
//         <span className="job-difficulty-level-text">大</span>
//       </div>

//       <input
//         id="job-difficulty"
//         type="hidden"
//         name="job_difficulty"
//         value={clickIndex !== null ? clickIndex : ""}
//         // {...register("age", { required: "選択してください" })}
//       />
//     </li>
//   );
// };

// export default JobDifficulty;