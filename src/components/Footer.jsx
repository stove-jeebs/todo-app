import React from "react";

export default function Footer() {
  return (
    <footer className="container flex justify-between py-4 rounded-b bg-lightPrimary dark:bg-darkSecondary dark:text-darkAccent">
      {/* number of items remaining in the todo list */}
      <p>n items left</p>

      {/* sort tasks based on completion */}
      <div>
        <button className="hover:text-darkText">All</button>
        <button className="mx-4 hover:text-darkText">Active</button>
        <button className="hover:text-darkText">Complete</button>
      </div>

      {/* clear completed tasks */}
      <button className="hover:text-darkText">Clear Completed</button>
    </footer>
  );
}
