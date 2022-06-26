import { useState, useEffect } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db, addTodo, deleteTodo } from "./firebase";
import { DragDropContext } from "react-beautiful-dnd";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
import darkBackground from "./assets/bg-desktop-dark.jpg";
import lightBackground from "./assets/bg-desktop-light.jpg";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isDark, setIsDark] = useState(true);

  // fetches data from the database and set the array to todos
  useEffect(() => {
    const todoRef = query(collection(db, "todos"), orderBy("index"));
    onSnapshot(todoRef, (snapshot) =>
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().task,
          index: doc.data().index,
        }))
      )
    );
  }, []);

  // add item to the todo list and the database
  const handleSubmit = (input) => {
    setTodos([...todos, { todo: `${input}`, index: todos.length }]);
    addTodo(input, todos.length);
  };

  // deletes an item in the todo list
  const handleDelete = (index, id) => {
    todos.splice(index, 1);
    setTodos([...todos]);
    deleteTodo(id);
  };

  // change theme
  const handleTheme = () => setIsDark((prevState) => !prevState);

  const handleEnd = (result) => {
    console.log(result);
    try {
      result.source.index === result.destination.index || !result.destination === null;
    } catch (error) {
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={handleEnd}>
      <div
        className={`${
          isDark ? "dark bg-darkPrimary" : "bg-lightPrimary"
        } flex items-center justify-center h-screen select-none transition-all`}
        style={{ textRendering: "optimizeSpeed" }}
      >
        {/* background image */}
        <div
          className="w-screen h-[33%] bg-cover self-start"
          style={{ backgroundImage: `url(${isDark ? darkBackground : lightBackground})` }}
        />
        {/* container */}
        <div className="container absolute top-[5%]">
          <Header isDark={isDark} handleTheme={handleTheme} />
          <Form handleSubmit={handleSubmit} />
          <Todo todos={todos} handleDelete={handleDelete} />
        </div>
      </div>
    </DragDropContext>
  );
}
