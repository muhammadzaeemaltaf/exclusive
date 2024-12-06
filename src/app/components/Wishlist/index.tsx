import React from "react";
import {
  calculateDiscountedPrice,
  categories,
  renderStars,
} from "../../../../libs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Badge from "../Badge";
import { Eye } from "lucide-react";

const Wishlist = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="flex items-center justify-between px-2 mb-16">
          <h1 className="text-xl">Wislist (4)</h1>
          <Button variant={"outline"} className="px-12 py-4 border-gray-500 font-[500] !w-[223px]">
            Move All To Bag
          </Button>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.slice(0, 4).map((item, index) => (
              <div key={index} className="pl-1">
                <div className="p-1">
                  <div className="aspect-square relative overflow-hidden group rounded transition-all duration-150">
                    <Image
                      src={"/sideImage.jfif"}
                      alt={item.products[0].name}
                      height={1000}
                      width={1000}
                      className="h-full w-full object-cover"
                    />
                    {index === 0 && (
                      <div className="absolute text-sm w-16 text-center px-2 py-1 rounded bg-red-500 text-white top-3 left-3">
                        -{item.products[0].discount}%
                      </div>
                    )}
                    <div className="absolute top-3 right-3 space-y-2">
                      <RiDeleteBin6Line className="h-7 w-7 bg-white rounded-full p-1" />
                    </div>
                    <Button className="absolute w-full bottom-0  rounded-none transition-all duration-300 ease-in-out">
                      <IoCartOutline className="scale-125" />
                      Add to Cart
                    </Button>
                  </div>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mb-16">
        <div className="flex items-center justify-between my-16">
          <div className="flex items-center">
            <Badge title="" />
            <h1 className="text-xl">Just For You</h1>
          </div>
          <Button
            variant={"outline"}
            className="px-12 py-4 border-gray-500 rounded w-fit font-[500]"
          >
            See All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.slice(0, 4).map((item, index) => (
            <div key={index} className="pl-1">
              <div className="p-1">
                <div className="aspect-square relative overflow-hidden group rounded transition-all duration-150">
                  <Image
                    src={"/sideImage.jfif"}
                    alt={item.products[0].name}
                    height={1000}
                    width={1000}
                    className="h-full w-full object-cover"
                  />
                  {index === 0 && (
                    <div className="absolute text-sm w-16 text-center px-2 py-1 rounded bg-red-500 text-white top-3 left-3">
                      -{item.products[0].discount}%
                    </div>
                  )}
                  {index === 2 && (
                    <div className="absolute text-sm w-16 text-center px-2 py-1 rounded bg-green-500 text-white top-3 left-3">
                      New
                    </div>
                  )}
                  <div className="absolute top-3 right-3 space-y-2">
                    <Eye className="h-7 w-7 bg-white rounded-full p-1" />
                  </div>
                  <Button className="absolute w-full bottom-0  rounded-none transition-all duration-300 ease-in-out">
                    <IoCartOutline className="scale-125" />
                    Add to Cart
                  </Button>
                </div>
                <div className="mt-4">
                  <strong>{item.products[0].name}</strong>

                  <p className="text-red-500 font-semibold py-2">
                    $
                    {calculateDiscountedPrice(
                      item.products[0].price,
                      item.products[0].discount
                    )}
                    <span className="line-through ml-2 text-muted-foreground ">
                      ${item.products[0].price}
                    </span>
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center text-yellow-500">
                      {" "}
                      {renderStars(item.products[0].rating)}{" "}
                    </span>
                    <span className="text-xs">({item.products[0].rating})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
