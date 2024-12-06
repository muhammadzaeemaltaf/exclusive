"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sideBarLink } from "../../../../../libs";

const SideBar = () => {
  return (
    <div className="w-full">
      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {sideBarLink.map((link, index) => (
              <SelectItem
                key={index}
                value={link.toLowerCase().replace(/\s+/g, "-")}
              >
                {link}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:gap-3">
          {sideBarLink.map((link, index) => (
            <div key={index} className="">
              {index < 2 ? (
                <Link href={"#"} className="flex items-center justify-between">
                  {link} <IoIosArrowForward />
                </Link>
              ) : (
                <Link href={"#"}>{link}</Link>
              )}
            </div>
          ))}
        </div>
    </div>
  );
};

export default SideBar;
