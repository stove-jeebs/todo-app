export default function Footer({ length, handleFilter, filter, handleClear }) {
  return (
    <footer className="container relative flex justify-between py-5 rounded-b-md bg-lightPrimary dark:bg-darkSecondary text-lightAccent dark:text-darkAccent">
      {/* number of items remaining in the todo list */}
      <p>{length} items left</p>

      {/* sort tasks based on completion */}
      <div className="absolute left-0 flex justify-center w-full gap-6 py-5 text-lg rounded-md shadow-lg sm:gap-4 sm:text-base sm:shadow-none sm:w-auto sm:py-0 top-20 bg-lightPrimary dark:bg-darkSecondary sm:static">
        <button
          className={`${filter === "all" ? "text-brightBlue" : "hover:text-lightText dark:hover:text-darkText"}`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`${filter === "active" ? "text-brightBlue" : "hover:text-lightText dark:hover:text-darkText"}`}
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
