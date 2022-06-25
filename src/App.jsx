import { useState, useEffect } from "react";
import { getTodos, addTodo, deleteTodo } from "./firebase";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import desktopDark from "./assets/bg-desktop-dark.jpg";

export default function App() {
  const [todos, setTodos] = useState([]);

  // fetches data from the database and set the array to todos
  useEffect(() => {
    const todoList = getTodos();
    todoList.then((value) => setTodos(value)).catch((err) => console.log(err));
  }, []);

  // add item to the todo list and the database
  const handleSubmit = (input) => {
    setTodos([...todos, { todo: `${input}` }]);
    addTodo(input);
  };

  // deletes an item in the todo list
  const handleDelete = (index, id) => {
    todos.splice(index, 1);
    setTodos([...todos]);
    deleteTodo(id);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-darkPrimary"
      style={{ textRendering: "optimizeSpeed" }}
    >
      {/* background image */}
      <div className="w-screen h-[33%] bg-cover self-start" style={{ backgroundImage: `url(${desktopDark})` }} />

      {/* container */}
      <div className="container absolute top-[5%]">
        <Header />
        <Form handleSubmit={handleSubmit} />
        <Todo todos={todos} handleDelete={handleDelete} />
        <Footer />
      </div>
    </div>
  );
}
