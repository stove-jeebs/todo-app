import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import Footer from "../Footer";

export default function List({ todos, handleDelete }) {
  // map list element for every task in the todos list
  const list = todos.map((task, index) => {
    return <Task key={task.index} task={task} index={index} handleDelete={handleDelete} />;
  });

  return (
    <div className="shadow-lg">
      <Droppable droppableId={"todolist"}>
        {(provided) => (
          <ul
            className="rounded-t-md bg-lightSecondary dark:bg-darkSecondary"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {list}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <Footer length={todos.length} />
    </div>
  );
}
