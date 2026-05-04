import { useState } from "react";

function GradientColorGenerator() {
  const [direction, setDirection] = useState("to top right");
  const [color1, setColor1] = useState("#4f46e5"); // indigo
  const [color2, setColor2] = useState("#06b6d4"); // cyan
  const [copied, setCopied] = useState(false);

  const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")}`;
  };

  const refreshColors = () => {
    setColor1(getRandomColor());
    setColor2(getRandomColor());
  };

  const copyCode = async () => {
    const code = `background: ${gradient};`;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-4">
      <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-6 space-y-6">
        {/* Preview */}
        <div
          className="h-56 w-full rounded-xl shadow-inner border border-white/10"
          style={{ background: gradient }}
        />

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Direction */}
          <div>
            <p className="text-sm text-gray-300 mb-2">Direction</p>
            <select
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              className="w-full p-2 rounded-lg bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="to top">Top</option>
              <option value="to top right">Top Right</option>
              <option value="to right">Right</option>
              <option value="to bottom right">Bottom Right</option>
              <option value="to bottom">Bottom</option>
              <option value="to bottom left">Bottom Left</option>
              <option value="to left">Left</option>
              <option value="to top left">Top Left</option>
            </select>
          </div>

          {/* Colors */}
          <div>
            <p className="text-sm text-gray-300 mb-2">Colors</p>
            <div className="flex gap-3">
              <input
                type="color"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="w-full h-12 rounded-lg border border-slate-600 bg-transparent cursor-pointer"
              />
              <input
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="w-full h-12 rounded-lg border border-slate-600 bg-transparent cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Code */}
        <textarea
          readOnly
          value={`background: ${gradient};`}
          className="w-full p-3 rounded-lg bg-slate-900 text-green-400 text-sm border border-slate-700 focus:outline-none resize-none"
        />

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={refreshColors}
            className="w-full py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition"
          >
            🎲 Random Colors
          </button>

          <button
            onClick={copyCode}
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition"
          >
            {copied ? "✅ Copied!" : "📋 Copy Code"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GradientColorGenerator;
