import React from "react";

const TextInput = ({ label, inputID, inputValue, handleInput }) => {
  return (
    <div>
      <label className="column" htmlFor={inputID}>
        {label}
      </label>
      <input
        type="text"
        id={inputID}
        name={inputID}
        value={inputValue}
        onChange={handleInput}
      />
    </div>
  );
};

export default TextInput;
