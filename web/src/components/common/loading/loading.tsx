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
        <p>送信しています。</p>
        <p>少々お待ちください。</p>
      </div>
    </>
  );
};

export default Loading;
