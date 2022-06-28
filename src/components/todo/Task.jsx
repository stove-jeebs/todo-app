import React from "react";
import { Draggable } from "react-beautiful-dnd";
import deleteButton from "../../assets/icon-cross.svg";
import checkIcon from "../../assets/icon-check.svg";

export default function Task({ task, handleDelete, index }) {
  return (
    <Draggable key={task.index} draggableId={`task-${task.index}`} index={index}>
      {(provided) => (
        <li
          className="relative border-b first:rounded-t-md group border-lightBorder bg-lightPrimary dark:border-darkBorder dark:bg-darkSecondary cursor-grab"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* check button */}
          <button className="p-[0.4rem] mx-8 rounded-full aspect-square bg-gradient-to-r from-checkFrom to-checkTo bg-check">
            <img src={checkIcon} alt="check-icon" />
          </button>

          {/* task text */}
          <p className="inline-block py-5 text-lightText dark:text-darkText">{task.task}</p>

          {/* delete button */}
          <button
            type="button"
            className={`invisible group-hover:visible absolute flex-1 right-8 top-6`}
            onClick={() => handleDelete(task.index, task.id)}
          >
            <img src={deleteButton} alt="delete button" />
          </button>
        </li>
      )}
    </Draggable>
  );
}
