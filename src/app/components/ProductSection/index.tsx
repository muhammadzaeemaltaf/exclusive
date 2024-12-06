import React from "react";
import Badge from "../Badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  calculateDiscountedPrice,
  categories,
  renderStars,
} from "../../../../libs";
import Image from "next/image";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "../Timer";
import Link from "next/link";

const ProductSection = ({
  badgeTitle,
  heading,
  slider,
  timer,
  showBtn,
  showDiscount,
  showDiscountBagde,
}: {
  badgeTitle: string;
  heading: string;
  slider: boolean;
  timer: boolean;
  showBtn?: boolean;
  showDiscount?: boolean;
  showDiscountBagde?: boolean;
}) => {
  return (
    <div className="container">
      <div className="py-16 space-y-5 relative">
        <Badge title={badgeTitle} />

        <div
          className={`flex flex-col md:flex-row items-start md:items-center ${
            !slider && !timer ? "justify-between px-2" : ""
          } gap-3 md:gap-28`}
        >
          <h1 className="text-2xl md:text-4xl font-semibold">{heading}</h1>
          {timer && <CountdownTimer />}
          {!slider && (
            <Button className="bg-red-500 hover:bg-red-600 ml-auto md:ml-0">
              View All
            </Button>
          )}
        </div>

        {slider ? (
          <div>
            <Carousel className="w-full ">
              <div className="flex gap-3 absolute right-5 -top-10">
                <CarouselPrevious className="relative top-0 left-0 bottom-0 right-0" />
                <CarouselNext className="relative top-0 left-0 bottom-0 right-0" />
              </div>
              <CarouselContent className="-ml-1">
                {categories.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-[25%]"
                  >
                    <div className="p-1">
                      <div className="aspect-square relative overflow-hidden group rounded transition-all duration-150">
                        <Image
                          src={"/sideImage.jpg"}
                          alt={item.products[0].name}
                          height={1000}
                          width={1000}
                          className="h-full w-full object-cover"
                        />
                        {showDiscountBagde && (
                          <div className="absolute text-sm w-16 text-center px-2 py-1 rounded bg-red-500 text-white top-3 left-3">
                            -{item.products[0].discount}%
                          </div>
                        )}
                        <div className="absolute top-3 right-3 space-y-2">
                          <FaRegHeart className="h-7 w-7 bg-white rounded-full p-1" />
                          <FaRegEye className="h-7 w-7 bg-white rounded-full p-1" />
                        </div>
                        <Button className="absolute w-full bottom-0 lg:bottom-[-100%] lg:group-hover:bottom-0 rounded-none transition-all duration-300 ease-in-out">
                          Add to Cart
                        </Button>
                      </div>
                      {showDiscount ? (
                        <div className="mt-4 relative">
                          <Link
                            href={`/product/${index}`}
                            className="absolute inset-0 z-10"
                          />
                          <strong>{item.products[0].name}</strong>

                          <p className="text-red-500 font-semibold">
                            $
                            {calculateDiscountedPrice(
                              item.products[0].price,
                              item.products[0].discount
                            )}
                            <span className="line-through ml-2 text-muted-foreground">
                              ${item.products[0].price}
                            </span>
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
                      ) : (
                        <div className="mt-4 relative">
                          <Link
                            href={`/product/${index}`}
                            className="absolute inset-0 z-10"
                          />
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
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {showBtn && (
              <div className="flex justify-center pt-16">
                <Button className="bg-red-500 hover:bg-red-600">
                  View All Products
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div>
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
                      {showDiscountBagde && (
                        <div className="absolute text-sm w-16 text-center px-2 py-1 rounded bg-red-500 text-white top-3 left-3">
                          -{item.products[0].discount}%
                        </div>
                      )}
                      <div className="absolute top-3 right-3 space-y-2">
                        <FaRegHeart className="h-7 w-7 bg-white rounded-full p-1" />
                        <FaRegEye className="h-7 w-7 bg-white rounded-full p-1" />
                      </div>
                      <Button className="absolute w-full bottom-0 lg:bottom-[-100%] lg:group-hover:bottom-0 rounded-none transition-all duration-300 ease-in-out">
                        Add to Cart
                      </Button>
                    </div>
                    {showDiscount ? (
                      <div className="mt-4">
                        <strong>{item.products[0].name}</strong>

                        <p className="text-red-500 font-semibold">
                          $
                          {calculateDiscountedPrice(
                            item.products[0].price,
                            item.products[0].discount
                          )}
                          <span className="line-through ml-2 text-muted-foreground">
                            ${item.products[0].price}
                          </span>
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
                    ) : (
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
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
