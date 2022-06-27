import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { deleteTodo } from "../../firebase";
import Task from "./Task";
import Footer from "../Footer";

export default function List({ todos, handleDelete }) {
  const [filter, setFilter] = useState("all");

  const filtered = todos.filter((todo) =>
    filter === "all" ? true : filter === "active" ? todo.status === "active" : todo.status === "complete"
  );

  const clearCompleted = () => {
    todos.filter((todo) => (todo.status === "complete" ? deleteTodo(todo.id) : null));
  };

  return (
    <section className="shadow-lg">
      <Droppable droppableId={"todolist"}>
        {(provided) => (
          <ul
            className="rounded-t-md bg-lightSecondary dark:bg-darkSecondary"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {filtered.map((task, index) => (
              <Task
                key={task.index}
                id={task.id}
                task={task}
                status={task.status}
                handleDelete={handleDelete}
                index={index}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      {/* footer contain filter buttons */}
      <Footer
        length={todos.length}
        filter={filter}
        handleFilter={(status) => setFilter(status)}
        handleClear={clearCompleted}
      />
    </section>
  );
}
