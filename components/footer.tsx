import Link from "next/link";
import { Leaf, ShoppingBag, BookOpen, HelpCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-neutral-700 via-neutral-800 to-neutral-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <Leaf className="h-10 w-10 text-green-400" />
              <span className="text-3xl font-extrabold tracking-wide">
                Vincy Organic Products
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Explore the world of organic spices, sauces, and blends made to
              inspire your next dish.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-5 w-5 text-brand-400" />
              <h4 className="text-lg font-semibold tracking-wide">Shop</h4>
            </div>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link
                  href="/products"
                  className="hover:text-green-400 transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=spices"
                  className="hover:text-green-400 transition-colors"
                >
                  Spices
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=sauces"
                  className="hover:text-green-400 transition-colors"
                >
                  Sauces
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=blends"
                  className="hover:text-green-400 transition-colors"
                >
                  Blends
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-5 w-5 text-brand-400" />
              <h4 className="text-lg font-semibold tracking-wide">Learn</h4>
            </div>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link
                  href="/recipes"
                  className="hover:text-green-400 transition-colors"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <HelpCircle className="h-5 w-5 text-brand-400" />
              <h4 className="text-lg font-semibold tracking-wide">Support</h4>
            </div>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-green-400 transition-colors"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-green-400 transition-colors"
                >
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-600 pt-8 text-center text-sm text-neutral-400">
          <p>
            © {new Date().getFullYear()} Vincy Organic Products. Crafted with
            flavor and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
