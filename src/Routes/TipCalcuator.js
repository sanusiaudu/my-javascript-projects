import { useState } from "react";

function TipCalculator() {
  const [billAmt, setBillAmt] = useState("");
  const [serviceQual, setServiceQual] = useState(0);
  const [peopleAmt, setPeopleAmt] = useState("");
  const [tip, setTip] = useState("0.00");
  const [showTip, setShowTip] = useState(false);
  const [showEach, setShowEach] = useState(false);
  const [error, setError] = useState("");

  const calculateTip = () => {
    setError("");
    if (billAmt === "" || serviceQual === 0) {
      setError("Please enter all values.");
      setShowTip(false);
      return;
    }

    let numOfPeople = peopleAmt;

    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      setShowEach(false);
    } else {
      setShowEach(true);
    }

    let total = (billAmt * serviceQual) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    setTip(total);
    setShowTip(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] px-2">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 animate-fade-in">
        <div className="bg-gradient-to-r from-[#b6e0fe] to-[#fbc2eb] p-6 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide mb-1 drop-shadow-lg">
            Tip Calculator
          </h1>
          <p className="text-gray-600 text-sm">
            Quickly split your bill and tip!
          </p>
        </div>
        <div className="p-7 space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Bill Amount
            </label>
            <div className="flex items-center gap-2 bg-gray-100 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#b6e0fe]">
              <span className="text-xl text-gray-400">₦</span>
              <input
                type="number"
                min="0"
                placeholder="Enter bill amount"
                value={billAmt}
                onChange={(e) => setBillAmt(e.target.value)}
                className="w-full bg-transparent outline-none text-lg"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Service Quality
            </label>
            <select
              value={serviceQual}
              onChange={(e) => setServiceQual(Number(e.target.value))}
              className="w-full p-2 rounded-lg border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#b6e0fe]"
            >
              <option value="0">-- Choose an Option --</option>
              <option value="0.3">30% - Outstanding</option>
              <option value="0.2">20% - Good</option>
              <option value="0.15">15% - It was OK</option>
              <option value="0.1">10% - Bad</option>
              <option value="0.05">5% - Terrible</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Number of People sharing the bill
            </label>
            <div className="flex items-center gap-2 bg-gray-100 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#b6e0fe]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 11-8 0 4 4 0 018 0zm6 4a4 4 0 00-3-3.87"
                />
              </svg>
              <input
                type="number"
                min="1"
                placeholder="How many people?"
                value={peopleAmt}
                onChange={(e) => setPeopleAmt(e.target.value)}
                className="w-full bg-transparent outline-none text-lg"
              />
            </div>
          </div>
          {error && (
            <div className="text-red-600 text-center text-sm font-semibold animate-pulse">
              {error}
            </div>
          )}
          <button
            onClick={calculateTip}
            className="w-full bg-gradient-to-r from-[#b6e0fe] to-[#fbc2eb] hover:from-[#fbc2eb] hover:to-[#b6e0fe] text-gray-800 font-bold py-3 rounded-xl shadow-lg transition-all duration-200 text-lg tracking-wide border border-[#e0e7ef]"
          >
            Calculate Tip
          </button>
        </div>
        {showTip && (
          <div className="text-center pb-8 animate-fade-in-up">
            <p className="text-base font-bold uppercase text-[#38bdf8] tracking-wider mb-2">
              Tip Amount
            </p>
            <div className="inline-flex items-end gap-1 bg-gradient-to-r from-[#b6e0fe]/80 to-[#fbc2eb]/80 px-8 py-4 rounded-2xl shadow-lg">
              <span className="text-2xl text-gray-700 font-bold">₦</span>
              <span className="text-4xl text-gray-800 font-extrabold drop-shadow">
                {tip}
              </span>
              {showEach && (
                <span className="ml-2 text-gray-700 text-base font-semibold">
                  each
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.7s; }
        .animate-fade-in-up { animation: fadeInUp 0.7s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}

export default TipCalculator;
