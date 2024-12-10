import { ChangeEvent } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form"

// reactFormHook
export type formHookProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  setValue: UseFormSetValue<any>;
}

// selectタグlocalStorage保存
export type handleSelectProps = (
  e: ChangeEvent<HTMLSelectElement>,
  key: string,
  setValue: (key: string, value:string) => void,
  setSaveData: (key: string) => void,
  timerRef: React.MutableRefObject<NodeJS.Timeout | null>,
) => void


// selectタグlocalStorage保存
export type handleInputProps = (
  e: ChangeEvent<HTMLSelectElement>,
  key: string,
  setValue: (key: string, value:string) => void,
  setTextCount: (key: number) => void,
  timerRef: React.MutableRefObject<NodeJS.Timeout | null>,
  maxLength: number,
) => void


// 共通する基本型をinterfaceで定義
export interface BaseFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

// 必要に応じて拡張する
export interface FormWithSetValueProps extends BaseFormProps {
  setValue: UseFormSetValue<any>;
}