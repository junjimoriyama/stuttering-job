import { HomeIcon, LookIcon, WriteIcon } from "@/assets/svg/icon/menuIcon";
import React from "react";

const SpMenu = () => {
  return (
    <div className="spMenu">
      <div className="spMenu_mask"></div>
      <div className="spMenu_inner">
        <ul className="spMenu_list">
          <li className="spMenu_item">
            <span>
              <HomeIcon />
            </span>
            <span className="spMenu_item_text">ホーム</span>
          </li>
          <li className="spMenu_item">
            <span>
              <LookIcon />
            </span>
            <span className="spMenu_item_text">見る</span>
          </li>
          <li className="spMenu_item">
            <span>
              <WriteIcon />
            </span>
            <span className="spMenu_item_text">書く</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SpMenu;
