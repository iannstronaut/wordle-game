import React from "react";

const Keyboard = ({ onKeyPress }) => {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
  ];

  return (
    <div className="grid grid-rows-3 gap-2">
      {keys.map((row, i) => (
        <div key={i} className="flex justify-center space-x-2">
          {row.map((key) => (
            <button
              key={key}
              className="bg-gray-300 p-2 rounded text-xl"
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
