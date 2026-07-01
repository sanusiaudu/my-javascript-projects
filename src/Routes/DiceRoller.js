import { useEffect, useRef, useState } from "react";

export default function DiceRoller() {
  const [numDice, setNumDice] = useState(1);
  const [numSides, setNumSides] = useState(6);
  const [rolling, setRolling] = useState(false);
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);

  const intervalRef = useRef(null);

  const startRolling = () => {
    intervalRef.current = setInterval(() => {
      const rolls = [];
      let sum = 0;

      for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * numSides) + 1;
        rolls.push(roll);
        sum += roll;
      }

      setResults(rolls);
      setTotal(sum);
    }, 100);
  };

  const stopRolling = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleButtonClick = () => {
    if (rolling) {
      stopRolling();
      setRolling(false);
    } else {
      startRolling();
      setRolling(true);
    }
  };

  useEffect(() => {
    return () => {
      stopRolling();
    };
  }, []);

  return (
    <div className="min-h-screen bg-green-500 flex items-center justify-center">
      <div className="w-[90%] max-w-md rounded-lg bg-white p-10 shadow-xl">
        <h1 className="text-center text-3xl font-bold">Dice Roller</h1>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="text-center">
            <input
              type="number"
              min={1}
              value={numDice}
              onChange={(e) => setNumDice(Number(e.target.value))}
              className="mx-auto block w-20 rounded-lg border border-black p-3 text-center font-semibold"
            />
            <label className="mt-2 block font-medium">Number of Dice</label>
          </div>

          <div className="text-center">
            <input
              type="number"
              min={2}
              value={numSides}
              onChange={(e) => setNumSides(Number(e.target.value))}
              className="mx-auto block w-20 rounded-lg border border-black p-3 text-center font-semibold"
            />
            <label className="mt-2 block font-medium">Number of Sides</label>
          </div>
        </div>

        <button
          onClick={handleButtonClick}
          className="mx-auto mt-8 block rounded-lg bg-green-500 px-8 py-3 text-white transition hover:bg-green-600"
        >
          {rolling ? "Stop Rolling" : "Roll Dice"}
        </button>

        <div className="mt-8 text-center">
          {results.length > 0 && (
            <div className="space-y-2">
              {results.map((roll, index) => (
                <p key={index}>
                  Die {index + 1}: {roll}
                </p>
              ))}
            </div>
          )}

          <h2 className="mt-6 text-2xl font-bold">Total: {total}</h2>
        </div>
      </div>
    </div>
  );
}
