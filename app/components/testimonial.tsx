"use client";

import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Review } from "@/types";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import NoResults from "./ui/no-results";
import Image from "next/image";

interface TestimonialProps {
  reviews: Review[];
}

const Testimonial: React.FC<TestimonialProps> = ({ reviews }) => {
  const plugin = React.useRef(Autoplay({ delay: 5000 }));

  return (
    <div className="relative">
      <Image
        src="/idk.gif"
        alt="growing"
        width={150}
        height={150}
        className="absolute top-10 z-10"
      />
      {reviews.length === 0 && <NoResults />}
      <Carousel
        plugins={[plugin.current]}
        className="w-full cursor-pointer  overflow-hidden lg:overflow-visible"
      >
        <CarouselContent>
          {reviews.length !== 0 &&
            reviews.map((review) => (
              <CarouselItem key={review.id}>
                <div className="mb-6 lg:mb-0 text-[#202020] relative">
                  <div className="relative block rounded-lg  bg-gray-50 border-3  dark:bg-neutral-700">
                    <h3 className="absolute top-5 left-5 p-2 border-2 sm:text-xl text-sm w-fit">
                      {format(review.createdAt, "MMMM do, yyyy")}
                    </h3>
                    <h3
                      className="absolute top-5 right-5 p-2 border-2 w-fit sm:text-xl text-sm hover:underline"
                      onClick={() =>
                        window.open(
                          `https://mail.google.com/mail/u/0/#inbox?compose=new`
                        )
                      }
                    >
                      {review.email}
                    </h3>
                    <div className="flex flex-row justify-center items-center w-full h-full">
                      <picture className="relative lg:w-40 lg:h-40 w-24 h-24 rounded-full overflow-hidden sm:mt-2 mt-24">
                        <img
                          src={review.imageUrl}
                          className="w-full h-full object-cover top-0"
                          alt="profile"
                        />
                      </picture>
                    </div>
                    <div className="p-6 text-center">
                      <h5 className="mb-2 text-lg font-bold">{review.name}</h5>
                      <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                        {review.occupation}
                      </h6>
                      <ul className="mb-6 flex justify-center">
                        <li>
                          <Star className="text-yellow-300 w-4" fill="white" />
                        </li>
                        <li>
                          <Star className="text-yellow-300 w-4" fill="white" />
                        </li>
                        <li>
                          <Star className="text-yellow-300 w-4" fill="white" />
                        </li>
                        <li>
                          <Star className="text-yellow-300 w-4" fill="white" />
                        </li>
                        <li>
                          <Star className="text-yellow-300 w-4" fill="white" />
                        </li>
                      </ul>
                      <p className="text-lg">{review.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Image
        src="/growing-plant.gif"
        alt="growing"
        width={100}
        height={100}
        className="absolute bottom-5 right-0 z-10"
      />
    </div>
  );
};

export default Testimonial;
