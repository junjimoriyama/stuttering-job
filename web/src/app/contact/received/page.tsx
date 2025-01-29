"use client";

// react
import { Suspense } from "react";
// components
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
// svg
import { ReceivedContent } from "./receivedContent/ReceivedContent";

const received = () => {

  return (
    <>
      <Header />
      <Suspense>
        <ReceivedContent />
      </Suspense>
      <Footer />
    </>
  );
};

export default received;
