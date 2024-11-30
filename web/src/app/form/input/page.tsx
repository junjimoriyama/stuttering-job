"use client";

import { useActionState, useEffect, useState } from "react";
import { MainLogo } from "../../../../public/svg/svg";
import Age from "./age/Age";
import JobDetails from "./details/JobDetails";
import JobDifficulty from "./jobDifficulty/JobDifficulty";
import JobHuntDifficulty from "./jobHuntDifficulty/JobHuntDifficulty";
import "../form.scss";
import Gender from "./gender/Gender";
import Industry from "./industry/Industry";
import Toast from "./toast/Toast";
import UserInfo from "./userInfo/UserInfo";
import Reason from "./reason/Reason";
import Employment from "./employment/Employment";
import Years from "./years/Years";
import Notebook from "./notebook/Notebook";
import JobStruggles from "./JobStruggles/JobStruggles";
import JobHuntStruggles from "./jobHuntStruggles/JobHuntStruggles";
import Free from "./free/Free";
import Step from "../../step/Step";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

import { useRouter } from "next/navigation";

const input = () => {
  // formStat: 現在地(アクションの結果の戻り値になる)
  // formAction: 新しいアクションを実行するための関数
  // sendAction: 実行されるアクション
  // null: 初期値

  // useActionState
  // const [formState, formAction] = useActionState(sendAction, null);

  const router = useRouter();

  // トースト
  const [isAppear, setIsAppear] = useState(false);

  // useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useFormContext();

  // トースト消す
  const deleteToast = () => {
    if (isAppear) {
      setIsAppear(false);
    }
  };
  return (
    <div className="input" onClick={() => deleteToast()}>
      <Toast isAppear={isAppear} setIsAppear={setIsAppear} />
      <Step />
      <form
        className="input-form"
        onSubmit={handleSubmit(
          // バリデーション成功
          () => {
            setIsAppear(false);
            router.push("/form/confirm");
          },
          // バリデーション失敗
          () => {
            setIsAppear(true);
          }
        )}
      >
        <div className="title">体験アンケート</div>
        <ul>
          {/* 年代 --> */}
          <Age register={register} errors={errors} />

          {/* 性別 --> Ï*/}
          <Gender register={register} errors={errors} />

          {/* 業種 --> */}
          {/* <Industry
            isIndustryInvalid={isIndustryInvalid}
            setIsIndustryInvalid={setIsIndustryInvalid}
          /> */}

          {/* 具体的な業種 */}
          {/* <JobDetails /> */}

          {/* 今の仕事を選んだ理由 */}
          {/* <Reason /> */}

          {/* 雇用形態 */}
          {/* <Employment
            isEmploymentInvalid={isEmploymentInvalid}
            setIsEmploymentInvalid={setIsEmploymentInvalid}
          /> */}

          {/* 勤続年数 */}
          {/* <Years
            isYearsInvalid={isYearsInvalid}
            setIsYearsInvalid={setIsYearsInvalid}
          /> */}

          {/* 仕事の苦労度 */}
          <JobDifficulty
            register={register}
            errors={errors}
            setValue={setValue}
          />

          {/* 現在の仕事で苦労していること */}
          {/* <JobStruggles /> */}

          {/* 就職活動の苦労度 */}
          {/* <JobHuntDifficulty
            isJobHuntDifficultyInvalid={isJobHuntDifficultyInvalid}
            setIsJobHuntDifficultyInvalid={setIsJobHuntDifficultyInvalid}
          /> */}

          {/* 就職活動で苦労していること */}
          {/* <JobHuntStruggles /> */}

          {/* jobHuntStruggles */}

          {/* 手帳の有無 */}
          {/* <Notebook
            isNotebookInvalid={isNotebookInvalid}
            setIsNotebookInvalid={setIsNotebookInvalid}
          /> */}

          {/* 自由記入欄 */}
          {/* <Free /> */}

          {/*　ユーザー情報 */}
          {/* <UserInfo
            isUserNameInvalid={isUserNameInvalid}
            setIsInUserNameInvalid={setIsInUserNameInvalid}
            isEmailInvalid={isEmailInvalid}
            setIsEmailInvalid={setIsEmailInvalid}
          /> */}
        </ul>

        <button className="confirm-step-button" type="submit">
          確認画面へ
        </button>
      </form>
      {/* <MainLogo/> */}
      {/* </FormProvider> */}
    </div>
  );
};

export default input;

// 入力画面と確認画面はクライアント上で遷移
// クッキーに入力したデータを保存。有効期限設定できる
// クッキーでフォーム内容を判別して確認画面に表示
//

{
  /* 副業 */
}
{
  /* <li>
            <label htmlFor="side-job">副業(していたら)</label>
            <textarea id="side-job" name="side-job"></textarea>
          </li> */
}

{
  /* 過去の仕事 */
}
{
  /* <li>
            <label htmlFor="past-jobs">過去の仕事</label>
            <textarea id="past-jobs" name="past-jobs"></textarea>
          </li> */
}

{
  /* 障害者雇用 */
}
{
  /* <li>
            <label htmlFor="disabled-employment">
              障害者雇用
              <span className="must">必須</span>
            </label>
            <select
              id="disabled-employment"
              name="disabled-employment"
              defaultValue=""
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="yes">はい</option>
              <option value="no">いいえ</option>
              <option value="no-answer">無回答</option>
            </select>
            <hr />
          </li> */
}
{
  /* <li>
            <label htmlFor="job-hunt-difficulty">
              就職活動の苦労度
            <span className="must">必須</span>
            </label>
            <select
              id="job-hunt-difficulty"
              name="job-hunt-difficulty"
              defaultValue=""
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="5">とても苦労した</option>
              <option value="4">少し苦労した</option>
              <option value="3">普通</option>
              <option value="2">あまり苦労しなかった</option>
              <option value="1">全く苦労しなかった</option>
            </select>
          </li> */
}

// const [isAgeInvalid, setIsAgeInvalid] = useState(false);
// const [isGenderInvalid, setIsGenderInvalid] = useState(false);
// const [isIndustryInvalid, setIsIndustryInvalid] = useState(false);
// const [isUserNameInvalid, setIsInUserNameInvalid] = useState(false);
// const [isJobDifficultyInvalid, setIsJobDifficultyInvalid] = useState(false);
// const [isJobHuntDifficultyInvalid, setIsJobHuntDifficultyInvalid] =
//   useState(false);
// const [isEmploymentInvalid, setIsEmploymentInvalid] = useState(false);
// const [isYearsInvalid, setIsYearsInvalid] = useState(false);
// const [isNotebookInvalid, setIsNotebookInvalid] = useState(false);
// const [isEmailInvalid, setIsEmailInvalid] = useState(false);

// const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   // const formData = new FormData(e.currentTarget);

//   // const validList = [
//   //   { key: "age", setInvalid: setIsAgeInvalid },
//   //   { key: "gender", setInvalid: setIsGenderInvalid },
//   //   // { key: "industry", setInvalid: setIsIndustryInvalid },
//   //   // { key: "username", setInvalid: setIsInUserNameInvalid },
//   //   // { key: "email", setInvalid: setIsEmailInvalid },
//   //   { key: "job_difficulty", setInvalid: setIsJobDifficultyInvalid },
//   //   // { key: "job_hunt_difficulty", setInvalid: setIsJobHuntDifficultyInvalid },
//   //   // { key: "employment", setInvalid: setIsEmploymentInvalid },
//   //   // { key: "years", setInvalid: setIsYearsInvalid },
//   //   // { key: "notebook", setInvalid: setIsNotebookInvalid },
//   // ];

//   // validList.forEach(({ key, setInvalid }) => {
//   //   const value = formData.get(key);
//   //   const trimValue = typeof value === "string" ? value.trim() : value;
//   //   // formに値がなければ
//   //   if (!trimValue || trimValue === "") {
//   //     // 送信無効化
//   //     e.preventDefault();
//   //     setInvalid(true);
//   //     setIsAppear(true);
//   //   }
//   // });
// };
