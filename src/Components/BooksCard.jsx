import React from "react";
import "./styles/booksCard.css";
import noCover from "./utils/image.png";
function BookCard({ book }) {
  const {
    title,
    author_name,
    publish_date,
    cover_i,
    ratings_average,
    number_of_pages_median,
  } = book;

  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : null;
  return (
    <div className="book-card">
      <div className="book-card-img">
        <div>
          {coverUrl ? (
            <img src={coverUrl} alt={`${title} cover`} loading="lazy" />
          ) : (
            <img src={noCover} loading="lazy" />
          )}
        </div>
      </div>

      <h4>{title || "Title not available"}</h4>
      <p>
        <strong>Author:</strong> {author_name?.join(", ") || "Unknown author"}
      </p>
      <p>
        <strong>Published:</strong>{" "}
        {publish_date?.[0] || "Publication date not available"}
      </p>
      <p>
        <strong>Pages:</strong> {number_of_pages_median || "N/A"}
      </p>
      <p>
        <strong>Rating:</strong> {ratings_average || "No ratings"}
      </p>
    </div>
  );
}

export default BookCard;
