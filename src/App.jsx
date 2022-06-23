import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { getTodos } from "./firebase";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (input) => {
    setTodos([...todos, input]);
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
