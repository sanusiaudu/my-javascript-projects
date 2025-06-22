/* global EyeDropper */
import { useState } from "react";
import { PiImageSquareLight } from "react-icons/pi";


const ColorPicker = () => {
  const [color, setColor] = useState("#5524e7");
  const [image, setImage] = useState(null);

    const openEyeDropper = async () => {
        let eyeDropper = new EyeDropper();
//     if ('EyeDropper' in window) {
//   const eyeDropper = new EyeDropper();
//   // Your logic here
// } else {
//   console.error("EyeDropper API is not supported in this browser.");
// }
    const { sRGBHex } = await eyeDropper.open();
    setColor(sRGBHex);
  };

  const handleFileInput = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCopyColor = async () => {
    await navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <div className="grid grid-cols-[450px_1fr] min-h-screen text-white ">
      <div className='w-full h-screen bg-[#22232b] p-6 top-0 sticky'>
        <h1 className=" m-4">Pick color from image</h1>

        <div className="m-4">
          <p className="text-xs m-1 text-[#ededf1]" >Select an image</p>
                  <input
                      onChange={handleFileInput}
                      type="file" accept="image/*" />
        </div>

        <div className="mb-[1.6rem]">
          <p className="text-xs m-4 text-[#ededf1]">Pick color</p>
                  <button className="w-full bg-[#6c738b] text-white border-0 text-base p-3 rounded cursor-pointer transition-colors duration-200  hover:bg-[#46495e]"
                      onClick={openEyeDropper}
                  >
            Open Eyedropper
          </button> 
        </div>

        <div className="m-4">
          <p className="text-xs m-4 text-[#ededf1]">View selected</p>
          <button
            className="w-full p-8 border-0 cursor-pointer rounded-md transition-colors duration-200 grid place-items-center text-white text-lg"
            style={{ background: color }}
            onClick={handleCopyColor}
          >
            <span>{color}</span>
          </button>
        </div>

      </div>

      <div className="bg-[#363844] p-10 grid place-items-center relative overflow-hidden">
        {image ? (
          <>
            <img className="w-full h-auto max-w-4xl shadow-[0px 5px 15px rgba(0, 0, 0, 0.15)] relative z-10" src={image} alt="Working image" />
            <div className="absolute inset-0 z-0 bg-cover bg-center scale-125 filter blur-sm opacity-50"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </>
        ) : (
          <PiImageSquareLight size={100} />
        )}
      </div>
    </div>
  );
};

export default ColorPicker;