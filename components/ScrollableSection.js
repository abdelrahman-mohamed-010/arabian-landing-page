"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const ScrollableSection = ({ items, translations }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      const scrollElement = scrollRef.current;
      if (scrollElement) {
        setCanScrollLeft(scrollElement.scrollLeft > 1);
        setCanScrollRight(
          scrollElement.scrollWidth >
            scrollElement.scrollLeft + scrollElement.clientWidth + 1
        );
      }
    };
    checkScroll();
    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener("scroll", checkScroll);
    return () => scrollElement?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction) => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollElement.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const isArabic = translations.type === "ar"; // Check if the language is Arabic

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className={`flex overflow-auto hidescroll gap-4 md:gap-7 mt-6 md:mt-12 ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >
        {items.map((card) => (
          <div
            key={card.id}
            className="w-[150px] md:w-[223px] rounded-lg flex-shrink-0 relative cursor-pointer"
          >
            <div className="relative">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-[200px] md:h-[299px] object-cover rounded-md"
              />
              <div className="absolute inset-0 flex items-end justify-center pb-7 max-md:pb-4">
                <span className=" text-orange-400 font-semibold px-2 py-1 rounded text-sm text-center">
                  {card.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {canScrollRight && !isArabic && (
        <ChevronRight
          onClick={() => scroll("right")}
          className="hidden md:block absolute -right-14 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer"
        />
      )}
      {canScrollLeft && !isArabic && (
        <ChevronLeft
          onClick={() => scroll("left")}
          className="hidden md:block absolute -left-14 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer"
        />
      )}
      {canScrollRight && isArabic && (
        <ChevronLeft
          onClick={() => scroll("right")}
          className="hidden md:block absolute -left-14 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer"
        />
      )}
      {canScrollLeft && isArabic && (
        <ChevronRight
          onClick={() => scroll("left")}
          className="hidden md:block absolute -right-14 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer"
        />
      )}
    </div>
  );
};

export default ScrollableSection;
