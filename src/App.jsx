import { useState, useEffect } from "react";
import { getTodos, addTodo, deleteTodo } from "./firebase";
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

  // deletes an item in the todo list
  const handleDelete = (index, id) => {
    todos.splice(index, 1);
    setTodos([...todos]);
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-darkPrimary">
      <div className="container">
        <Header />
        <Form handleSubmit={handleSubmit} />
        <Todo todos={todos} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
