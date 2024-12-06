import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pb-6">
      <div className="flex items-center   lg:h-[440px]">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 lg:h-[236px] py-10 lg:py-0">
            {/* Exclusive Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Exclusive</h3>
              <p className="text-sm">Subscribe</p>
              <p className="text-sm">Get 10% off your first order</p>
              <div className="flex items-center gap-2 relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-white/20"
                />
                <Button className="!bg-transparent absolute right-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Support Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <address className="not-italic text-sm text-gray-300">
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </address>
              <p className="text-sm">exclusive@gmail.com</p>
              <p className="text-sm">+88015-88888-9999</p>
            </div>

            {/* Account Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Account</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Login / Register
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shop
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Link Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Link</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Download App Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Download App</h3>
              <p className="text-sm text-gray-300">
                Save $3 with App New User Only
              </p>
              <div className="flex gap-4">
                <div className="h-24 w-24 bg-white p-1">
                  <img src="/qr.jfif" alt="QR Code" className="h-full w-full" />
                </div>
                <div className="flex  w-[110px] h-[84px] flex-col gap-1">
                  <div className="aspect-video relative h-[40px] lg:h-[50px]">
                    <Image
                      src="/gplay.png"
                      alt="Google Play"
                      height={1000}
                      width={1000}
                      className="object-contain w-full h-[40px] lg:h-[50px]" 
                    />
                  </div>
                  <div className="aspect-video relative  h-[40px] lg:h-[50px]">
                    <Image
                      src="/apple.png"
                      alt="/apple.png"
                      height={1000}
                      width={1000}
                      className="object-contain w-full h-[40px] lg:h-[50px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media & Copyright */}
      <div className=" flex  items-center justify-center border-t border-white/10 ">
        <p className="text-sm text-gray-400 h-[40px] py-6">
          © Copyright Rimel 2023. All right reserved
        </p>
      </div>
    </footer>
  );
}
