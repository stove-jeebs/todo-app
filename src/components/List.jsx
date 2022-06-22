export default function List({ todos }) {
  const list = todos.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return <ul>{list}</ul>;
}
