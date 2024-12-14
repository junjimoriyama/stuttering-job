"use client";

import { useContext, useEffect, useState } from "react";
// import { AboutBubble, MainLogo } from "../../../public/svg/svg";
import Age from "./age/Age";
import JobDetails from "./details/JobDetails";
import JobDifficulty from "./jobDifficulty/JobDifficulty";
import JobHuntDifficulty from "./jobHuntDifficulty/JobHuntDifficulty";
import Gender from "./gender/Gender";
import Industry from "./industry/Industry";
import Toast from "../components/toast/Toast";
import UserInfo from "./userInfo/UserInfo";
import Reason from "./reason/Reason";
import Employment from "./employment/Employment";
import Years from "./years/Years";
import Notebook from "./notebook/Notebook";
import JobStruggles from "./jobStruggles/JobStruggles";
import JobHuntStruggles from "./jobHuntStruggles/JobHuntStruggles";
import Free from "./free/Free";
import Step from "../step/Step";
import { useFormContext } from "react-hook-form";

import { useRouter, useSearchParams } from "next/navigation";
import StepContext from "@/app/form/step/stepContext";
import InputModal from "../components/inputModal/InputModal";

import "./input.scss";
import Header from "@/app/components/header/Header";

const input = () => {
  const router = useRouter();

  // トースト
  const [toast, setToast] = useState({
    display: false,
    text: ''
  });

  // ステップ
  const {step, setStep} = useContext(StepContext)

  // params
  const params = useSearchParams()

  // モーダル
  const [ isOpen, setIsOpen  ] = useState(false)

  useEffect(() => {
    const errorParam = params.get("error");

    if (errorParam === "EmailAlreadyTaken") {
      setToast({
        display: true,
        text: "emailAlreadyTaken",
      });

      // スクロールを一番下にする
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });

      // クエリパラメータを削除
      const currentUrl = new URL(window.location.href)
      currentUrl.searchParams.delete('error')
      router.replace(currentUrl.toString())
    }
  }, [params, router]);

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
        text: ''});
    }
  };

  // モーダル開いたら
  const handleModalOpen = () => {
    setIsOpen(true)
    // 背景固定
    document.body.style.overflow = 'hidden'
  }

  // localStorage.clear()

  return (
    <div 
    className="input" 
    onClick={() => deleteToast()}>
      <Toast toast={toast} setToast={setToast} />
      <Header />
      <Step
        step={'input'}
        setStep={setStep}
      />
      {/* <AboutStory /> */}
      <form
        className={`input_form ${isOpen ? "inActive" : ''}`}
        onSubmit={handleSubmit(
          // バリデーション成功
          () => {
            setToast({
              display: false,
              text: ""});
            router.push("/form/confirm");
          },
          // バリデーション失敗
          () => {
            setToast({
              display: true,
              text: "notAnswered"});
          }
        )}
      >
        <div 
        className="form_guide_btn"
        onClick={handleModalOpen}
        // onClick={() => setIsOpen(true)}
        >体験談について</div>
        <p className="form_prompt">下記にご回答お願いいたします。</p>
        <ul>
          {/* 年代 --> */}
          <Age 
          register={register} 
          errors={errors} 
          setValue={setValue}
          />

          {/* 性別 --> Ï*/}
          <Gender register={register} 
          errors={errors}
          setValue={setValue}
          />

          {/* 業種 --> */}
          <Industry register={register} 
          errors={errors}
          setValue={setValue}
          />

          {/* 具体的な業種 */}
          <JobDetails 
          register={register} 
          errors={errors}
          setValue={setValue}
          />

          {/* 今の仕事を選んだ理由 */}
          <Reason 
          register={register} 
          errors={errors}
          setValue={setValue}
          />

          {/* 雇用形態 */}
          <Employment   
          register={register} 
          errors={errors}
          setValue={setValue}
          />
          {/* 勤続年数 */}
          <Years 
          register={register} 
          errors={errors}
          setValue={setValue}
          />

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
          <Notebook
            register={register}
            errors={errors}
            setValue={setValue}
          />

          {/* 自由記入欄 */}
          <Free 
            register={register} 
            errors={errors}
            setValue={setValue}
          />

          {/*　ユーザー情報 */}
          <UserInfo
            register={register} 
            errors={errors}
            setValue={setValue}
          />
        </ul>

        <button className="confirm_step_button" type="submit">
          確認画面へ
        </button>
      </form>
      <InputModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      />
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