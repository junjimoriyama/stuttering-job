"use client";
// react
import { FormProvider, useForm } from "react-hook-form";
import { StepProvider } from "./components/step/stepContext";
// components
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // react-form-hooksの状態や関数を提供
  const method = useForm({});

  return (
    <>
      <Header />
      <StepProvider>
        <div></div>
        {/* <Suspense> */}
        <FormProvider {...method}>{children}</FormProvider>
        {/* </Suspense> */}
      </StepProvider>
      <Footer />
    </>
  );
};

export default Layout;
