import FirstView from "./firstView/FirstView";

import "./top.scss";
import Header from "../components/header/Header";
import BackGroundAnimation from "../components/backgroundAnimation/BackgroundAnimation";
import HomeAbout from "./homeAbout/HomeAbout";
import Footer from "../components/footer/Footer";
import Loading from "../loading/Loading";

const page = () => {
  return (
    <div className="top">
      {/* <Loading /> */}
      <BackGroundAnimation />
      <Header />
      <FirstView />
      <HomeAbout />
      <Footer />
      {/* <SpMenu /> */}
      {/* <section></section> */}
    </div>
  );
};

export default page;
