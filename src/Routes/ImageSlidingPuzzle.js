import { useState } from "react";

const INITIAL_BOARD = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const image = "https://www.101computing.net/wp/wp-content/uploads/flower.png";

function SlidingPuzzle() {
  const [board, setBoard] = useState(INITIAL_BOARD);

  const shuffle = () => {
    const shuffled = [...board];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }

    setBoard(shuffled);
  };

  const moveTile = (index) => {
    const emptyIndex = board.indexOf(9);

    const row = Math.floor(index / 3);
    const col = index % 3;

    const emptyRow = Math.floor(emptyIndex / 3);
    const emptyCol = emptyIndex % 3;

    const isAdjacent =
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow);

    if (!isAdjacent) return;

    const updated = [...board];
    [updated[index], updated[emptyIndex]] = [
      updated[emptyIndex],
      updated[index],
    ];

    setBoard(updated);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white">Sliding Puzzle</h1>
        <p className="text-slate-400 mt-2">Arrange the image correctly</p>
      </div>

      <div className="rounded-3xl bg-slate-900 p-5 shadow-2xl">
        <div className="grid grid-cols-3 gap-1">
          {board.map((tile, index) => {
            const positions = {
              1: "0% 0%",
              2: "50% 0%",
              3: "100% 0%",
              4: "0% 50%",
              5: "50% 50%",
              6: "100% 50%",
              7: "0% 100%",
              8: "50% 100%",
            };

            return (
              <button
                key={index}
                onClick={() => moveTile(index)}
                className={`h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-lg border border-slate-700 transition hover:scale-95 ${
                  tile === 9 ? "bg-white cursor-default" : "cursor-pointer"
                }`}
              >
                {tile !== 9 && (
                  <div
                    className="h-full w-full bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "300% 300%",
                      backgroundPosition: positions[tile],
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={shuffle}
        className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
      >
        New Game
      </button>
    </div>
  );
}

export default SlidingPuzzle;
