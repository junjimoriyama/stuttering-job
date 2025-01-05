// svg
import { MainLogo } from "@/assets/svg/logo/logoSvg";
import { LoadingChara } from "@/assets/svg/character/characterSvg";
// style
import "./loading.scss"; 


const Loading = () => {
  return (
    <>
      <div className="loading">
        <MainLogo />
        <LoadingChara />
        {/* <p className="loading-text">吃音と仕事</p> */}
        {/* <p className="loading-text">LOADING...</p> */}
        
      </div>
    </>
  );
};

export default Loading;
