import "../css/CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("le diste click");
        console.log("event_______" + event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
