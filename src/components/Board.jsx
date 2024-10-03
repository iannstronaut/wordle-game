import React from "react";
import Tile from "./Tile";

const Board = ({ word, guesses, currentGuess }) => {
  const emptyRow = Array(5).fill("");

  return (
    <div className="grid grid-rows-6 gap-2 mb-8">
      {guesses.map((guess, i) => (
        <div key={i} className="grid grid-cols-5 gap-2">
          {guess.split("").map((letter, j) => (
            <Tile key={j} letter={letter} status={getStatus(letter, word, j)} />
          ))}
        </div>
      ))}
      {/* Displaying currentGuess */}
      <div className="grid grid-cols-5 gap-2">
        {currentGuess.split("").map((letter, i) => (
          <Tile key={i} letter={letter} status="typing" />
        ))}
        {[...Array(5 - currentGuess.length)].map((_, i) => (
          <Tile key={i} letter="" status="empty" />
        ))}
      </div>
      {/* Displaying empty rows for remaining guesses */}
      {[...Array(5 - guesses.length)].map((_, i) => (
        <div key={i} className="grid grid-cols-5 gap-2">
          {emptyRow.map((_, j) => (
            <Tile key={j} letter="" status="empty" />
          ))}
        </div>
      ))}
    </div>
  );
};

// Fungsi untuk mengecek status tiap huruf
const getStatus = (letter, word, index) => {
  if (letter === word[index]) return "correct";
  if (word.includes(letter)) return "present";
  return "absent";
};

export default Board;
