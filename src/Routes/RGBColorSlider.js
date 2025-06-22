import { useState } from "react";

function RGBColorSlider() {
  const [color, setColor] = useState({ r: 255, g: 0, b: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColor((prevColor) => ({
      ...prevColor,
      [name]: value,
    }));
  };

  const rgbString = `rgb(${color.r}, ${color.g}, ${color.b})`;

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-white">
      <h2>RGB Color Slider</h2>
      <div className="w-1/6">
        <div className="flex justify-between">
          <label>Red:</label>
          <input
            className="w-40"
            type="range"
            name="r"
            min="0"
            max="255"
            value={color.r}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <label>Green:</label>
          <input
            className="w-40"
            type="range"
            name="g"
            min="0"
            max="255"
            value={color.g}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <label>Blue:</label>
          <input
            className="w-40"
            type="range"
            name="b"
            min="0"
            max="255"
            value={color.b}
            onChange={handleChange}
          />
        </div>
      </div>
      <p>Current Color: {rgbString}</p>
      <div
        style={{
          backgroundColor: rgbString,
          //   width: "50%",
          //   height: "50%",
          //   margin: "20px",
        }}
        className={`w-2/4 h-1/2 m-5 bg-[${rgbString}] `}
      ></div>
    </div>
  );
}

export default RGBColorSlider;
