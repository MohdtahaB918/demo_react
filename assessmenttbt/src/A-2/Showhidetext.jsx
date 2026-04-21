import React, { useState } from "react";

function ToggleText() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText); // toggle state
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleClick}>
        {showText ? "Hide Text" : "Show Text"}
      </button>

      {showText && <p>This is the text you can show or hide!</p>}
    </div>
  );
}

export default ToggleText;