import { useState } from "react";

export default function SortableList() {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  const [draggingIndex, setDraggingIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (index) => {
    if (draggingIndex === null || draggingIndex === index) return;

    const updatedItems = [...items];
    const draggedItem = updatedItems.splice(draggingIndex, 1)[0];
    updatedItems.splice(index, 0, draggedItem);

    setItems(updatedItems);
    setDraggingIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-700 to-blue-500 flex flex-col items-center p-6">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Drag and Drop Sortable List
      </h2>

      <ul className="w-[350px] rounded-xl bg-white/10 p-3 shadow-xl">
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
            className={`
              my-2 cursor-grab rounded-md bg-white px-5 py-4
              font-bold text-gray-800 shadow transition-all
              hover:scale-[1.03] hover:bg-blue-50
              ${draggingIndex === index ? "opacity-70 rotate-[-2deg]" : ""}
              ${
                dragOverIndex === index && draggingIndex !== index
                  ? "border-2 border-dashed border-orange-400 bg-orange-50"
                  : ""
              }
            `}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
