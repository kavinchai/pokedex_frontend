import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdFirstPage, MdLastPage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "lodash";
import "../css/SearchBar.css";
import "../fonts/PokemonSolid.ttf";

const SearchBar = ({
  lastPage,
  searchInput,
  leftPageBtnFunc,
  rightPageBtnFunc,
  debouncedSearch,
  setFilteredSearchPage,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="pokemonSearchBarContainer">
        <button
          className="navButtonFirst navBtn"
          type="submit"
          onClick={() => {
            searchInput.length > 0
              ? setFilteredSearchPage(1)
              : navigate("/page/1");
          }}
        >
          <MdFirstPage style={{ fontSize: "20px" }} />
        </button>
        <button
          className="navButtonLeft navBtn"
          type="submit"
          onClick={leftPageBtnFunc}
        >
          <FaArrowLeft />
        </button>
        <a className="pokedex" href="/">
          Pokedéx
        </a>
        <div className="searchInputContainer">
          <FaSearch className="searchIcon" />
          <input
            className="searchInput"
            type="text"
            onChange={debouncedSearch}
            placeholder="Search"
          />
        </div>
        {/* <button
          className="filterButton navBtn"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filter
        </button> */}
        <button
          className="navButtonRight navBtn"
          type="submit"
          onClick={rightPageBtnFunc}
        >
          <FaArrowRight />
        </button>
        <button
          className="navButtonLast navBtn"
          type="submit"
          onClick={() => {
            searchInput.length > 0
              ? setFilteredSearchPage(lastPage)
              : navigate(`/page/${lastPage}`);
          }}
        >
          <MdLastPage style={{ fontSize: "20px" }} />
        </button>
        <div className="filterSection">{showFilter ? <p>test1</p> : null}</div>
      </div>
    </>
  );
};

export default SearchBar;
