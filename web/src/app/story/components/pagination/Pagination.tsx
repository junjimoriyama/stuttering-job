"use client";

import "./pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination_controls">
        <div className="page_prev_btn">←</div>
        <ul className="page_numbers">
          {[...Array(5)].map((_, i) => {
            return <li className="page_number">{i + 1}</li>;
          })}
        </ul>
        <div className="page_next_btn">→</div>
      </div>
      <div className="current_page"> 1 / 10</div>
    </div>
  );
};

export default Pagination;
