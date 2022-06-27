import Footer from "./Footer";
import deleteButton from "../assets/icon-cross.svg";
import checkIcon from "../assets/icon-check.svg";

export default function List({ todos, handleDelete }) {
  // map list element for every task in the todos list
  const list = todos.map((todo) => {
    return (
      <li
        className="relative border-b group border-lightBorder bg-lightPrimary dark:border-darkBorder dark:bg-darkSecondary cursor-grab"
        key={todo.index}
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
      </li>
    );
  });

  return (
    <div className="shadow-lg">
      <ul className="bg-darkSecondary">{list}</ul>
      <Footer length={todos.length} />
    </div>
  );
}
