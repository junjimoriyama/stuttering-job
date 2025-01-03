"use client";
// react
import { FormProvider, useForm } from "react-hook-form";
import { StepProvider } from "./step/stepContext";
// components
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // react-form-hooksの状態や関数を提供
  const method = useForm({});

  return (
    <StepProvider>
      <Header />
      <FormProvider {...method}>{children}</FormProvider>
      <Footer />
    </StepProvider>
  );
};

export default Layout;