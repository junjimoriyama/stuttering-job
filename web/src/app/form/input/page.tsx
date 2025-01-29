"use client";

// next
import { useRouter, useSearchParams } from "next/navigation";
// react
import { useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { StepContext } from "@/app/form/components/step/stepContext";
// components
import { Toast } from "../components/toast/Toast";
import { InputModal } from "../components/inputModal/InputModal";
import { Step } from "../components/step/Step";
import { Age } from "./age/Age";
import { JobDetails } from "./details/JobDetails";
import { JobDifficulty } from "./jobDifficulty/JobDifficulty";
import { JobHuntDifficulty } from "./jobHuntDifficulty/JobHuntDifficulty";
import { Gender } from "./gender/Gender";
import { Industry } from "./industry/Industry";
import { UserInfo } from "./userInfo/UserInfo";
import { Reason } from "./reason/Reason";
import { Employment } from "./employment/Employment";
import { Years } from "./years/Years";
import { Notebook } from "./notebook/Notebook";
import { JobStruggles } from "./jobStruggles/JobStruggles";
import { JobHuntStruggles } from "./jobHuntStruggles/JobHuntStruggles";
import { Free } from "./free/Free";
// style
import "./input.scss";
import { LinkArrow } from "@/assets/svg/icon/arrow";
import { GuideChara, UpHandChara } from "@/assets/svg/character/characterSvg";

const input = () => {
  // router
  const router = useRouter();
  // step
  const { step, setStep } = useContext(StepContext);
  // toast
  const [toast, setToast] = useState({
    display: false,
    text: "",
  });
  // modal
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // チェック状態falseに初期化
    // setIsChecked(false)
    // params
    const params = new URLSearchParams(window.location.search);

    if (typeof window !== "undefined") {
      // 登録メール重複時に表示
      // const errorParam = params.get("error");

      if (params.get("error") === "EmailAlreadyTaken") {
        setToast({
          display: true,
          text: "emailAlreadyTaken",
        });
      } else if (params.get("error") === "notAnswered") {
        setToast({
          display: true,
          text: "notAnswered",
        });

        // クエリパラメータを削除
        params.delete("error");
        router.replace(`${window.location.pathname}?${params.toString()}`);
      }
    }
  }, [router]);

  // useForm
  const {
    // 入力された値登録
    register,
    // 送信時の処理
    handleSubmit,
    // formの状態（エラー、送信中等）
    formState: { errors },
    // 特定のフィールドの値をプログラムで設定する
    setValue,
  } = useFormContext();

  // トースト消す
  const deleteToast = () => {
    if (toast) {
      setToast({
        display: false,
        text: "",
      });
    }
  };

  // モーダル開いたら
  const handleModalOpen = () => {
    setIsOpen(true);
    // 背景固定
    document.body.style.overflow = "hidden";
  };

  // 送信
  const onSubmit = () => {
    // 送信時のロジック
    setToast({
      display: false,
      text: "",
    });
    router.push("/form/confirm");
  };
  
  // 必須項目未入力
  const onError = () => {
    // エラー時のロジック
    setToast({
      display: true,
      text: "notAnswered",
    });
  };

  return (
    <>
      <div className="input" onClick={() => deleteToast()}>
        <Step step={"input"} setStep={setStep} />
        <div className="form_guide_btn" onClick={handleModalOpen}>
          <div className="form_guide_btn_background"></div>
          <GuideChara />
          <span className="form_guide_text">ご記入にあたり</span>
          <LinkArrow />
        </div>
        <div className="form_title">
          体験談記入
          <UpHandChara />
        </div>
        <div className="form_prompt">下記にフォームにご記入お願いします。</div>
        <form
          className="input_form"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          {/* <p className="form_save_text">入力中のデータは自動で保存されます。同じ端末・ブラウザを使用していれば、再度フォームを開いた際に復元できます。</p> */}
          <ul className="form_list">
            {/*　ユーザー情報 */}
            <UserInfo register={register} errors={errors} setValue={setValue} />

            <div className="age_gender_industry">
              {/* 年代 --> */}
              <Age register={register} errors={errors} setValue={setValue} />

              {/* 性別 --> Ï*/}
              <Gender register={register} errors={errors} setValue={setValue} />

              {/* 業種 --> */}
              <Industry
                register={register}
                errors={errors}
                setValue={setValue}
              />
            </div>

            {/* 具体的な業種 */}
            <JobDetails
              register={register}
              errors={errors}
              setValue={setValue}
            />

            {/* 今の仕事を選んだ理由 */}
            <Reason register={register} errors={errors} setValue={setValue} />

            <div className="employment_years">
              {/* 雇用形態 */}
              <Employment
                register={register}
                errors={errors}
                setValue={setValue}
              />
              {/* 勤続年数 */}
              <Years register={register} errors={errors} setValue={setValue} />
            </div>

            {/* 仕事の苦労度 */}
            <JobDifficulty
              register={register}
              errors={errors}
              setValue={setValue}
            />

            {/* 現在の仕事で苦労していること */}
            <JobStruggles
              register={register}
              errors={errors}
              setValue={setValue}
            />

            {/* 就職活動の苦労度 */}
            <JobHuntDifficulty
              register={register}
              errors={errors}
              setValue={setValue}
            />

            {/* 就職活動で苦労していること */}
            <JobHuntStruggles
              register={register}
              errors={errors}
              setValue={setValue}
            />

            {/* 手帳の有無 */}
            <Notebook register={register} errors={errors} setValue={setValue} />

            {/* 自由記入欄 */}
            <Free register={register} errors={errors} setValue={setValue} />
          </ul>
          <div className="confirm_step_button_wrap">
            <button className="confirm_step_button" type="submit">
              確認画面へ
            </button>
            <Toast toast={toast} setToast={setToast} />
          </div>
          {/* </div> */}
        </form>
      </div>
      {/* 体験談説明 */}
      <InputModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default input;

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
            
          </li> */
}
{
  /* <li>
            <label htmlFor="job_hunt_difficulty">
              就職活動の苦労度
            <span className="must">必須</span>
            </label>
            <select
              id="job_hunt_difficulty"
              name="job_hunt_difficulty"
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

// formStat: 現在地(アクションの結果の戻り値になる)
// formAction: 新しいアクションを実行するための関数
// sendAction: 実行されるアクション
// null: 初期値

// useActionState
// const [formState, formAction] = useActionState(sendAction, null);

// inputやselectをして何秒後かにローカルストレージに保存
// 最後にinputされたら保存（途中のinputはイベント発生させない
// フォームにonChange（input）したら処理する
// let scrollTimer;
// let flag = 0;

// window.onscroll = () => {
//     flag = 1;
//     ～スクロール中に走らせたい処理～

//     clearTimeout(scrollTimer);

//     scrollTimer = setTimeout(() => {
//         if(flag === 1) {
//             flag = 0;
//             ～スクロール完了後に走らせたい処理～
//         }
//     }, 250);
// }

{/* <form
          className="input_form"
          onSubmit={(e) => {
            e.preventDefault(); // デフォルトのリロード動作を防ぐ
            handleSubmit(
              () => {
                setToast({
                  display: false,
                  text: "",
                });
                router.push("/form/confirm");
              },
              () => {
                setToast({
                  display: true,
                  text: "notAnswered",
                });
              }
            )(e); // イベントを渡して手動でhandleSubmitを実行
          }}
        ></form> */}