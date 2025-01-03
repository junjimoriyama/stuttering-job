import type { Metadata } from "next";
import localFont from "next/font/local";
import "./style/globals.css";
import Head from "next/head";

// import { Zen_Maru_Gothic } from "next/font/google";
// import { Noto_Sans_JP } from "next/font/google";
import { M_PLUS_1p } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import { StepProvider } from "./survey/stepContext";

// const ZenMaruGothic = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });
// const ZenMaruGothic = Zen_Maru_Gothic({ subsets: ["latin"], weight: ["400"] });
const MPlus1p = M_PLUS_1p({ subsets: ["latin"], weight: ["500"] });


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <StepProvider>
    <html lang="ja">
      <body className={MPlus1p.className}>
      {/* <Header /> */}
      {/* <body className={ZenMaruGothic.className}> */}
        {children}
      {/* <Footer /> */}
      </body>
    </html>
    // </StepProvider>
  );
}

      //   <Head>
      //   <link rel="preconnect" href="https://fonts.googleapis.com" />
      //   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      //   <link
      //     href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap"
      //     rel="stylesheet"
      //   />
      // </Head>