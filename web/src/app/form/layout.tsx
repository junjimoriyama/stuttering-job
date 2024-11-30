'use client'
import { FormProvider, useForm } from 'react-hook-form'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const method = useForm({
    mode: "onChange"
  }) 
  return (
    <FormProvider {...method}>
      {children}
    </FormProvider>
  );
};

export default Layout;


// useForm単独でも使用可能だが、複雑なformの場合は、useFormContextを使い、useFormの状態やメソッドをuseFormContextを通じて子コンポーネントに渡すことができる。