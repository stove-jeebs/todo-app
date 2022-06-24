import { useState } from "react";

export default function Form({ handleSubmit }) {
  const [input, setInput] = useState("");

  return (
    <form
      className="inline-block"
      onSubmit={(e) => {
        e.preventDefault();
        input != "" && handleSubmit(input);
        setInput("");
      }}
    >
      {/* circle */}
      <div />

      {/* input field */}
      <input
        type="text"
        value={input} // this is so you can clear the input every time the user submits input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Create a new todo..."
      />
    </form>
  );
}
