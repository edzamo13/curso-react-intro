import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
  { text: "Cut onion", completed: true },
  { text: "Take React Course introduce", completed: true },
  { text: "Cry with Llorona ", completed: false },
  { text: "LALALALAAL", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  //!! double negation make to boolean
  const completeTodos = todos.filter((c) => !!c.completed).length;
  const completedTotal = todos.length;

  const [searchValue, setSearchValue] = React.useState("");
  console.log("setSearchValue", searchValue);
  const searchTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  const completeTodo = (text) => {
    console.log("recibed onCompleted", text);
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter completed={completeTodos} total={completedTotal} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
