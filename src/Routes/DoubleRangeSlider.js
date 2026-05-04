import { useState, useEffect, useRef } from "react";

function DoubleRangeSlider() {
  const min = 0;
  const max = 100;

  const [from, setFrom] = useState(10);
  const [to, setTo] = useState(40);

  const rangeRef = useRef(null);

  // Update gradient track
  useEffect(() => {
    const percentFrom = ((from - min) / (max - min)) * 100;
    const percentTo = ((to - min) / (max - min)) * 100;

    if (rangeRef.current) {
      rangeRef.current.style.background = `linear-gradient(to right,
        #e0f2fe ${percentFrom}%,
        #a5b4fc ${percentFrom}%,
        #fbc2eb ${percentTo}%,
        #e0f2fe ${percentTo}%)`;
    }
  }, [from, to]);

  const handleFromChange = (value) => {
    const val = Math.min(Number(value), to);
    setFrom(val);
  };

  const handleToChange = (value) => {
    const val = Math.max(Number(value), from);
    setTo(val);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-32 space-y-8 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] p-8 rounded-3xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-[#6366f1] mb-4">
        Double Range Slider
      </h2>
      {/* Slider */}
      <div className="relative h-12">
        <input
          type="range"
          min={min}
          max={max}
          value={from}
          onChange={(e) => handleFromChange(e.target.value)}
          className="absolute w-full appearance-none pointer-events-none h-3 rounded bg-transparent
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:bg-[#a5b4fc]
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:cursor-pointer"
        />

        <input
          type="range"
          min={min}
          max={max}
          value={to}
          onChange={(e) => handleToChange(e.target.value)}
          ref={rangeRef}
          className="absolute w-full appearance-none pointer-events-none h-3 rounded
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:bg-[#000]
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>

      {/* Inputs */}
      <div className="flex justify-between text-[#6366f1]">
        <div className="flex flex-col items-start gap-1">
          <label className="text-sm font-semibold">Min</label>
          <input
            type="number"
            value={from}
            min={min}
            max={max}
            onChange={(e) => handleFromChange(e.target.value)}
            className="w-20 px-2 py-1 border border-[#a5b4fc] rounded focus:outline-none focus:ring-2 focus:ring-[#a5b4fc] bg-white text-[#6366f1]"
          />
        </div>

        <div className="flex flex-col items-end gap-1">
          <label className="text-sm font-semibold">Max</label>
          <input
            type="number"
            value={to}
            min={min}
            max={max}
            onChange={(e) => handleToChange(e.target.value)}
            className="w-20 px-2 py-1 border border-[#fbc2eb] rounded focus:outline-none focus:ring-2 focus:ring-[#fbc2eb] bg-white text-[#d946ef]"
          />
        </div>
      </div>
    </div>
  );
}

export default DoubleRangeSlider;
