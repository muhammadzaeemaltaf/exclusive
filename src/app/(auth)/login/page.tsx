"use client";

import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-end w-full lg:ml-[100px]">
      <div className="w-full lg:w-[90%]">
        <h1 className="font-semibold text-4xl">Login in to Exclusive</h1>
        <p className="my-5">Enter your details below</p>
        <form action="" className="grid gap-2">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="outline-none border-b w-full py-2 my-2"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="outline-none border-b w-full py-2 my-2"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </span>
          </div>
          <div className="flex justify-between my-4">
            <Button className="bg-red-500 hover:bg-red-600 rounded px-12 py-6">
              Login
            </Button>
            <Button className="!bg-transparent text-red-500 !px-0 bg rounded hover:underline">
              Forgot Passowrd?
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
