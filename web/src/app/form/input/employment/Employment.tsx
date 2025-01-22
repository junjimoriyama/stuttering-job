// react
import { useEffect, useRef, useState } from "react";
// type
import { FormWithSetValueProps } from "@/types/form";
// functions
import { storageSelectSaveData } from "@/functions/functions";
// svg
import { SurpriseMark } from "@/assets/svg/icon/mark";
import { DropArrow } from "@/assets/svg/icon/arrow";
// style
import "./employment.scss";

export const Employment = ({
  register,
  errors,
  setValue,
}: FormWithSetValueProps) => {
  // 選択されている値
  const [saveData, setSaveData] = useState("");

  useEffect(() => {
    const getStorageData = localStorage.getItem("stutter_job_employment") || "";
    // 画面遷移から戻った時にストレージデータを反映
    setValue("employment", getStorageData);
    setSaveData(getStorageData);
  }, []);

  // 遅延処理用のタイマーを保持する参照
  let timerRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <li className="employment">
      <label htmlFor="employment">
        働き方
        <span className="must">必須</span>
      </label>
      <div className="select_wrapper">
        <DropArrow />
        <select
          id="employment"
          value={saveData}
          {...register("employment", {
            onChange: (e) =>
              storageSelectSaveData(
                e,
                "stutter_job_employment",
                // setValue,
                setSaveData,
                timerRef
              ),
            required: "選択は必須です",
          })}
        >
          <option value="" disabled>
            選択してください
          </option>
          <option value="正社員">正社員</option>
          <option value="契約・派遣・嘱託社員">契約・派遣・嘱託社員</option>
          <option value="パート＆アルバイト">パート＆アルバイト</option>
          <option value="自営業＆フリーランス">自営業＆フリーランス</option>
          <option value="その他">その他</option>
        </select>
      </div>
      {errors.employment && typeof errors.employment.message === "string" && (
        <p className="error">
          <SurpriseMark />
          {errors.employment.message}
        </p>
      )}
    </li>
  );
};

export default Employment;
