import { Draggable } from "react-beautiful-dnd";
import { updateTodo } from "../../firebase";
import deleteButton from "../../assets/icon-cross.svg";
import checkIcon from "../../assets/icon-check.svg";

export default function Task({ id, task, handleDelete, status, index }) {
  return (
    <Draggable key={task.index} draggableId={`task-${task.index}`} index={index}>
      {(provided) => (
        <li
          className="flex items-center border-b first:rounded-t-md group border-lightBorder bg-lightPrimary dark:border-darkBorder dark:bg-darkSecondary cursor-grab"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* check button */}
          <button
            className={`${
              status === "complete"
                ? " bg-gradient-to-r from-checkFrom to-checkTo bg-check"
                : "border border-lightAccent dark:border-darkAccent p-[0.7rem] h-6"
            } p-[0.5rem] mx-8 rounded-full aspect-square box-border`}
            onClick={() => updateTodo(id, status)}
          >
            {status === "complete" && <img src={checkIcon} className="w-2 h-2" alt="check-icon" />}
          </button>

          {/* task text */}
          <p className="inline-block py-5 text-lightText dark:text-darkText">{task.task}</p>

          {/* delete button */}
          <button
            type="button"
            className={`invisible group-hover:visible ml-auto mx-8`}
            onClick={() => handleDelete(task.index, task.id)}
          >
            <img src={deleteButton} alt="delete button" />
          </button>
        </li>
      )}
    </Draggable>
  );
}
