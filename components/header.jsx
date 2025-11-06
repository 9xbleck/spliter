"use client";

import { useStoreUser } from "@/hooks/use-store-user";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BarLoader } from "react-spinners";
import { Button } from "./ui/button";
import { LayoutDashboard, Split, Zap } from "lucide-react"; // Using Zap as logo

const Header = () => {
  const { isLoading } = useStoreUser();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/60 transition-all">
      <nav className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Split className="w-6 h-6" />
          <span className="font-bold text-lg">EvenUp</span>
        </Link>

        {/* Navigation */}
        {pathname === "/" && (
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-neutral-700 hover:text-black transition"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-neutral-700 hover:text-black transition"
            >
              How It Works
            </Link>
          </div>
        )}

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <Authenticated>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 border-neutral-300 text-neutral-800 hover:text-black hover:border-black transition"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="md:hidden w-10 h-10 p-0 text-neutral-700 hover:text-black"
              >
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button
                variant="ghost"
                className="text-neutral-600 hover:text-black"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className=" border-none text-white">Get Started</Button>
            </SignUpButton>
          </Unauthenticated>
        </div>
      </nav>

      {isLoading && <BarLoader width={"100%"} color="#36d7b7" />}
    </header>
  );
};

export default Header;
