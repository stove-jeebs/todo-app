import { useState, useEffect } from "react";
import { getTodos, addTodo } from "./firebase";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (input) => {
    setTodos([...todos, { todo: `${input}` }]);
    // add todo task to the database
    addTodo(input);
  };

  // fetches data from the database and set the array to todos
  useEffect(() => {
    const todoList = getTodos();
    todoList.then((value) => setTodos(value)).catch((err) => console.log(err));
  }, []);

  const handleDelete = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <div className="h-screen bg-darkPrimary">
      <Header />
      <Form handleSubmit={handleSubmit} />
      <Todo todos={todos} handleDelete={handleDelete} />
    </div>
  );
}
