import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1019/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1024/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1027/600/400",
  "https://picsum.photos/id/1035/600/400",
];

export default function DraggableImageSlider() {
  const carouselRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const scrollDiff = useRef(0);

  const getCardWidth = () => {
    const carousel = carouselRef.current;
    if (!carousel) return 0;

    const firstImage = carousel.querySelector("img");
    if (!firstImage) return 0;

    return firstImage.clientWidth + 14;
  };

  const updateArrows = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    setShowLeft(carousel.scrollLeft > 0);
    setShowRight(Math.round(carousel.scrollLeft) < Math.round(maxScroll));
  };

  useEffect(() => {
    updateArrows();

    const carousel = carouselRef.current;

    carousel.addEventListener("scroll", updateArrows);

    return () => {
      carousel.removeEventListener("scroll", updateArrows);
    };
  }, []);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;

    const amount = getCardWidth();

    carousel.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const autoSnap = () => {
    const carousel = carouselRef.current;

    const cardWidth = getCardWidth();

    const offset = carousel.scrollLeft % cardWidth;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft <= 0 || carousel.scrollLeft >= maxScroll) return;

    if (offset > cardWidth / 3) {
      carousel.scrollTo({
        left: carousel.scrollLeft + (cardWidth - offset),
        behavior: "smooth",
      });
    } else {
      carousel.scrollTo({
        left: carousel.scrollLeft - offset,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    scrollDiff.current = e.pageX - startX.current;

    carouselRef.current.scrollLeft = scrollStart.current - scrollDiff.current;
  };

  const stopDragging = () => {
    if (!isDragging.current) return;

    isDragging.current = false;

    if (Math.abs(scrollDiff.current) > 10) {
      autoSnap();
    }
  };

  return (
    <div className="min-h-screen bg-slate-700 flex items-center justify-center px-8">
      <div className="relative flex items-center max-w-6xl w-full">
        {showLeft && (
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute -left-5 z-10 h-11 w-11 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <FaAngleLeft />
          </button>
        )}

        <div
          ref={carouselRef}
          className="overflow-hidden whitespace-nowrap cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              draggable={false}
              className="inline-block h-[340px] w-1/3 object-cover ml-[14px] first:ml-0
                         md:w-1/2
                         max-sm:w-full"
            />
          ))}
        </div>

        {showRight && (
          <button
            onClick={() => scrollCarousel("right")}
            className="absolute -right-5 z-10 h-11 w-11 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <FaAngleRight />
          </button>
        )}
      </div>
    </div>
  );
}
