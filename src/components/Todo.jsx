import { Droppable, Draggable } from "react-beautiful-dnd";
import Footer from "./Footer";
import deleteButton from "../assets/icon-cross.svg";
import checkIcon from "../assets/icon-check.svg";

export default function List({ todos, handleDelete }) {
  // map list element for every task in the todos list
  const list = todos.map((todo) => {
    return (
      <Draggable key={todo.index} draggableId={`task-${todo.index}`} index={todo.index}>
        {(provided) => (
          <div
            className="relative border-b group border-lightBorder bg-lightPrimary dark:border-darkBorder dark:bg-darkSecondary cursor-grab"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {/* check button */}
            <button className="p-[0.4rem] mx-8 rounded-full aspect-square bg-gradient-to-r from-checkFrom to-checkTo bg-check">
              <img src={checkIcon} alt="check-icon" />
            </button>

            {/* task text */}
            <p className="inline-block py-5 text-lightText dark:text-darkText">{todo.todo}</p>

            {/* delete button */}
            <button
              type="button"
              className={`invisible group-hover:visible absolute flex-1 right-8 top-6`}
              onClick={() => handleDelete(todo.index, todo.id)}
            >
              <img src={deleteButton} alt="delete button" />
            </button>
          </div>
        )}
      </Draggable>
    );
  });

  return (
    <div className="shadow-lg">
      <Droppable droppableId={"todolist"}>
        {(provided) => (
          <div className="bg-darkSecondary" ref={provided.innerRef} {...provided.droppableProps}>
            {list}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Footer length={todos.length} />
    </div>
  );
}
