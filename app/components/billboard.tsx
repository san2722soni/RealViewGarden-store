"use client"

import "../globals.css";
import React, { useState, useEffect } from "react";
import { Billboard } from "@/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import NoResults from "./ui/no-results";

interface BillboardProps {
  data: Billboard;
  allData: Billboard[];
}

const Billboard: React.FC<BillboardProps> = ({ data, allData }) => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));


  const show = () => {
  };

  show();
  return (
    <>
      {allData.length === 0 && <NoResults />}
      <Carousel plugins={[plugin.current]} className="w-full cursor-pointer overflow-hidden lg:overflow-visible">
        <CarouselContent>
          {allData.length !== 0 &&
            allData.map((data) => (
              <CarouselItem key={data.id}>
                <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
                  <div
                    style={{ backgroundImage: `url(${data?.imageUrl})` }}
                    className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
                  >
                    <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                      <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                        <p className="glow">{data.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default Billboard;
