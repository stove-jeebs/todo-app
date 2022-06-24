import deleteButton from "../assets/icon-cross.svg";
import checkIcon from "../assets/icon-check.svg";

export default function List({ todos, handleDelete }) {
  const list = todos.map((item, index) => {
    return (
      <li
        className="relative border-b border-darkBorder bg-darkSecondary cursor-grab text-darkText1"
        key={index}
        draggable
      >
        {/* circle button */}
        <button className="p-[0.4rem] mx-8 rounded-full aspect-square bg-gradient-to-r from-checkFrom to-checkTo bg-check">
          <img src={checkIcon} alt="check-icon" />
        </button>

        {/* task text */}
        <p className="inline-block py-5">{item.todo}</p>

        {/* delete button */}
        <button type="button" className="absolute flex-1 right-8 top-6" onClick={() => handleDelete(index, item.id)}>
          <img src={deleteButton} alt="delete button" />
        </button>
      </li>
    );
  });

  return (
    <section className="bg-darkSecondary">
      {/* lists */}
      <ul>{list}</ul>

      {/* buttons */}
      <div className="container flex justify-between py-4 text-darkText2">
        <p>n items left</p>
        <div>
          <button className="hover:text-darkText1">All</button>
          <button className="mx-4 hover:text-darkText1">Active</button>
          <button className="hover:text-darkText1">Complete</button>
        </div>
        <button className="hover:text-darkText1">Clear Completed</button>
      </div>
    </section>
  );
}
