
// components
import Header from "../../components/header/Header";
import BackGroundAnimation from "../../components/backgroundAnimation/BackgroundAnimation";
import FirstView from "./firstView/FirstView";
import HomeAbout from "./homeAbout/HomeAbout";
import Footer from "../../components/footer/Footer";
import Loading from "../loading/Loading";
// style
import "./top.scss";

const page = () => {
  return (
    <div className="top">
      {/* <Loading /> */}
      <BackGroundAnimation />
      <Header />
      <FirstView />
      <HomeAbout />
      <Footer />
    </div>
  );
};

export default page;
