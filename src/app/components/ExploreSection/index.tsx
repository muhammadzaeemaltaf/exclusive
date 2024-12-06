import React from "react";
import ProductSection from "../ProductSection";
import {
  calculateDiscountedPrice,
  categories,
  renderStars,
} from "../../../../libs";
import Image from "next/image";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";

const ExploreSection = () => {
  return (
    <div className="py-16">
      <ProductSection
        badgeTitle="Our Product's"
        heading="Explore Our Products"
        slider={true}
        timer={false}
      />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.slice(0, 4).map((item, index) => (
            <div key={index} className="pl-1">
              <div className="p-1">
                <div className="aspect-square relative overflow-hidden group rounded transition-all duration-150">
                  <Image
                    src={"/sideImage.jpg"}
                    alt={item.products[0].name}
                    height={1000}
                    width={1000}
                    className="h-full w-full object-cover"
                  />
                  {index % 2 === 0 && (
                    <div className="absolute text-sm w-16 text-center px-2 py-1 rounded bg-green-500 text-white top-3 left-3">
                      New
                    </div>
                  )}
                  <div className="absolute top-1 right-1 space-y-2">
                    <FaRegHeart className="h-7 w-7 bg-white rounded-full p-1" />
                    <FaRegEye className="h-7 w-7 bg-white rounded-full p-1" />
                  </div>
                  <Button className="absolute w-full bottom-0 lg:bottom-[-100%] lg:group-hover:bottom-0 rounded-none transition-all duration-300 ease-in-out">
                    Add to Cart
                  </Button>
                </div>
                <div className="mt-4">
                  <strong>{item.products[0].name}</strong>

                  <div className="flex gap-2 items-center">
                    <p className="text-red-500 font-semibold">
                      ${item.products[0].price}
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center text-yellow-500">
                        {" "}
                        {renderStars(item.products[0].rating)}{" "}
                      </span>
                      <span className="text-xs">
                        ({item.products[0].rating})
                      </span>
                    </div>
                  </div>
                  <RadioGroup className="mt-2 flex gap-2">
                    {item.products[0].colors.map((color, colorIndex) => {
                      // Convert color names to CSS-friendly format
                      const colorMap: any = {
                        "Phantom Black": "black",
                        "Neon Red/Blue": "linear-gradient(to right, red, blue)", // Example gradient
                        "Space Gray": "#343a40", // Example hex code
                      };
                      const cssColor = colorMap[color] || color.toLowerCase();

                      return (
                        <RadioGroupItem
                          key={colorIndex}
                          value={color}
                          className=""
                          style={{
                            backgroundColor: cssColor.includes("gradient")
                              ? undefined
                              : cssColor, // Handle solid colors
                            backgroundImage: cssColor.includes("gradient")
                              ? cssColor
                              : undefined, // Handle gradients
                              fill: cssColor.includes("gradient")
                              ? undefined
                              : cssColor,
                          }}
                          />
                         
                      );
                    })}
                  </RadioGroup>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-16">
                <Button className="bg-red-500 hover:bg-red-600">
                  View All Products
                </Button>
              </div>
      </div>
    </div>
  );
};

export default ExploreSection;
