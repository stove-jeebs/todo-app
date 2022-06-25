import React from "react";

export default function Footer() {
  return (
    <footer className="container flex justify-between py-4 bg-darkSecondary text-darkText2">
      {/* number of items remaining in the todo list */}
      <p>n items left</p>

      {/* sort tasks based on completion */}
      <div>
        <button className="hover:text-darkText1">All</button>
        <button className="mx-4 hover:text-darkText1">Active</button>
        <button className="hover:text-darkText1">Complete</button>
      </div>

      {/* clear completed tasks */}
      <button className="hover:text-darkText1">Clear Completed</button>
    </footer>
  );
}
