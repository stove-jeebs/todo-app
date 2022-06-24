export default function List({ todos }) {
  const list = todos.map((task, index) => {
    return (
      <li className="text-lightPrimary" key={index}>
        {task}
      </li>
    );
  });

  return <ul>{list}</ul>;
}
