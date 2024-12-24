import "./sideBar.scss";

import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_contents">
        {/* <Pagination /> */}
        <div className="search">
          <ul>
            <li>
              <select
                id="age"
              >
                <option value="" disabled>
                  選択してください
                </option>
                {[...Array(9)].map((_, i) => {
                  const value = `${(i + 1) * 10}代`;
                  return (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
