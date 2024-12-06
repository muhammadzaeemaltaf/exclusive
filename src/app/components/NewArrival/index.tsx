import React from "react";
import Badge from "../Badge";
import Image from "next/image";
import Link from "next/link";

const NewArrival = () => {
  return (
    <div className="container space-y-6">
      <Badge title="Fetured" />
      <h1 className="text-4xl font-semibold">New Arrival</h1>
      <div className="flex flex-col md:flex-row gap-4 mg:h-[600px] pt-4">
        <div className="relative md:w-1/2 overflow-hidden bg-black">
          <Image
            src="/sideImage.jfif"
            alt="PlayStation 5"
            height={600}
            width={600}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h2 className="mb-2 text-2xl font-bold">PlayStation 5</h2>
            <p className="mb-4 text-sm text-gray-200">Experience the next level of gaming</p>
            <Link href={"#"} className="linkLine pb-1">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="flex h-full flex-col gap-4">
            {/* Top product */}
            <div className="relative aspect-video overflow-hidden  bg-black">
              <Image
                src="/sideImage.jfif"
                alt="Women's Collections"
                height={300}
                width={600}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h2 className="mb-2 text-xl font-bold">Women's Collections</h2>
                <p className="mb-3 text-sm text-gray-200">Explore our Scottish collection</p>
                <Link href={"#"} className="linkLine pb-1">
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Bottom grid */}
            <div className="flex flex-1 gap-4">
              {/* Bottom left product */}
              <div className="relative w-1/2 overflow-hidden  bg-black">
                <Image
                  src="/sideImage.jfif"
                  alt="Speakers"
                  height={250}
                  width={300}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-2 md:p-4 text-white">
                  <h2 className="md:mb-2 text-lg font-bold">Speakers</h2>
                  <p className="md:mb-3 text-xs text-gray-200">Smart home solutions</p>
                  <Link href={"#"} className="linkLine text-xs md:text-base pb-1">
                    Shop Now
                  </Link>
                </div>
              </div>

              {/* Bottom right product */}
              <div className="relative w-1/2 overflow-hidden  bg-black">
                <Image
                  src="/sideImage.jfif"
                  alt="Perfume"
                  height={250}
                  width={300}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-2 md:p-4 text-white">
                  <h2 className="md:mb-2 text-lg font-bold">Perfume</h2>
                  <p className="md:mb-3 text-xs text-gray-200">Luxury fragrances</p>
                  <Link href={"#"} className="linkLine text-xs md:text-base pb-1">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
