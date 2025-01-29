"use client";

// react
import React, { Suspense } from "react";
// components
import { CompleteContent } from "./completeContent/CompleteContent";

const complete = () => {
  return (
    <>
      <Suspense>
        <CompleteContent />
      </Suspense>
    </>
  );
};

export default complete;
