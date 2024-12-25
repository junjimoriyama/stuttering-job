"use client";

import './pagination.scss'

const Pagination = (
  { totalPage,
    currentPage,
    onPageChange
  }: 
  { 
    totalPage: number | null,
    currentPage: number,
    onPageChange: (page: number) => void

  }) => {


  return (
    <div className="pagination">
      <div className="pagination_controls">
        <button 
        className="page_prev_btn"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1) }
        // disabled={currentPage <= 1}
        >←</button>
        <ul className="page_numbers">
          {[...Array(totalPage)].map((_, i) => {
            const value = i + 1;
            return (
              <li
              className={`page_number ${currentPage === value ? 'isActive' : ''}`} key={value}
              onClick={() => onPageChange(value)}
              >
                {value}
              </li>
            );
          })}
        </ul>
        <button 
        className="page_next_btn"
        onClick={() => currentPage < totalPage! && onPageChange(currentPage + 1) }
        >→</button>
      </div>
      <div className="current_page">
        {currentPage} / {totalPage}
      </div>
    </div>
  );
};

export default Pagination;

// export default Pagination;
// "use client";

// const Pagination = ({
//   currentPage,
//   totalPages,
//   onPageChange,
// }: {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }) => {
//   return (
//     <div className="pagination">
//       <div className="pagination_controls">
//       <button
//         className="page_prev_btn"
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage <= 1}
//       >
//         ←
//       </button>
//       <ul className="page_numbers">
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//           <li
//             key={page}
//             className={`page_number ${currentPage === page ? "isActive" : ""}`}
//             onClick={() => onPageChange(page)}
//           >
//             {page}
//           </li>
//         ))}
//       </ul>
//       <button
//         className="page_next_btn"
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage >= totalPages}
//       >
//         →
//       </button>

//       </div>
//       <div className="current_page">
//         {/* {currentNumber} / {pageTotalCount} */}
//       </div>
//     </div>
//   );
// };

// export default Pagination;
