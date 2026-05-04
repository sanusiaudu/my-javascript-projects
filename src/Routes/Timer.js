import { useEffect, useState, useRef } from "react";

function Timer() {
  const [input, setInput] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });
  const [timeLeft, setTimeLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [expired, setExpired] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [initialSeconds, setInitialSeconds] = useState(0);
  const intervalRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      setInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const getTotalSeconds = () => {
    const d = parseInt(input.days) || 0;
    const h = parseInt(input.hours) || 0;
    const m = parseInt(input.minutes) || 0;
    const s = parseInt(input.seconds) || 0;
    return d * 86400 + h * 3600 + m * 60 + s;
  };

  const startCountdown = () => {
    const totalSeconds = getTotalSeconds();
    if (totalSeconds <= 0) return;
    setExpired(false);
    setIsPaused(false);
    setInitialSeconds(totalSeconds);
    setTimeLeft({
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    });
    setIsRunning(true);
  };

  const pauseCountdown = () => {
    setIsPaused(true);
    setIsRunning(false);
  };

  const resumeCountdown = () => {
    setIsPaused(false);
    setIsRunning(true);
  };

  const resetCountdown = () => {
    setIsRunning(false);
    setIsPaused(false);
    setExpired(false);
    setTimeLeft(null);
    setInput({ days: "", hours: "", minutes: "", seconds: "" });
    setInitialSeconds(0);
  };

  useEffect(() => {
    if (!isRunning) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (!prev) return null;
        const total =
          prev.days * 86400 +
          prev.hours * 3600 +
          prev.minutes * 60 +
          prev.seconds;
        if (total <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          setExpired(true);
          return null;
        }
        const next = total - 1;
        return {
          days: Math.floor(next / 86400),
          hours: Math.floor((next % 86400) / 3600),
          minutes: Math.floor((next % 3600) / 60),
          seconds: next % 60,
        };
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const format = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      <div className="w-full max-w-2xl px-6">
        <h1 className="text-center text-white text-2xl font-semibold mb-10 tracking-wide">
          Countdown Timer
        </h1>

        {!isRunning && !isPaused && !expired && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 mb-10 flex flex-col md:flex-row gap-4 justify-center items-center">
            <InputBox
              label="Days"
              name="days"
              value={input.days}
              onChange={handleInputChange}
            />
            <span className="text-white text-2xl font-bold">:</span>
            <InputBox
              label="Hours"
              name="hours"
              value={input.hours}
              onChange={handleInputChange}
            />
            <span className="text-white text-2xl font-bold">:</span>
            <InputBox
              label="Minutes"
              name="minutes"
              value={input.minutes}
              onChange={handleInputChange}
            />
            <span className="text-white text-2xl font-bold">:</span>
            <InputBox
              label="Seconds"
              name="seconds"
              value={input.seconds}
              onChange={handleInputChange}
            />
            <button
              className="ml-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow transition-all"
              onClick={startCountdown}
              disabled={getTotalSeconds() <= 0}
            >
              Start
            </button>
          </div>
        )}

        {(isRunning || isPaused) && timeLeft && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <TimeBox label="Days" value={format(timeLeft.days)} />
              <TimeBox label="Hours" value={format(timeLeft.hours)} />
              <TimeBox label="Minutes" value={format(timeLeft.minutes)} />
              <TimeBox label="Seconds" value={format(timeLeft.seconds)} />
            </div>
            <div className="flex justify-center gap-4">
              {isRunning ? (
                <button
                  className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl shadow transition-all"
                  onClick={pauseCountdown}
                >
                  Pause
                </button>
              ) : (
                <button
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow transition-all"
                  onClick={resumeCountdown}
                >
                  Play
                </button>
              )}
              <button
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow transition-all"
                onClick={resetCountdown}
              >
                Reset
              </button>
            </div>
          </>
        )}

        {expired && (
          <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-3xl font-bold text-white mb-4">
              ⏳ Countdown Expired
            </h1>
            <button
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow transition-all"
              onClick={resetCountdown}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function InputBox({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col items-center">
      <label className="text-indigo-200 text-xs mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-16 md:w-20 px-2 py-2 rounded-lg text-center text-lg font-semibold bg-white/80 text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        maxLength={name === "days" ? 3 : 2}
        inputMode="numeric"
        pattern="[0-9]*"
      />
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center border border-white/10">
      <span className="text-4xl md:text-5xl font-bold text-white">{value}</span>
      <span className="mt-3 text-sm uppercase tracking-widest text-indigo-300">
        {label}
      </span>
    </div>
  );
}

export default Timer;
