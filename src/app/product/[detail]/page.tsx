"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Minus, Plus, Repeat2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { calculateDiscountedPrice, categories, renderStars } from "../../../../libs";
import Breadcrumb from "@/app/components/Breadcrumb";
import { usePathname } from "next/navigation";
import Badge from "@/app/components/Badge";
import { FaRegEye, FaRegHeart } from "react-icons/fa";

const productImages = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

export default function ProductPageWithGallery() {
  const pathname = usePathname();
  const pageName = pathname
    .split("/")
    .pop()
    ?.split("")
    .map((char, index) =>
      index === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("") as string;

  const [bigImage, setBigImage] = useState(productImages[0]);

  const handleSmallImageClick = (image: string) => {
    setBigImage(image);
  };

  return (
    <div className="py-16">
      <div className="p-4 container mx-auto">
        <div className="pb-16">
          <Breadcrumb page={pageName} />
        </div>
        <div className="grid gap-8 lg:grid-cols-[60%_40%]">
          <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
              {productImages.slice(1).map((image: string, idx: number) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded bg-gray-100 aspect-square"
                >
                  <Image
                    src={image}
                    width={200}
                    height={200}
                    alt={`Product image ${idx + 1}`}
                    className="h-full w-full object-contain object-center cursor-pointer"
                    onClick={() => handleSmallImageClick(image)}
                  />
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden rounded bg-gray-100 lg:col-span-4 lg:pb-5">
              <Image
                src={bigImage}
                alt="Main product image"
                height={500}
                width={500}
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>

          <Card className="p-6 border-none shadow-none">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex">
                  <h1 className="text-2xl font-semibold">
                    Havic HV G-92 Gamepad
                  </h1>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    {renderStars(4)}
                    (250 reviews) |{" "}
                    <span className="text-green-500">In stock</span>
                  </span>
                </div>
                <div className="text-xl">$192.00</div>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  quibusdam iste minus earum ullam odio ratione ad dolorum neque
                  doloribus?
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">Colours:</label>
                  <div className="flex space-x-2 ">
                    <button className="w-3 h-3 rounded-full bg-blue-400 ring-2 ring-offset-2 ring-primary"></button>
                    <button className="w-4 h-4 rounded-full bg-red-500 -mt-0.5"></button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Size:</label>
                  <div className="flex space-x-2 mt-2">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <Button
                        key={size}
                        variant={size === "M" ? "default" : "outline"}
                        className={`w-10 h-10 p-0 ${
                          size === "M"
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : ""
                        }`}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <Button
                      size="icon"
                      className="h-10 w-10 bg-red-500 hover:bg-red-600 rounded-none"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <div className="w-16 text-center">2</div>
                    <Button
                      size="icon"
                      className="h-10 w-10 bg-red-500 hover:bg-red-600 rounded-none"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="flex-1 bg-red-500 hover:bg-red-600">
                    Buy Now
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4 pt-4 border divide-y">
                <div className="flex space-x-4 px-2">
                  <div className="p-2 rounded-md">
                    <Truck />
                  </div>
                  <div>
                    <div className="font-medium">Free Delivery</div>
                    <div className="text-sm text-muted-foreground">
                      Enter your postal code for Delivery Availability
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 px-2 py-3">
                  <div className="p-2 rounded-md">
                    <Repeat2 />
                  </div>
                  <div>
                    <div className="font-medium">Return Delivery</div>
                    <div className="text-sm text-muted-foreground">
                      Free 30 Days Delivery Returns. Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="pt-24">
        <div className="container">
          <Badge title="Related Item" />

          <div className="pt-16">
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
                        <div className="absolute text-sm w-16 text-center px-2 py-1 rounded bg-red-500 text-white top-3 left-3">
                          -{item.products[0].discount}%
                        </div>
                      <div className="absolute top-3 right-3 space-y-2">
                        <FaRegHeart className="h-7 w-7 bg-white rounded-full p-1" />
                        <FaRegEye className="h-7 w-7 bg-white rounded-full p-1" />
                      </div>
                      <Button className="absolute w-full bottom-0 lg:bottom-[-100%] lg:group-hover:bottom-0 rounded-none transition-all duration-300 ease-in-out">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
