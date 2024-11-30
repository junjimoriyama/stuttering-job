import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form"

// 共通する基本型をinterfaceで定義
export interface BaseFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

// 必要に応じて拡張する
export interface FormWithSetValueProps extends BaseFormProps {
  setValue: UseFormSetValue<any>;
}