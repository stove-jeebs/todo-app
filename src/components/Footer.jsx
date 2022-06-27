export default function Footer({ length, handleFilter, filter, handleClear }) {
  return (
    <footer className="container flex justify-between py-4 rounded-b-md bg-lightPrimary dark:bg-darkSecondary text-lightAccent dark:text-darkAccent">
      {/* number of items remaining in the todo list */}
      <p>{length} items left</p>

      {/* sort tasks based on completion */}
      <div>
        <button
          className={`${filter === "all" ? "text-brightBlue" : "hover:text-lightText dark:hover:text-darkText"}`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            filter === "active" ? "text-brightBlue" : "hover:text-lightText dark:hover:text-darkText"
          } mx-4 `}
          onClick={() => handleFilter("active")}
        >
          Active
        </button>
        <button
          className={`${filter === "complete" ? "text-brightBlue" : "hover:text-lightText dark:hover:text-darkText"}`}
          onClick={() => handleFilter("complete")}
        >
          Complete
        </button>
      </div>

      {/* clear completed tasks */}
      <button className="hover:text-lightText dark:hover:text-darkText" onClick={() => handleClear()}>
        Clear Completed
      </button>
    </footer>
  );
}
