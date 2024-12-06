"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  companyName: z.string().optional(),
  streetAddress: z.string().min(5, "Street address is required"),
  apartment: z.string().optional(),
  zipCode: z.string().min(5, "Valid zip code is required"),
  phoneNumber: z.string().min(10, "Valid phone number is required"),
  emailAddress: z.string().email("Valid email is required"),
  paymentMethod: z.enum(["bank", "cash"]),
  saveInformation: z.boolean().default(false),
});

export default function Checkout() {
  const [couponCode, setCouponCode] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: async (values) => {
      try {
        await formSchema.parseAsync(values);
        return { values, errors: {} };
      } catch (error: any) {
        return { values: {}, errors: error.errors };
      }
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const orderItems = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Hi Gamepad",
      price: 550,
      image: "/placeholder.svg?height=40&width=40",
    },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = "Free";
  const total = subtotal;

  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-2xl font-bold mb-8">Billing Details</h1>

        <div className="grid lg:grid-cols-2 gap-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">First Name*</FormLabel>
                    <FormControl>
                      <Input className="outline-none bg-muted" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Company Name</FormLabel>
                    <FormControl>
                      <Input className="outline-none bg-muted" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Street Address*</FormLabel>
                    <FormControl>
                      <Input className="outline-none bg-muted" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="apartment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Apartment, Floor, etc. (optional)</FormLabel>
                    <FormControl>
                      <Input className="outline-none bg-muted" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Zip Code*</FormLabel>
                    <FormControl>
                      <Input className="outline-none bg-muted" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Phone Number*</FormLabel>
                    <FormControl>
                      <Input className="outline-none bg-muted" {...field} type="tel" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Email Address*</FormLabel>
                    <FormControl>
                      <Input className="outline-none bg-muted" {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="saveInformation"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="!h-4 !w-4 fill-white"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Save this information for faster check-out next time
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <div className="space-y-6">
            <div className="space-y-8">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/sideImage.jfif"
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                    <span>{item.name}</span>
                  </div>
                  <span>${item.price}</span>
                </div>
              ))}
            </div>

            <div className=" divide-y-2">
              <div className="flex justify-between py-3">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between py-3">
                <span>Shipping</span>
                <span>{shipping}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <div>
                  <RadioGroup
                    className="flex flex-col space-y-1"
                    defaultValue="bank"
                  >
                    <div className="flex items-center space-x-3 h-[28px]">
                      <RadioGroupItem value="bank" id="bank" className="!h-fit"/>
                      <Label htmlFor="bank">Bank</Label>
                    </div>
                    <div className="flex items-center space-x-3 h-[28px]">
                      <RadioGroupItem value="cash" id="cash" className="!h-fit"/>
                      <Label htmlFor="cash">Cash on delivery</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Input
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="h-[full]"
              />
              <Button className="bg-red-500 hover:bg-red-600 rounded">Apply Coupon</Button>
            </div>

            <Button
              type="submit"
              className="bg-red-500 hover:bg-red-600 rounded"
              onClick={form.handleSubmit(onSubmit)}
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
