import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { CircleCountdownTimer } from "../Timer";

const BannerSection = () => {
  return (
    <div className="container md:h-[420px] overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row bg-black px-4 py-6 md:px-12 h-full">
        <div className="flex w-[40%] items-center">
          <div className=" space-y-3 md:space-y-6">
            <h5 className="text-green-500 font-bold">Categories</h5>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-balance text-white">
              Enhance Your Music Experience
            </h1>
            <CircleCountdownTimer />
            <Button className="bg-green-500 hover:bg-green-600 rounded px-8 py-4 !mt-5 md:!mt-10">
              Buy Now!
            </Button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <Image
            src={"/speaker.png"}
            alt="Speaker"
            height={1000}
            width={1000}
            className="object-cover h-full w-full scale-125 "
            style={{
              filter: "drop-shadow(0 0 100px #999797)",
              transform: "rotateY(180deg)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
