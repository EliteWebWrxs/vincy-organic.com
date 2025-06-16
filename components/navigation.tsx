"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Leaf, Menu, X, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/recipes", label: "Recipes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative p-2 bg-green-100 rounded-full shadow-inner">
              <Leaf className="h-7 w-7 text-green-600 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="text-2xl font-extrabold text-neutral-800 tracking-wide group-hover:text-green-700 transition-colors duration-200">
              Vincy Organic
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 font-medium rounded-md transition-all duration-200",
                  isActive(item.href)
                    ? "text-green-700 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-1 after:rounded-full after:bg-green-500"
                    : "text-neutral-600 hover:text-green-600 hover:bg-green-50"
                )}
              >
                {item.label}
              </Link>
            ))}

            <Button
              variant="outline"
              size="sm"
              className="ml-4 flex items-center border-green-300 text-green-700 hover:bg-green-600 hover:text-white transition-all"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span>Cart</span>
              <span className="ml-2 bg-green-500 text-white rounded-full text-xs px-2 py-0.5">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-neutral-600 hover:bg-green-50"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] bg-white"
            >
              <div className="flex flex-col h-full py-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 px-2">
                  <div className="flex items-center space-x-2">
                    <Leaf className="h-6 w-6 text-green-600" />
                    <span className="text-lg font-bold text-neutral-800">
                      Vincy Organic
                    </span>
                  </div>
                  {/* <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5 text-neutral-500" />
                  </Button> */}
                </div>

                {/* Links */}
                <div className="flex-1 flex flex-col space-y-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-green-100 text-green-700 border-l-4 border-green-500"
                          : "text-neutral-700 hover:text-green-700 hover:bg-green-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Cart and Contact */}
                <div className="mt-auto pt-6 border-t border-neutral-200 space-y-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    View Cart (0)
                  </Button>
                  <div className="text-center text-xs text-neutral-500">
                    <p>Need help?</p>
                    <p className="text-green-700 font-semibold">
                      support@vincyorganic.com
                    </p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
