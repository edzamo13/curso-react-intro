import React from "react";
import "./css/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="enter any word"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        console.log("You write something ");
        setSearchValue(event.target.value);
      }}
    ></input>
  );
}

export { TodoSearch };
