import { useState } from "react";

export default function Form({ handleSubmit }) {
  const [input, setInput] = useState("");

  return (
    <form
      className="flex py-2 mt-12 mb-8 text-xl rounded-md text-lightText bg-lightPrimary dark:text-darkText dark:bg-darkSecondary"
      onSubmit={(e) => {
        e.preventDefault();
        input != "" && handleSubmit(input);
        setInput("");
      }}
    >
      {/* circle */}
      <div className="px-6 ml-8 mr-1 origin-left scale-50 border rounded-full aspect-square border-lightText dark:border-darkAccent" />

      {/* input field */}
      <input
        type="text"
        className="w-full pr-8 bg-lightPrimary dark:bg-darkSecondary focus:outline-none"
        value={input} // this is so you can clear the input every time the user submits input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Create a new todo..."
      />
    </form>
  );
}
