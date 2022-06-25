import { useState } from "react";
import deleteButton from "../assets/icon-cross.svg";
import checkIcon from "../assets/icon-check.svg";

export default function List({ todos, handleDelete }) {
  // map list element for every task in the todos list
  const list = todos.map((item, index) => {
    const [showCross, setShowCross] = useState(false);

    return (
      <li
        className="relative border-b border-darkBorder bg-darkSecondary cursor-grab text-darkText1"
        key={index}
        onMouseEnter={() => setShowCross(true)}
        onMouseLeave={() => setShowCross(false)}
      >
        {/* check button */}
        <button className="p-[0.4rem] mx-8 rounded-full aspect-square bg-gradient-to-r from-checkFrom to-checkTo bg-check">
          <img src={checkIcon} alt="check-icon" />
        </button>

        {/* task text */}
        <p className="inline-block py-5">{item.todo}</p>

        {/* delete button */}
        {showCross && (
          <button type="button" className="absolute flex-1 right-8 top-6" onClick={() => handleDelete(index, item.id)}>
            <img src={deleteButton} alt="delete button" />
          </button>
        )}
      </li>
    );
  });

  return <ul className="bg-darkSecondary">{list}</ul>;
}
