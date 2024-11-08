import React, { useState } from "react";
import BookCard from "./BooksCard";
import "./styles/books.css";

function Books({ results }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Number of items per page

  // Calculate the current page’s items
  const startIndex = (currentPage - 1) * pageSize;
  const currentResults = results.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(results.length / pageSize);
  return (
    <div>
      <div className="books-list">
        {currentResults.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
      {/* Pagination Controls */}
      {results[0] ? (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            type="button"
            className="btn btn-primary"
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            type="button"
            className="btn btn-primary"
          >
            Next
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Books;
