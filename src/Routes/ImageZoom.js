import { useState } from "react";

function ImageZoom() {
  const [bgPosition, setBgPosition] = useState("50% 50%");

  const imageUrl = "https://images5.alphacoders.com/343/thumb-1920-343645.jpg";

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setBgPosition(`${x}% ${y}%`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-black px-4">
      {/* Card Container */}
      <div className="w-full max-w-5xl space-y-6">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-white tracking-wide">
          Image Zoom Viewer
        </h1>

        {/* Zoom Area */}
        <div
          onMouseMove={handleMove}
          className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-zoom-in"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: bgPosition,
            backgroundSize: "200%", // zoom level
          }}
        >
          <img
            src={imageUrl}
            alt="zoom"
            className="w-full h-full object-cover transition-opacity duration-500 hover:opacity-0"
          />

          {/* Overlay for style */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        {/* Caption */}
        <p className="text-center text-gray-400 text-sm">
          Hover to zoom into the image
        </p>
      </div>
    </div>
  );
}

export default ImageZoom;
