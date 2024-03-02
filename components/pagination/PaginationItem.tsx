const PaginationItem = ({ currentPage, pageNumber, handlePageChange }) => {
  const handleClick = () => {
    if (isNaN(pageNumber)) return;

    handlePageChange(pageNumber);
  };

  return (
    <button
      key={pageNumber}
      onClick={handleClick}
      style={{
        color:
          currentPage === pageNumber ? "var(--white)" : "var(--primary-1100)",
        backgroundColor:
          currentPage === pageNumber
            ? "var(--primary-900)"
            : "var(--primary-200)",
        borderRadius: 5,
        fontWeight: currentPage === pageNumber ? "bold" : "normal",
        height: 25,
        marginRight: 3,
        width: 25,
      }}
    >
      {pageNumber}
    </button>
  );
};

export default PaginationItem;
