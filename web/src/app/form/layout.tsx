"use client";
import { FormProvider, useForm } from "react-hook-form";
import { StepProvider } from "./step/stepContext";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const method = useForm({
    // mode: "onChange"
  });

  return (
    <StepProvider>
      <Header />
      <FormProvider {...method}>{children}</FormProvider>
      <Footer />
    </StepProvider>
  );
};

export default Layout;

// useForm単独でも使用可能だが、複雑なformの場合は、useFormContextを使い、useFormの状態やメソッドをuseFormContextを通じて子コンポーネントに渡すことができる。
