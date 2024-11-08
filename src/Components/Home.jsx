import { useState, useCallback, useEffect } from "react";
import "./styles/home.css";
import { debounce } from "lodash";
import { books, booksByAuthor } from "./API/booksApi";
import Books from "./Books";
import LoadingImage from "./utils/loading.png";

function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchBy, setSearch] = useState("Book Title");
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const fetch = async (searchQuery) => {
    if (searchQuery.trim().length === 0) {
      setResults([]);
      return;
    }
    setLoading(true);
    setTyping(false);
    console.log(searchQuery);
    let response = " ";
    console.log(searchBy);
    if (searchBy === "Author Name") {
      response = await booksByAuthor(searchQuery);
    } else {
      response = await books(searchQuery);
    }
    const data = await response.json();
    setResults(data.docs);
    console.log(results);
    setLoading(false);
  };
  const debouncedFetchBooks = useCallback(debounce(fetch, 1000), [searchBy]);
  const handleSearch = (event) => {
    setTyping(true);
    setQuery(event.target.value);
    debouncedFetchBooks(event.target.value);
  };
  useEffect(() => {
    if (query.trim()) {
      debouncedFetchBooks(query);
    }
  }, [query, debouncedFetchBooks]);
  return (
    <>
      <div className="homeMainDiv">
        <div></div>
        <div className="inHomeMainDiv">
          <div className="inHomeInput">
            <select
              className="btn btn-primary dropdown-toggle"
              value={searchBy}
              onChange={(e) => {
                let k = e.target.value;
                console.log(e.target.value, searchBy);
                setSearch(k);
                setResults([]);
              }}
            >
              <option value="Book Title">Book Title</option>
              <option value="Author Name">Author Name</option>
            </select>
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Book Name"
            />
          </div>

          {loading ? (
            <>
              <div className="loadingDIv">
                <img src={LoadingImage} className="loadingImage" />
              </div>
            </>
          ) : (
            <>
              {results[0] ? (
                <div className="booksDiv">
                  <Books results={results} />
                </div>
              ) : (
                <>
                  {query.trim().length > 0 && typing === false ? (
                    <h2>No results found!</h2>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Home;
