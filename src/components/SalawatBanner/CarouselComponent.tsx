"use client";

import { motion } from "framer-motion";
import { Carousel } from "../ui/carousel";
import { useRef, useEffect } from "react";

interface Pledge {
  id: number;
  name: string;
  count: number;
  country: string;
  flag: string;
}

const CarouselComponent = ({ children }: { children: React.ReactNode }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 2;
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 30); // Adjust speed here
    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      ref={carouselRef}
      className="w-full mx-auto mb-12 overflow-hidden"
    >
      <motion.div
        className="flex"
        animate={{ x: [0, -1000] }} // Adjust this value according to the total width of your items
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }} // Adjust duration to control speed
      >
        {children}
      </motion.div>
    </Carousel>
  );
};

export default CarouselComponent;
