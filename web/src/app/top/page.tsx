// components
import Header from "../../components/layout/header/Header";
import BackGroundAnimation from "./components/backgroundAnimation/BackgroundAnimation";
import FirstView from "./firstView/FirstView";
import HomeAbout from "./homeAbout/HomeAbout";
import Footer from "../../components/layout/footer/Footer";
// style
import "./top.scss";

const page = () => {
  return (
    <div className="top">
      <BackGroundAnimation />
      <Header />
      <FirstView />
      <HomeAbout />
      <Footer />
    </div>
  );
};

export default page;
// https://stuttering-job-befecc074139.herokuapp.com/
