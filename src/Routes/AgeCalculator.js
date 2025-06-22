import { useState } from "react";

function AgeCalculator() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [yearCount, setYearCount] = useState(null);
  const [monthCount, setMonthCount] = useState(null);
  const [dayCount, setDayCount] = useState(null);
  const [error, setError] = useState("");

  const getAge = (year, month, day) => {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setYearCount(years);
    setMonthCount(months);
    setDayCount(days);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!year || year <= 99) {
      setError("Please enter a valid year, month, and day");
      return;
    }
    if (!month || month < 1 || month > 12) {
      setError("Please enter a valid year, month, and day");
      return;
    }
    if (!day || day < 1 || day > 31) {
      setError("Please enter a valid year, month, and day");
      return;
    }
    setError("");

    getAge(year, month, day);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-purple-700">
      <div>
        <div className="text-4xl text-center font-semibold m-4 bg-white text-purple-950 p-4 rounded-2xl">
          <h4>Age Calculator</h4>
        </div>
        <div className="bg-white text-purple-950 p-4 rounded-3xl">
          <div className="flex justify-evenly justify-self-center gap-2">
            <div class="block">
              <label htmlFor="date">Date</label>
              <input
                className="block p-2 border border-solid border-purple-700 rounded-sm"
                type="text"
                name="date"
                id="date"
                placeholder="dd"
                required="required"
                minlength="1"
                maxlength="2"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </div>
            <div class="block">
              <label htmlFor="month">Month</label>
              <input
                className="block p-2 border border-solid border-purple-700 rounded-sm"
                type="text"
                name="month"
                id="month"
                placeholder="mm"
                required="required"
                minlength="1"
                maxlength="2"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </div>
            <div class="block">
              <label htmlFor="year">Year</label>
              <input
                className="block p-2 border border-solid border-purple-700 rounded-sm"
                type="text"
                name="year"
                id="year"
                placeholder="yyyy"
                required="required"
                minlength="4"
                maxlength="4"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-800 text-white py-2 px-4 rounded-md m-3"
              onClick={handleCalculate}
            >
              Submit
            </button>
          </div>
          <div className="text-purple-700 text-lg">
            {error && <div style={{ color: "red" }}>{error}</div>}
            {yearCount !== null && monthCount !== null && dayCount !== null && (
              <p>
                Your Age: {yearCount} years, {monthCount} months, {dayCount}{" "}
                days
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgeCalculator;
