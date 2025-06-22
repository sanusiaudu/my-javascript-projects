import { useState } from "react";

function DragAndDrop() {
  const [dragging, setDragging] = useState(false);
  const [hoveredZone, setHoveredZone] = useState(null);
  const [currentDropZone, setCurrentDropZone] = useState(null);

  const handleDragStart = (e) => {
    setDragging(true);
    e.dataTransfer.setData("text", e.target.id);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDragOver = (e, dropZoneId) => {
    e.preventDefault();
    setHoveredZone(dropZoneId);
  };

  const handleDragLeave = () => {
    setHoveredZone(null);
  };

  const handleDrop = (e, dropZoneId) => {
    e.preventDefault();
    setCurrentDropZone(dropZoneId);
    setHoveredZone(null);
  };

  return (
    <div className="flex flex-col items-center gap-5 p-10">
      <div
        id="dragItem"
        className={`dragElement w-32 h-32 bg-blue-500 text-white flex justify-center items-center cursor-grab ${
          dragging ? "opacity-50" : ""
        }`}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        Drag Me
      </div>

      <div className="flex gap-5">
        {["zone1", "zone2", "zone3", "zone4"].map((zone) => (
          <div
            key={zone}
            className={`dropZone w-40 h-40 border-2 border-dashed flex justify-center items-center transition-all ${
              hoveredZone === zone
                ? "border-blue-500 bg-gray-200"
                : "border-gray-400"
            } ${currentDropZone === zone ? "bg-green-300" : ""}`}
            onDragOver={(e) => handleDragOver(e, zone)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, zone)}
          >
            Drop Here
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragAndDrop;
