import "./css/CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("xxx");
        console.log(event)
        console.log(event)
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
