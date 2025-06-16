"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Search, Filter, Leaf } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Himalayan Pink Salt",
    price: 24.99,
    originalPrice: 29.99,
    image: "/spices.png?height=300&width=400",
    rating: 4.9,
    reviews: 127,
    category: "salts",
    badge: "Best Seller",
    description: "Pure, unrefined pink salt from the Himalayas",
  },
  {
    id: 2,
    name: "Organic Turmeric Powder",
    price: 18.99,
    image: "/spices.png?height=300&width=400",
    rating: 4.8,
    reviews: 89,
    category: "spices",
    badge: "New",
    description: "Golden turmeric with anti-inflammatory properties",
  },
  {
    id: 3,
    name: "Smoky Chipotle Sauce",
    price: 16.99,
    image: "/spices.png?height=300&width=400",
    rating: 4.7,
    reviews: 156,
    category: "sauces",
    badge: "Hot",
    description: "Rich, smoky sauce with a perfect heat balance",
  },
  {
    id: 4,
    name: "Mediterranean Herb Blend",
    price: 22.99,
    image: "/spices.png?height=300&width=400",
    rating: 4.6,
    reviews: 94,
    category: "blends",
    description: "Aromatic blend of oregano, thyme, and rosemary",
  },
  {
    id: 5,
    name: "Ceylon Cinnamon Sticks",
    price: 19.99,
    image: "/spices.png?height=300&width=400",
    rating: 4.9,
    reviews: 203,
    category: "spices",
    badge: "Premium",
    description: "True Ceylon cinnamon with delicate, sweet flavor",
  },
  {
    id: 6,
    name: "Ghost Pepper Hot Sauce",
    price: 24.99,
    image: "/spices.png?height=300&width=400",
    rating: 4.5,
    reviews: 78,
    category: "sauces",
    badge: "Extreme Heat",
    description: "For the brave - made with real ghost peppers",
  },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-600 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-neutral-500">
            Discover our complete collection of organic spices and sauces
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-500 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-brand-200 focus:border-brand-500"
              />
            </div>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="border-brand-200 focus:border-brand-500">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="spices">Spices</SelectItem>
                <SelectItem value="sauces">Sauces</SelectItem>
                <SelectItem value="blends">Blends</SelectItem>
                <SelectItem value="salts">Salts</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="border-brand-200 focus:border-brand-500">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              className="border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-white"
            >
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white rounded-2xl relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600"></div>
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-100/30 to-transparent z-10"></div>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-brand-500 to-brand-400 text-white shadow-lg z-20 rounded-full px-3 py-1 text-xs">
                    {product.badge}
                  </Badge>
                )}
                {product.originalPrice && (
                  <Badge className="absolute top-3 right-3 bg-gradient-to-r from-brand-600 to-brand-400 text-white shadow-lg z-20 rounded-full px-3 py-1 text-xs">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                )}
                <div className="absolute bottom-3 left-3 right-3 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-brand-400 text-brand-400"
                          />
                        ))}
                      </div>
                      <span className="text-neutral-600 font-medium">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 relative">
                <h3 className="text-neutral-700 mb-1 group-hover:text-brand-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-3 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-lg font-bold text-neutral-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-brand-300 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-600 hover:to-brand-500 text-white shadow-lg rounded-full px-4 py-2 transform hover:scale-105 transition-all duration-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-neutral-500">
              No products found matching your criteria.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4 bg-brand-600 hover:bg-brand-700 text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
