import { useState } from "react";

export default function Form({ handleSubmit }) {
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        input != "" && handleSubmit(input);
      }}
    >
      {/* circle */}
      <div />

      {/* input field */}
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Create a new todo..."
      />
    </form>
  );
}
