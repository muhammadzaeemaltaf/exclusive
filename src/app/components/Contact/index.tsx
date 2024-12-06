"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import Breadcrumb from "../Breadcrumb";
import { usePathname } from "next/navigation";

export default function Contact() {
    const pathname = usePathname();
    const pageName = pathname
      .split("/")
      .pop()
      ?.split("")
      .map((char, index) =>
        index === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join("") as string;
  return (
    <div className="py-16">
      <div className="container">
        <div className="pb-10">
        <Breadcrumb page={pageName}/>
        </div>
        <div className="">
          <div className="flex flex-col lg:flex-row gap-8 py-6">
            <div className="space-y-8 w-full md:w-[30%] shadow  rounded-md p-6">
              <div className="space-y-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-8 h-8 p-1 mt-1 bg-destructive text-white rounded-full" />
                    <h3 className="font-semibold text-lg">Call To Us</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      We are available 24/7, 7 days a week
                    </p>
                    <p className="text-sm mt-1">Phone: +8801611112222</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-8 h-8 p-1 mt-1 bg-destructive text-white rounded-full" />
                    <h3 className="font-semibold text-lg">Write To Us</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Fill out our form and we will contact you within 24 hours
                    </p>
                    <p className="text-sm mt-1">
                      Email: customer@exclusive.com
                    </p>
                    <p className="text-sm">Email: support@exclusive.com</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4 w-full md:w-[70%] shadow text-end rounded-md p-6">
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Your Name *"
                  className="bg-muted"
                />
                <Input
                  type="email"
                  placeholder="Your Email *"
                  className="bg-muted"
                />
                <Input
                  type="tel"
                  placeholder="Your Phone *"
                  className="bg-muted"
                />
              </div>
              <Textarea
                placeholder="Your Message"
                className="min-h-[150px] bg-muted"
              />
              <Button
                type="submit"
                className="w-32 bg-destructive hover:bg-destructive/90 ml-auto"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
