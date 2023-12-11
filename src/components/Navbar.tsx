"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

function Navbar() {
  const { user } = useUser();
  return (
    <>
      <div
        className={`fixed z-20 flex h-14 w-full items-center justify-between bg-white bg-opacity-5 px-5 text-[#9ca3af] backdrop-blur-[10px] ${poppins.className}}`}
      >
        <Link href={"/"}>Logo</Link>
        <div className="hidden w-[50%] items-center justify-end gap-6 md:flex">
          <Link href={`/blog/new`}>New Post</Link>
          {user ? (
            <Link href={`/account`}>Account</Link>
          ) : (
            <Link href={`/api/auth/login`}>Login</Link>
          )}
          <div>Help</div>
        </div>
        <div className="rounded-md md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="absolute right-5 top-2 inline-block rounded-md bg-transparent p-1 hover:bg-white/5">
                <Image
                  alt="menu"
                  src="../icons/menu.svg"
                  height={32}
                  width={32}
                  className="p-1"
                ></Image>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div>
                <div className="flex flex-col items-center gap-2 px-6 py-4 text-center text-[rgb(156,163,175)]">
                  <Link
                    href={`/account`}
                    className="h-10 w-full rounded-md hover:bg-white/5"
                  >
                    <SheetClose className="h-full w-full">Account</SheetClose>
                  </Link>
                  <div className="h-10 w-full rounded-md hover:bg-white/5">
                    <SheetClose className="h-full w-full">Help</SheetClose>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}

export default Navbar;
