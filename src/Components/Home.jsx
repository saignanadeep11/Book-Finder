import { useState, useCallback } from "react";
import "./styles/home.css";
import { debounce } from "lodash";
import { books } from "./API/booksApi";
import Books from "./Books";
function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const fetch = async (searchQuery) => {
    if (searchQuery.trim().length === 0) {
      return;
    }
    console.log(searchQuery);
    const response = await books(searchQuery);
    const data = await response.json();
    setResults(data.docs);
    console.log(results);
  };
  const debouncedFetchBooks = useCallback(debounce(fetch, 1000), []);
  const handleSearch = (event) => {
    setQuery(event.target.value);
    debouncedFetchBooks(event.target.value);
  };
  return (
    <>
      <div className="homeMainDiv">
        <div></div>
        <div className="inHomeMainDiv">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Book Name"
          />

          <div className="booksDiv">
            <Books results={results} />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Home;
