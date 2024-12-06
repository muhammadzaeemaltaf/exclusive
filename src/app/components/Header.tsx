"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { BsFillBagXFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { IoCartOutline, IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const route = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".user-menu") && isUserMenuOpen) {
        setIsUserMenuOpen(false);
      }
      if (!target.closest(".nav-menu") && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isUserMenuOpen, isMenuOpen]);

  return (
    <header className="border-b-2">
      <div className="bg-black text-white py-2 md:py-3 text-sm flex flex-col gap-4 md:gap-6 md:flex-row">
        <p className="text-center md:text-end md:w-[70%] px-4 md:px-0">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link href={"#"} className="underline">
            ShopNow
          </Link>
        </p>
        <div className="flex justify-center md:w-[30%] md:pl-20">
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-[100px] bg-transparent text-white border-none outline-none h-[24px]">
              <SelectValue placeholder="Languages" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectGroup>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="urdu">Urdu</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <nav className="container !py-5">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"} className="font-bold text-2xl lg:text-3xl">Exclusive</Link>
          </div>
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-8 items-center">
              <li>
                <Link href={"/"} className="linkLine after:w-0 hover:after:w-full after:transition-all after:duration-150 pb-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"contact"} className="linkLine after:w-0 hover:after:w-full after:transition-all after:duration-150 pb-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"about"} className="linkLine after:w-0 hover:after:w-full after:transition-all after:duration-150 pb-1">
                  About
                </Link>
              </li>
              <li>
                <Link href={"/sign-up"} className="linkLine after:w-0 hover:after:w-full after:transition-all after:duration-150 pb-1">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <div className="hidden lg:block relative">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="bg-gray-50 py-2 px-3 text-sm outline-none w-[250px]"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2">
                <IoSearch className="h-6 w-6" />
              </span>
            </div>
            <div className="">
              <Link href={'/wishlist'}>
                {" "}
                <CiHeart className="h-6 w-6 cursor-pointer" />
              </Link>
            </div>
            <div className="">
            <Link href={'/cart'}>
              <IoCartOutline className="h-6 w-6 cursor-pointer" />
            </Link>
            </div>
            <div className="relative user-menu">
              <div
                className={`rounded-full p-1 transition-all duration-150 cursor-pointer ${
                  isUserMenuOpen
                    ? "bg-red-500 text-white"
                    : "hover:bg-red-500 hover:text-white "
                }`}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <User className="h-6 w-6" />
              </div>
              {isUserMenuOpen && (
                <div className={`absolute right-0 z-10 mt-2 w-48 rounded shadow-lg py-2 ${route === '/' ? 'backdrop-blur-3xl text-white' : 'bg-white text-black'}`}>
                  <Link
                    href={"/account"}
                    className="flex items-center  gap-2 px-4 py-2 text-sm hover:bg-gray-500/20"
                  >
                    <User className="scale-75 -ml-1.5" />
                    Manage My Account
                  </Link>
                  <Link
                    href={"#"}
                    className="flex items-center  gap-2 px-4 py-2 text-sm hover:bg-gray-500/20"
                  >
                    <BsFillBagXFill />
                    My Order
                  </Link>
                  <Link
                    href={"#"}
                    className="flex items-center  gap-2 px-4 py-2 text-sm hover:bg-gray-500/20"
                  >
                    <MdOutlineCancel />
                    My Cancellation
                  </Link>
                  <Link
                    href={"#"}
                    className="flex items-center  gap-2 px-4 py-2 text-sm hover:bg-gray-500/20"
                  >
                    <FaRegStar />
                    My Review
                  </Link>
                  <Link
                    href={"#"}
                    className="flex items-center  gap-2 px-4 py-2 text-sm hover:bg-gray-500/20"
                  >
                    <BiLogOut />
                    Logout
                  </Link>
                </div>
              )}
            </div>
            <button
              className="lg:hidden nav-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <IoMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute top-[140px] left-0 right-0 z-50 border-b-2">
          <div className="p-4">
            <div className="relative mb-4">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="bg-gray-50 py-2 px-3 text-sm outline-none w-full"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2">
                <IoSearch className="h-6 w-6" />
              </span>
            </div>
          </div>{" "}
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link href={"/"} className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href={"contact"} className="block py-2">
                Contact
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="block py-2">
                About
              </Link>
            </li>
            <li>
              <Link href={"/sign-up"} className="block py-2">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
