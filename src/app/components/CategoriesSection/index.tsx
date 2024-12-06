import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  categories,
} from "../../../../libs";
import Badge from "../Badge";

const CategoriesSection = () => {
  return (
    <div className="container">
      <div className="py-16 space-y-5 relative border-y">
      <Badge title={"Categories"} />
      <h1 className="text-2xl md:text-4xl font-semibold">Browse By <br className="md:hidden"/> Category</h1>
        <div>
          <Carousel className="w-full ">
            <div className="flex gap-3 absolute right-5 -top-10">
              <CarouselPrevious className="relative top-0 left-0 bottom-0 right-0" />
              <CarouselNext className="relative top-0 left-0 bottom-0 right-0" />
            </div>
            <CarouselContent className="-ml-1 w-1/2 md:w-auto gap-3 md:gap-0">
              {categories.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/3 lg:basis-[16.666%]"
                >
                  <div className="p-1">
                    <div className="aspect-square w-40 border relative overflow-hidden group rounded transition-all duration-150 flex flex-col gap-4 justify-center items-center cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500">
                        <span>{item.categoryIcon}</span>
                       <p> {item.categoryName}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
