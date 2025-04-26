import React from "react";

function CustomButton({
  buttonText = "Click Me",
  bgColor = "blue",
  textColor = "white",
}) {
  return (
    <button style={{ backgroundColor: bgColor, color: textColor }}>
      {buttonText}
    </button>
  );
}

export default CustomButton;
