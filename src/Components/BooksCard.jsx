import React from "react";

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
    : "https://via.placeholder.com/150?text=No+Cover";
  return (
    <div className="book-card">
      <img src={coverUrl} alt={`${title} cover`} loading="lazy" />
      <h2>{title || "Title not available"}</h2>
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
