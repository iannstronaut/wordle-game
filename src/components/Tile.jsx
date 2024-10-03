import React from "react";

const Tile = ({ letter, status }) => {
  const getTileStyle = (status) => {
    switch (status) {
      case "correct":
        return "bg-green-500 text-white";
      case "present":
        return "bg-yellow-500 text-white";
      case "absent":
        return "bg-gray-400 text-white";
      case "typing":
        return "bg-white border-2 border-gray-400";
      default:
        return "bg-white border border-gray-300";
    }
  };

  return (
    <div className={`w-12 h-12 flex items-center justify-center text-2xl font-bold ${getTileStyle(status)}`}>
      {letter}
    </div>
  );
};

export default Tile;
