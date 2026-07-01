import { useEffect, useState } from "react";

export default function ColorGuessGame() {
  const [numSquares, setNumSquares] = useState(6);
  const [colors, setColors] = useState([]);
  const [pickedColor, setPickedColor] = useState("");
  const [message, setMessage] = useState("");
  const [headerColor, setHeaderColor] = useState("steelblue");
  const [buttonText, setButtonText] = useState("New Colors");

  useEffect(() => {
    resetGame(6);
  }, []);

  const resetGame = (count = numSquares) => {
    const newColors = generateRandomColors(count);
    const randomColor = newColors[Math.floor(Math.random() * newColors.length)];

    setColors(newColors);
    setPickedColor(randomColor);
    setMessage("");
    setHeaderColor("steelblue");
    setButtonText("New Colors");
  };

  const handleDifficulty = (count) => {
    setNumSquares(count);
    resetGame(count);
  };

  const handleSquareClick = (color) => {
    if (color === pickedColor) {
      setMessage("Correct!");
      setButtonText("Play Again?");
      setHeaderColor(color);

      setColors(Array(numSquares).fill(color));
    } else {
      setMessage("Try Again");

      setColors((prev) => prev.map((c) => (c === color ? "#232323" : c)));
    }
  };

  return (
    <div className="min-h-screen bg-[#232323]">
      {/* Header */}
      <h1
        className="text-center text-white uppercase py-5"
        style={{ backgroundColor: headerColor }}
      >
        The RGB Color Guessing Game
        <br />
        <span className="text-4xl">{pickedColor}</span>
      </h1>

      {/* Controls */}
      <div className="bg-white h-[30px] flex items-center justify-center gap-4">
        <button
          onClick={() => resetGame()}
          className="uppercase font-bold text-[steelblue] hover:bg-[steelblue] hover:text-white px-3 h-full"
        >
          {buttonText}
        </button>

        <span className="w-24 text-center">{message}</span>

        <button
          onClick={() => handleDifficulty(3)}
          className={`uppercase font-bold px-3 h-full ${
            numSquares === 3 ? "bg-[steelblue] text-white" : "text-[steelblue]"
          }`}
        >
          Easy
        </button>

        <button
          onClick={() => handleDifficulty(6)}
          className={`uppercase font-bold px-3 h-full ${
            numSquares === 6 ? "bg-[steelblue] text-white" : "text-[steelblue]"
          }`}
        >
          Hard
        </button>
      </div>

      {/* Squares */}
      <div className="max-w-[600px] mx-auto mt-5 flex flex-wrap">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleSquareClick(color)}
            className="w-[30%] pb-[30%] m-[1.66%] rounded-[15%] cursor-pointer transition-colors duration-500"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}

function generateRandomColors(count) {
  return Array.from({ length: count }, () => randomColor());
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
