import "./css/TodoSearch.css";

function TodoSearch() {
  return (
    <input
      placeholder="enter any word"
      className="TodoSearch"
      onChange={(event) => {
        console.log("You write something ");
        console.log("event", event);
        console.log("event.target", event.target);
        console.log("event.target.value" , event.target.value);
      }}
    ></input>
  );
}

export { TodoSearch };
