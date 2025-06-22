import { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const timerRef = useRef(null);

  const displayTimer = () => {
    setMilliseconds((prevMilliseconds) => {
      let newMilliseconds = prevMilliseconds + 10;

      if (newMilliseconds === 1000) {
        newMilliseconds = 0;
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }

      return newMilliseconds;
    });
  };

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(displayTimer, 10);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const formatTime = (unit) => (unit < 10 ? `0${unit}` : unit);
  const formatMilliseconds = (unit) =>
    unit < 10 ? `00${unit}` : unit < 100 ? `0${unit}` : unit;

  return (
    <div className="bg-[#2C3E50] flex flex-col justify-center items-center h-screen">
      <div className="bg-[#132536] text-[#ECF0F1] w-2/5 rounded-3xl p-6 text-2xl flex justify-center items-center">
        {formatTime(hours)} : {formatTime(minutes)} : {formatTime(seconds)} :{" "}
        {formatMilliseconds(milliseconds)}
      </div>
      <div className="w-2/5 flex justify-evenly m-3 ">
        <button
          className="w-1/5 p-2 text-base bg-[#205e94] text-[#ECF0F1] border-0 rounded-2xl cursor-pointer"
          onClick={pauseTimer}
        >
          Pause
        </button>
        <button
          className="w-1/5 p-2 text-base bg-[#20b380] text-[#ECF0F1] border-0 rounded-2xl cursor-pointer"
          onClick={startTimer}
        >
          Start
        </button>
        <button
          className="w-1/5 p-2 text-base bg-[#d23332] text-[#ECF0F1] border-0 rounded-2xl cursor-pointer"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default StopWatch;
