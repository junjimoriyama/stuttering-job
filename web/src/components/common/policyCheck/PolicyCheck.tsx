"use client";
// next
import Link from "next/link";
// react
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
// svg
import { CheckMark, SurpriseMark } from "@/assets/svg/icon/mark";
// style
import "./policyCheck.scss"

export const PolicyCheck = (
  {
    isChecked,
    handleCheckBox,
  } : {
    isChecked: boolean,
    handleCheckBox: () => void
  }
) => {
  return (
    <div className="privacy">
      <div className="privacy_consent">
        <div className="privacy_consent_check">
          {isChecked && <CheckMark />}
          <input
            type="checkbox"
            id="privacy"
            onClick={handleCheckBox}
          />
        </div>
        <label htmlFor="privacy">
          <Link href={"/privacyPolicy"} target="_blank" rel="noopener noreferrer">
            <span>プライバシーポリシー</span>
          </Link>
          を確認し、同意をします。
        </label>
      </div>
    </div>
  );
};