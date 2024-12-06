"use client";

import { useState } from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "../Breadcrumb";
import { usePathname } from "next/navigation";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function ShoppingCart() {
  const pathname = usePathname();
  const pageName = pathname
    .split("/")
    .pop()
    ?.split("")
    .map((char, index) =>
      index === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("") as string;

  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "2",
      name: "Hi Gamepad",
      price: 550,
      quantity: 2,
      image: "/placeholder.svg?height=50&width=50",
    },
  ]);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: string, delta: number) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = "Free";
  const total = subtotal;

  return (
    <div className="py-16">
      <div className="container">
        <Breadcrumb page={pageName} />
        <div className="mt-16">
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <table
                className="w-full min-w-max "
                cellPadding={15}
              >
                <thead className="shadow">
                  <tr className="text-left">
                    <th className="pb-4">Product</th>
                    <th className="pb-4">Price</th>
                    <th className="pb-4">Quantity</th>
                    <th className="pb-4 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="">
                  {items.map((item) => (
                    <tr key={item.id} className="py-2 shadow rounded mb-10">
                      <td className="py-4">
                        <div className="flex items-center gap-4">
                          <Image
                            src={"/sideImage.jfif"}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="rounded-md object-cover"
                          />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4">${item.price}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 0}
                          >
                            <MinusIcon className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <PlusIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        ${item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center flex-wrap">
              <Button variant="outline" className="rounded px-12 py-4">
                Return to Shop
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 rounded px-12 py-4">
                Update Cart
              </Button>
            </div>

            <div className="flex justify-between !mt-20 flex-wrap">
              <div className="flex gap-4 w-full flex-wrap  sm:w-1/2 h-fit">
                <Input
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="max-w-[300px] "
                />
                <Button className="bg-red-500 hover:bg-red-600 rounded px-12 py-4">
                  Apply Coupon
                </Button>
              </div>

              <div className="border border-black p-6 rounded space-y-4 w-full sm:w-[40%] mt-8 sm:mt-0">
                <h2 className="font-semibold text-lg">Cart Total</h2>
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between border-b pb-4">
                  <span>Shipping:</span>
                  <span>{shipping}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-center">
                  <Button className="bg-red-500 hover:bg-red-600 rounded px-12 py-4">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
