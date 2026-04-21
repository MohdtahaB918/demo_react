import React, { useState } from "react";

function LiveInput() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value); // update state with input value
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Type something:</h2>

      <input
        type="text"
        value={text}          // controlled by state
        onChange={handleChange} // event handling
        placeholder="Start typing..."
      />

      <h3>You typed: {text}</h3>
    </div>
  );
}

export default LiveInput;