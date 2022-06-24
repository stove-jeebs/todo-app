import { deleteTodo } from "../firebase";
import deleteButton from "../assets/icon-cross.svg";

export default function List({ todos, handleDelete }) {
  const list = todos.map((item, index) => {
    return (
      <li className="text-lightPrimary" key={index}>
        {/* circle button */}
        <div></div>
        {item.todo}
        <button
          type="button"
          onClick={() => {
            handleDelete(index);
            deleteTodo(item.id);
          }}
        >
          <img src={deleteButton} alt="delete button" />
        </button>
      </li>
    );
  });

  return <ul>{list}</ul>;
}
