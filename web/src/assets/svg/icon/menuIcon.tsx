export const MenuIcon = ({
  isShow,
  handleMenuIconClick,
}: {
  isShow: boolean;
  handleMenuIconClick: () => void;
}) => {
  return (
    <div className="menuIcon" onClick={handleMenuIconClick}>
      <svg
        id="menuIcon"
        className="menuIconSvg"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        version="1.1"
        viewBox="0 0 50 50"
      >
        <path
          className={`menuIconPath ${isShow ? "isShow" : ""}`}
          d="M25.1,3.8C11.5,3.8.5,12.5.5,23.2s3.2,11,8.3,14.5l-3.2,9.3,14.9-4.8c1.5.2,3.1.3,4.6.3,13.6,0,24.6-8.7,24.6-19.4S38.7,3.8,25.1,3.8Z"
          fill="#1a2c5b"
        />
      </svg>
      <span className={`${isShow ? "isShow" : ""}`}></span>
      <span className={`${isShow ? "isShow" : ""}`}></span>
      {/* <span></span> */}
    </div>
  );
};


export const HomeIcon = () => {
  return (
    <svg
      id="homeIcon"
      className="headerIcon"
      data-name="homeIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      version="1.1"
      viewBox="0 0 50 50"
    >
      <path
        d="M47.7,24.7L24.8,1.8c-.2-.2-.4-.2-.6,0L1.4,24.7c-.2.2,0,.7.3.7h5.7v21.8c0,.4.3.8.8.8h32.9c.4,0,.8-.3.8-.8v-21.8h5.7c.4,0,.5-.4.3-.7Z"
        fill="#1a2c5d"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth=".2"
      />
      <g>
        <rect
          x="18.4"
          y="28.6"
          width="5.7"
          height="5.7"
          rx=".4"
          ry=".4"
          fill="#fff"
        />
        <rect
          x="25"
          y="28.6"
          width="5.7"
          height="5.7"
          rx=".4"
          ry=".4"
          fill="#fff"
        />
        <rect
          x="18.4"
          y="35.1"
          width="5.7"
          height="5.7"
          rx=".4"
          ry=".4"
          fill="#fff"
        />
        <rect
          x="25"
          y="35.2"
          width="5.7"
          height="5.7"
          rx=".4"
          ry=".4"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export const LookIcon = () => {
  return (
    <svg
      id="lookIcon"
      data-name="lookIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      version="1.1"
      viewBox="0 0 50 50"
    >
      <path
        d="M34.4,32.9c-.2-.5-.7-.7-1-.5l-1.3.7-1.3.7c-.3.2-.4.7-.2,1.1l7.1,13.9c.2.5.7.7,1,.5l2.6-1.3c.3-.2.4-.7.2-1.1l-7.1-13.9Z"
        fill="#1a2c5d"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth=".2"
      />
      <g>
        <circle
          cx="25"
          cy="18.5"
          r="17.8"
          fill="#1a2c5d"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth=".2"
        />
        <circle
          cx="25"
          cy="18.5"
          r="13.9"
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth=".8"
        />
      </g>
    </svg>
  );
};

export const WriteIcon = () => {
  return (
    <svg
      id="HeaderWriteIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      version="1.1"
      viewBox="0 0 50 50"
    >
      <path
        d="M8.4,20.4c.2,0,12.6-11.4,12.6-11.4l19.7,21.9,3.6,16.3-16-4.8L8.4,20.4Z"
        fill="#1a2c5d"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth=".2"
      />
      <polygon
        points="29.1 42.3 40.5 31.8 42.5 40.9 37.6 44.8 29.1 42.3"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth=".8"
      />
      <path
        d="M19,6.9l-12.2,11.9-3.6-3.7c-1.6-1.8-1.4-4.6.4-6.2l6.3-5.7c1.8-1.6,4.5-1.5,6.1.3l3,3.4Z"
        fill="#1a2c5d"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth=".2"
      />
      <polygon
        points="8.7 20.2 6.3 17.8 18.5 6.7 20.9 9.4 8.7 20.2"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth=".9"
      />
    </svg>
  );
};

export const HomeIconWhite = () => {
  return (
    <svg
      id="homeIcon"
      className="headerIcon"
      data-name="homeIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      version="1.1"
      viewBox="0 0 50 50"
    >
      <path
        d="M47.7,24.7L24.8,1.8c-.2-.2-.4-.2-.6,0L1.4,24.7c-.2.2,0,.7.3.7h5.7v21.8c0,.4.3.8.8.8h32.9c.4,0,.8-.3.8-.8v-21.8h5.7c.4,0,.5-.4.3-.7Z"
        fill="#fff"
        stroke="#1a2c5d"
        strokeMiterlimit="10"
        strokeWidth=".2"
      />
      <g>
        <rect
          x="18.4"
          y="28.6"
          width="5.7"
          height="5.7"
          rx=".4"
          ry=".4"
          fill="#1a2c5d"
        />
        <rect
          x="25"
          y="28.6"
          width="5.7"
          height="5.7"
          rx=".4"
          ry=".4"
          fill="#1a2c5d"
        />
        <rect
          x="18.4"
          y="35.1"
          width="5.7"
          height="5.7"
          rx=".4"
          ry=".4"
          fill="#1a2c5d"
        />
        <rect
          x="25"
          y="35.2"
          width="5.7"
          height="5.7"
          rx=".4"
          ry=".4"
          fill="#1a2c5d"
        />
      </g>
    </svg>
  );
};
// 見るアイコン
export const LookIconWhite = () => {
  return (
    <svg
      id="lookIcon"
      data-name="lookIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      version="1.1"
      viewBox="0 0 50 50"
    >
      <path
        d="M34.4,32.9c-.2-.5-.7-.7-1-.5l-1.3.7-1.3.7c-.3.2-.4.7-.2,1.1l7.1,13.9c.2.5.7.7,1,.5l2.6-1.3c.3-.2.4-.7.2-1.1l-7.1-13.9Z"
        fill="#fff"
        stroke="#1a2c5d"
        strokeMiterlimit="10"
        strokeWidth=".2"
      />
      <g>
        <circle
          cx="25"
          cy="18.5"
          r="17.8"
          fill="#fff"
          stroke="#1a2c5d"
          strokeMiterlimit="10"
          strokeWidth=".2"
        />
        <circle
          cx="25"
          cy="18.5"
          r="13.9"
          fill="#1a2c5d"
          stroke="#1a2c5d"
          strokeMiterlimit="10"
          strokeWidth=".8"
        />
      </g>
    </svg>
  );
};
export const WriteIconWhite = () => {
  return (
    <svg
      id="HeaderWriteIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      version="1.1"
      viewBox="0 0 50 50"
    >
      <path
        d="M8.4,20.4c.2,0,12.6-11.4,12.6-11.4l19.7,21.9,3.6,16.3-16-4.8L8.4,20.4Z"
        fill="#fff" 
        stroke="#1a2c5d"
        strokeMiterlimit="10"
        strokeWidth=".2"
      />
      <polygon
        points="29.1 42.3 40.5 31.8 42.5 40.9 37.6 44.8 29.1 42.3"
        fill="#1a2c5d"  
        stroke="#1a2c5d"
        strokeMiterlimit="10"
        strokeWidth=".8"
      />
      <path
        d="M19,6.9l-12.2,11.9-3.6-3.7c-1.6-1.8-1.4-4.6.4-6.2l6.3-5.7c1.8-1.6,4.5-1.5,6.1.3l3,3.4Z"
        fill="#fff"  
        stroke="#1a2c5d"
        strokeMiterlimit="10"
        strokeWidth=".2"
      />
      <polygon
        points="8.7 20.2 6.3 17.8 18.5 6.7 20.9 9.4 8.7 20.2"
        fill="#1a2c5d"  
        stroke="#1a2c5d"
        strokeMiterlimit="10"
        strokeWidth=".9"
      />
    </svg>
  );
};