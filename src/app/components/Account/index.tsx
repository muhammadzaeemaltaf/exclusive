"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Breadcrumb from "../Breadcrumb";
import { IoClose } from "react-icons/io5";
import { FilterIcon, MenuIcon } from "lucide-react";

export default function Account() {
  const pathname = usePathname();
  const pageName = pathname
    .split("/")
    .pop()
    ?.split("")
    .map((char, index) =>
      index === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("") as string;

  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "Sumel",
    email: "mdemail@gmail.com",
    address: "Kingston, 5226, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className="py-16">
      <div className="container">
        <div className="flex justify-between">
          <Breadcrumb page={pageName} />
          <p>Welcome! <span className="text-red-500">{`${formData.firstName} ${formData.lastName}` }</span></p>
        </div>
        <div className="flex py-6">
          {/* Sidebar */}
          <div className={`fixed inset-0 z-50 bg-white p-6 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:relative md:translate-x-0 md:w-64 md:py-6 md:space-y-2`}>
            <button className="md:hidden absolute right-4 border rounded-md p-2" onClick={() => setSidebarOpen(false)}><IoClose /></button>
            <h2 className="font-semibold text-lg mt-20">Manage My Account</h2>
            <nav className="space-y-6">
              <div className="flex flex-col text-sm gap-2 pl-5">
                <Link
                  href="#"
                  className="text-primary w-full justify-start p-0 text-red-500"
                >
                  My Profile
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground w-full justify-start p-0"
                >
                  Address Book
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground w-full justify-start p-0"
                >
                  My Payment Options
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">My Orders</h3>
                <div className="flex flex-col text-sm gap-2 pl-5">
                  <Link
                    href="#"
                    className="text-muted-foreground w-full justify-start p-0 pl-4"
                  >
                    My Returns
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground w-full justify-start p-0 pl-4"
                  >
                    My Cancellations
                  </Link>
                </div>
              </div>

              <div>
                <Link
                  href="#"
                  className="w-full justify-start p-0 font-semibold text-lg"
                >
                  My Wishlist
                </Link>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 md:p-6">
            <button className="md:hidden mb-4 bg-red-500 text-white cursor-pointer p-2 rounded-full fixed right-3 bottom-2" onClick={() => setSidebarOpen(true)}><FilterIcon /></button>
            <div>
              <Card className="p-5 md:p-16 border-none shadow-lg">
                <div className="pb-6">
                  <h1 className="text-xl font-[500] text-red-500">
                    Edit Your Profile
                  </h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row flex-wrap gap-6">
                    <div className="flex-1">
                      <label className="block text-sm font-semibold">
                        First Name
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex-1">
                      <label className="block text-sm font-medium">
                        Last Name
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Address</label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Password Changes</h3>

                    <div>
                      <label className="block text-sm font-medium">
                        Current Password
                      </label>
                      <Input
                        type="password"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium">
                        New Password
                      </label>
                      <Input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium">
                        Confirm New Password
                      </label>
                      <Input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button className="border-none !bg-transparent text-black" type="button">
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-red-500 hover:bg-red-600 px-12 py-4">Save Changes</Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
