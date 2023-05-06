import "./css/TodoCounter.css";


/*function TodoCounter(porp) {
    porp.completed 
    porp.total
*/

//There two way for create styles, 1 create with const and {}, or go to form jsx html example <H1 and put with to {{}}

const style = {
  backgroundColor: "red",
};
/*
function TodoCounter({ total, completed }) {
  return (
    <h1
      style={{
        fontSize: "24px",
        textAlign: "center",
        margin: "0",
        padding: "48px",
      }}
    >
      {" "}
      You have completed {completed} of {total} all
    </h1>
  );
}*/



function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter" >
      You have completed {completed} of {total} all
    </h1>
  );
}
export { TodoCounter };
