import PaginationItem from "./PaginationItem";

const Pagination = ({
  currentPage,
  totalPages,
  handlePageChange,
  handlePreviousPage,
  handleNextPage,
}) => {
  const renderPageNumbers = () => {
    let pageNumbers = [];
    const maxVisiblePages = 4; // Maximum number of visible page numbers

    if (totalPages <= maxVisiblePages) {
      // If total pages are less than or equal to the maximum visible pages, show all page numbers
      pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      // Otherwise, show ellipsis (...) for middle inactive pages
      let startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = endPage - maxVisiblePages + 1;
      }

      if (startPage > 1) {
        pageNumbers.push(1);
      }

      if (startPage > 2) {
        pageNumbers.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        pageNumbers.push("...");
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((pageNumber, index) => (
      <PaginationItem
        key={index}
        pageNumber={pageNumber}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    ));
  };

  return (
    <div className="flex">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        style={{
          backgroundColor: "transparent",
          color: currentPage === 1 ? "var(--medium)" : "var(--primary-1100)",
          marginRight: 3,
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        <i className="bx bxs-chevron-left"></i>
      </button>

      {renderPageNumbers()}

      <button
        onClick={handleNextPage}
        style={{
          backgroundColor: "transparent",
          color:
            currentPage === totalPages
              ? "var(--medium)"
              : "var(--primary-1100)",
          marginRight: 3,
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
        disabled={currentPage === totalPages}
      >
        <i className="bx bxs-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
