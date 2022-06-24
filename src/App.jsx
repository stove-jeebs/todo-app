import { useState, useEffect } from "react";
import { getTodos, addTodos } from "./firebase";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (input) => {
    setTodos([...todos, input]);
    // add todo task to the database
    addTodos(input);
  };

  useEffect(() => {
    const todoList = getTodos();
    todoList.then((value) => setTodos(value.map((item) => item.task)));
  }, []);

  return (
    <div className="h-screen bg-darkPrimary">
      <Header />
      <Form handleSubmit={handleSubmit} />
      <Todo todos={todos} />
    </div>
  );
}
