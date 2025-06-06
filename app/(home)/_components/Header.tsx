"use client";
import { Button } from "@/components/ui/button";
import { SignInButton} from "@clerk/nextjs";
import clsx from "clsx";
// import { useConvexAuth } from "convex/react";
// import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  // const { isAuthenticated, isLoading } = useConvexAuth();
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    console.log(window.scrollY);
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);
  return (
    <div
      className={clsx(
        "h-[var(--height-header)] w-full border-b fixed z-20 bg-white flex justify-between items-center px-8",
        !scrolled && "border-white"
      )}
    >
      <div>
        {/* <Image
          src="/logo.svg"
          alt="Logo"
          height={50}
          width={50}
          className="block dark:hidden object-contain"
        /> */}
        {/* Logo dark mode */}
        <Image
          src="/logo.svg"
          alt="Logo"
          height={50}
          width={50}
          className="block object-contain"
        />
      </div>
      <div className="flex gap-x-4">
        <>
          <SignInButton mode="modal">
            <Button variant={"ghost"}>Login</Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button>Get Motion Free</Button>
          </SignInButton>
        </>
      </div>
    </div>
  );
};

export default Header;
