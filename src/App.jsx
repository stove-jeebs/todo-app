import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (input) => {
    setTodos([...todos, input]);
  };

  return (
    <div className="bg-darkPrimary h-screen">
      <Header />
      <Form handleSubmit={handleSubmit} />
      <List todos={todos} />
    </div>
  );
}
