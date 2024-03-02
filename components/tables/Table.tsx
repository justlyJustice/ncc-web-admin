"use client";

import { useState } from "react";

import TBody from "./TBody";
import Thead from "./THead";
import Pagination from "../pagination";

const Table = ({
  calls,
  handleSelectCall,
  handleSelectAllContacts,
  selectAll,
  selectedCalls,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Extract the items to display on the current page
  const currentItems = calls.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(calls.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="table">
      <Thead
        handleSelectAllContacts={handleSelectAllContacts}
        selectAll={selectAll}
      />

      <>
        <TBody
          calls={currentItems}
          handleSelectCall={handleSelectCall}
          selectedCalls={selectedCalls}
        />

        <div className="flex selected-contacts">
          <p>{selectedCalls.length} Contacts selected</p>

          <Pagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            totalPages={totalPages}
          />
        </div>
      </>
    </div>
  );
};

export default Table;
