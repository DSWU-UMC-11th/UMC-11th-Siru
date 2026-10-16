import { useState } from "react";

function Pagination() {
  const [page, setPage] = useState(1);

  const pageNumbers: number[] = [1, 2, 3, 4, 5];

  function handlePageBtn(pageId: number) {
    setPage(pageId);
  }

  return (
    <div className="pagenation">
      <img className='chevron-L' src="../../public/icons/chevron-left.svg" />
      <ul>
        <li>
          {pageNumbers.map((pageNumber) => (
            <button
              className={page === pageNumber ? "page active" : "page"}
              onClick={() => handlePageBtn(pageNumber)}
              key={pageNumber}
            >
              {pageNumber}
            </button>
          ))}
        </li>
      </ul>
      <img src="../../public/icons/chevron-right.svg" />
    </div>
  );
}

export default Pagination;
