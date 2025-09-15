import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

function Search() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`?search=${search}`);
  }, [search, navigate]);

  return (
    <div className="navbar__search--wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        type="search"
        className="navbar__search"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
