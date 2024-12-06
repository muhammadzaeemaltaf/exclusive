import Image from "next/image";
import React from "react";
import Breadcrumb from "../../Breadcrumb";

const Hero = () => {
  return (
    <div className="py-16 overflow-hidden">
        <div className="container">
        <Breadcrumb page="About"/>
        </div>
      <div className="container my-10">
        <div className="flex gap-6">
          <div className="w-full lg:w-[76%]  flex items-center">
            <div className="flex flex-col gap-[40px]">
              <h1 className="font-semibold text-[54px]">Our Story</h1>
              <p className="">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p className="">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
          <div className="w-full hidden lg:block relative -right-28">
            <Image
              src={"/aboutImage.jpg"}
              alt="about image"
              height={1000}
              width={1000}
              className="w-[837px] h-[609px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
