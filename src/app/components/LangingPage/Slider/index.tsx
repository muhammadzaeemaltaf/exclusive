"use client";

import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

const Slider = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="w-[90vw] sm:w-full h-full relative">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent className="flex-1 flex-nowrap h-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="flex flex-1 bg-black text-white min-w-full md:pr-6 md:pt-3" key={index}>
              <div className="flex justify-center items-center py-10 md:py-0 w-1/2">
                <div className="w-[70%] space-y-2 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span>
                      <FaApple className="h-5 w-5 sm:h-10 sm:w-10 md:h-[40] md:w-[30px] lg:h-[49px] lg:w-[40px] text-xs sm:text-sm" />
                    </span>
                    <p className="text-[10px] whitespace-nowrap  md:text-[16px] sm:h-[20px]">iPhone 14 Series</p>
                  </div>
                  <div>
                    <h1 className="text-[14px] sm:text-xl md:text-3xl lg:text-4xl text-balance">Up to 10% off Voucher</h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={"#"} className="linkLine after:!bg-white pb-1 text-[14px] md:text-base">Shop Now</Link>
                    <IoMdArrowForward className="md:scale-150"/>
                  </div>
                </div>
              </div>

              <div className=" w-1/2 h-full py-10 md:py-0">
                <Image
                  src="/sideImage.jfif"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center py-2 absolute bottom-1 w-full">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 md:h-4 w-2 md:w-4 rounded-full border-2 border-white mx-1 cursor-pointer ${current === index + 1 ? 'bg-red-500' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
