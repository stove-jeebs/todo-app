export default function Footer({ length, handleFilter }) {
  return (
    <footer className="container flex justify-between py-4 rounded-b-md bg-lightPrimary dark:bg-darkSecondary text-lightAccent dark:text-darkAccent">
      {/* number of items remaining in the todo list */}
      <p>{length} items left</p>

      {/* sort tasks based on completion */}
      <div>
        <button className="hover:text-lightText dark:hover:text-darkText" onClick={() => handleFilter("all")}>
          All
        </button>
        <button className="mx-4 hover:text-lightText dark:hover:text-darkText" onClick={() => handleFilter("active")}>
          Active
        </button>
        <button className="hover:text-lightText dark:hover:text-darkText" onClick={() => handleFilter("complete")}>
          Complete
        </button>
      </div>

      {/* clear completed tasks */}
      <button className="hover:text-lightText dark:hover:text-darkText">Clear Completed</button>
    </footer>
  );
}
