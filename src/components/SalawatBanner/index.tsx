import { Button } from "@/components/ui/button";
import CarouselComponent from "./CarouselComponent";
import PledgeCard from "./PledgeCard";
import { CarouselItem } from "../ui/carousel";
import { pledges } from "./pledges.json";

interface Pledge {
  id: number;
  name: string;
  count: number;
  country: string;
  flag: string;
}

const BannerCard = () => {
  return (
    <div className="w-full min-h-screen">
      <h2 className="text-5xl font-semibold text-center mb-16">
        Salawat Pledges From Around the World.
      </h2>
      <CarouselComponent>
        {pledges.map((pledge: Pledge) => (
          <CarouselItem key={pledge.id} className="basis-1/5">
            <PledgeCard {...pledge} />
          </CarouselItem>
        ))}
      </CarouselComponent>
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
