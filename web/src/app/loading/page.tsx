import { LoadingChara, LoadingLogo, TitleLogo } from "../../public/svg/svg";
import "./loading.scss";

const Loading = () => {
  return (
    <>
      <div className="loading">
        <TitleLogo />
        <LoadingChara />
        {/* <p className="loading-text">吃音と仕事</p> */}
        {/* <p className="loading-text">LOADING...</p> */}
        
      </div>
    </>
  );
};

export default Loading;
