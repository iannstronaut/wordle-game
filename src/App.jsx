import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { generate } from "random-words";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [word, setWord] = useState(""); // Kata yang harus ditebak
  const [guesses, setGuesses] = useState([]); // Array tebakan
  const [currentGuess, setCurrentGuess] = useState(""); // Tebakan saat ini
  const [gameOver, setGameOver] = useState(false); // Status permainan selesai

  // Mengenerate kata acak
  useEffect(() => {
    startNewGame();
  }, []);

  // Fungsi untuk memulai ulang game
  const startNewGame = () => {
    const newWord = generate({
      exactly: 1,
      minLength: 5,
      maxLength: 5,
    })[0].toUpperCase();
    setWord(newWord);
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
  };
  const handleKeyPress = (key) => {
    if (gameOver) return; // Cegah input setelah game selesai

    if (key === "ENTER" && currentGuess.length === 5) {
      if (currentGuess.toUpperCase() === word) {
        toast.success("Congratulations! You guessed the word! 🎉", {
          position: "top-center",
        });
        setGameOver(true); // Tandai game selesai
      }
      setGuesses([...guesses, currentGuess.toUpperCase()]);
      setCurrentGuess(""); // Reset setelah menekan Enter
    } else if (key === "BACKSPACE") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (currentGuess.length < 5 && /^[A-Z]$/.test(key)) {
      setCurrentGuess(currentGuess + key);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Wordle Game</h1>

      {word && (
        <Board word={word} guesses={guesses} currentGuess={currentGuess} />
      )}

      <Keyboard onKeyPress={handleKeyPress} />

      {/* Tombol Restart muncul setelah game selesai */}
      {gameOver && (
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          onClick={startNewGame}
        >
          Play Again
        </button>
      )}

      {/* Toast notification */}
      <ToastContainer />
    </div>
  );
};

export default App;
