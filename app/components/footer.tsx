import { useState } from "react";
import Image from "next/image";
import getCategories from "@/actions/get-categories";
import Newsletter from "./newsletter";

const Footer = async () => {
  const categories = await getCategories();
  const routes = categories.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
  }));
  return (
    <footer className="bg-[#202020] text-white body-font">
      <div className="container px-5 pb-3">
        <div className="flex justify-between text-center order-first">
          <div className="px-4 w-fit">
            <h2 className="title-font font-medium text-white text-center tracking-widest text-sm mb-3">
              Planters
            </h2>
            <nav className="list-none mb-10 text-center w-fit">
              {routes.sort((a, b) => a.label.length - b.label.length).map((route) => (
                <li key={route.href}>
                  <a className="text-gray-100 hover:text-gray-400 cursor-pointer" href={route.href}>
                    {route.label}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <Newsletter />
        </div>
      </div>
      <div className="bg-[#202020] text-white">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Image
              src="/Company-Logo.png"
              className="mb-5 invert"
              alt="Company Logo"
              width={100}
              height={100}
            />

            <Image
              src="/Tagline.png"
              alt="tagline"
              width={200}
              height={100}
              className="invert"
            />
          </a>
          <div className="mx-auto py-10">
            <p className="text-center text-sm">
              &copy; 2024 Real-View-Garden, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
