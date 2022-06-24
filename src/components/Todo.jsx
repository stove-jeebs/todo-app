import deleteButton from "../assets/icon-cross.svg";
import checkIcon from "../assets/icon-check.svg";

export default function List({ todos, handleDelete }) {
  const list = todos.map((item, index) => {
    return (
      <li
        className="relative border-b border-darkBorder bg-darkSecondary cursor-grab text-lightPrimary"
        key={index}
        draggable
      >
        {/* circle button */}
        <button className="p-2 mx-3 border rounded-full bg-gradient-to-r from-checkFrom to-checkTo bg-check border-darkBorder">
          <img src={checkIcon} alt="check-icon" />
        </button>

        {/* task text */}
        <p className="inline-block py-2">{item.todo}</p>

        {/* delete button */}
        <button type="button" className="absolute flex-1 right-2 top-3" onClick={() => handleDelete(index, item.id)}>
          <img src={deleteButton} alt="delete button" />
        </button>
      </li>
    );
  });

  return <ul className="max-w-sm bg-darkSecondary">{list}</ul>;
}
