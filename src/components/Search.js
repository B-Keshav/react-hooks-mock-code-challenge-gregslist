import React, { useState } from "react";

function Search({ onSearchSubmit}) {
  const [searchInput, setSearchInput] = useState("")
  
  function handleChange(e) {
    setSearchInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(searchInput)
  }

  return (
    <>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="search free stuff"
          value={searchInput}
          onChange={handleChange}
        />
        <button type="submit">🔍</button>
      </form>
    </>
  );
}

export default Search;
