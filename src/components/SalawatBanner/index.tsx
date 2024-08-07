"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Carousel, CarouselItem } from "../ui/carousel";
import PledgeCard from "./PledgeCard";
import { Button } from "@/components/ui/button";
import { pledges } from "./pledges.json";

interface Pledge {
  id: number;
  name: string;
  count: number;
  country: string;
  flag: string;
}

const BannerCard = () => {
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
    <div className="w-full min-h-screen">
      <h2 className="text-5xl font-semibold text-center mb-16">
        Salawat Pledges From Around the World.
      </h2>
      <Carousel
        ref={carouselRef}
        className="w-full mx-auto mb-12 overflow-hidden"
      >
        <motion.div
          className="flex"
          animate={{ x: [0, -1000] }} // Adjust this value according to the total width of your items
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }} // Adjust duration to control speed
        >
          {pledges.map((pledge: Pledge) => (
            <CarouselItem key={pledge.id} className="basis-1/5">
              <PledgeCard {...pledge} />
            </CarouselItem>
          ))}
        </motion.div>
      </Carousel>
      <h3 className="text-4xl mb-8 text-center">Join the Movement.</h3>
      <div className="flex justify-center">
        <Button
          className="bg-primary text-black hover:bg-popover text-2xl py-8 px-12"
          size="lg"
        >
          Pledge Your Salawat
        </Button>
      </div>
    </div>
  );
};

export default BannerCard;
