"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
} from "react-share";

import { HeartHandshake } from "lucide-react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="sm:gap-x-1">
            <NavigationMenuTrigger>RVG</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-[400px]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image
                        src="/Company-Logo.png"
                        className="mb-5"
                        alt="Company Logo"
                        width={120}
                        height={120}
                      />
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/" title="" className="mt-10 mr-5">
                  <Image
                    src="/Tagline.png"
                    alt="tagline"
                    width={250}
                    height={150}
                  />
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="sm:gap-x-1">
            <NavigationMenuTrigger>Planters</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-1 p-1 md:w-[300px] grid-cols-2 lg:w-[400px] ">
                {routes.map((route) => (
                  <ListItem
                    key={route.label}
                    title={route.label}
                    href={route.href}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="gap-x-1">
            <NavigationMenuTrigger>
              Connect <HeartHandshake className="mx-1 text-xl " />{" "}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-[330px] ">
                <ListItem>
                  <FacebookShareButton url="https://www.facebook.com/profile.php?id=61552935757996">
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </ListItem>

                <ListItem>
                  <EmailShareButton url="mailto:realviewplants@gmail.com">
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                </ListItem>

                <ListItem>
                  <ViberShareButton url="9155376164 ">
                    <ViberIcon size={32} round />
                  </ViberShareButton>
                </ListItem>

                <ListItem>
                  <InstapaperShareButton url=" https://www.instagram.com/real_view_garden/">
                    <InstapaperIcon size={32} round />
                  </InstapaperShareButton>
                </ListItem>

                <ListItem>
                  <TwitterShareButton url="https://twitter.com/RealView_Garden">
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </ListItem>

                <ListItem>
                  <LinkedinShareButton url="https://www.linkedin.com/in/real-view-garden-2137872a7/">
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none hover:underline hover:text-green-900">
            {title}
          </div>
          <div className="flex gap-x-2">{children}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MainNav;
