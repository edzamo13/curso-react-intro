import React from "react";
import "./css/TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");
console.log('setSearchValue' , searchValue);

  return (
    <input
      placeholder="enter any word"
      className="TodoSearch"
      onChange={(event) => {
        console.log("You write something ");
        setSearchValue(event.target.value); 
        
      }}
    ></input>
  );
}

export { TodoSearch };
