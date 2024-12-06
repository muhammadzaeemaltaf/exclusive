"use client";

import React, { ReactElement } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

interface TeamProps {
  image: string;
  name: string;
  designation: string;
  icons: ReactElement[];
}

const team: TeamProps[] = [
  {
    image: "/tom.png",
    name: "Tom Cruise",
    designation: "Founder & Chairmen",
    icons: [<Twitter />, <Instagram />, <Linkedin />],
  },
  {
    image: "/emma.png",
    name: "Emma Watson",
    designation: "Managing Director",
    icons: [<Twitter />, <Instagram />, <Linkedin />],
  },
  {
    image: "/will.png",
    name: "Will Smith",
    designation: "Product Designer",
    icons: [<Twitter />, <Instagram />, <Linkedin />],
  },
  {
    image: "/tom.png",
    name: "Tom Cruise",
    designation: "Founder & Chairmen",
    icons: [<Twitter />, <Instagram />, <Linkedin />],
  },
  {
    image: "/emma.png",
    name: "Emma Watson",
    designation: "Managing Director",
    icons: [<Twitter />, <Instagram />, <Linkedin />],
  },
  {
    image: "/will.png",
    name: "Will Smith",
    designation: "Product Designer",
    icons: [<Twitter />, <Instagram />, <Linkedin />],
  },
];

const Team = () => {
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
    <div className="py-10">
      <div className="container overflow-hidden">
        <div className="mx-auto ">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="">
              {team.map((person, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div>
                    <div className="bg-gray-100 w-[370px] h-[430px] px-6 pt-10 overflow-hidden">
                      <Image
                        src={person.image}
                        alt={person.name}
                        height={1000}
                        width={1000}
                        className="ml-0"
                      />
                    </div>
                    <div>
                        <h1 className="text-[30px] font-[500] mt-4">
                            {person.name}
                        </h1>
                        <p className="">
                            {person.designation}
                        </p>
                        <div className="flex gap-3 mt-4">
                            {person.icons.map((Icon, index) => (
                            Icon
                            ))}
                        </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center py-2 w-full mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 md:h-4 w-2 md:w-4 rounded-full border-2 border-white mx-1 cursor-pointer ${
                  current === index + 1 ? "bg-red-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
