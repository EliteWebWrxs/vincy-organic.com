import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Leaf, Award, Truck } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Green Seasoning 16 oz",
    price: 15,
    originalPrice: 20,
    image: "/GreenSeasoning.avif?height=300&width=300",
    rating: 4.9,
    reviews: 127,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Green Seasoning 32 oz",
    price: 20,
    originalPrice: 25,
    image: "/GreenSeasoning.avif?height=300&width=300",
    rating: 4.8,
    reviews: 89,
    badge: "Hot",
  },
  {
    id: 3,
    name: "Some New Sauce",
    price: 16.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 156,
    badge: "New",
  },
];

const categories = [
  {
    name: "Seasonings",
    image: "/placeholder.svg?height=200&width=200",
    count: 2,
  },
  { name: "Sauces", image: "/placeholder.svg?height=200&width=200", count: 10 },
  { name: "Blends", image: "/placeholder.svg?height=200&width=200", count: 7 },
  { name: "Salts", image: "/placeholder.svg?height=200&width=200", count: 8 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <Leaf className="w-3 h-3 mr-1" />
                  100% Organic & Natural
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-neutral-600 leading-tight">
                  Pure Flavors from
                  <span className="text-brand-500 block">
                    St Vincent and the Grenadines
                  </span>
                </h1>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Discover our carefully curated collection of organic spices
                  and sauces, sourced directly from sustainable farms.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 text-lg"
                >
                  Shop Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-brand-500 text-brand-600 hover:bg-brand-50 px-8 py-3 text-lg"
                >
                  View Recipes
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-brand-500" />
                  <span className="text-sm text-neutral-600">
                    Award Winning
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-brand-500" />
                  <span className="text-sm text-neutral-600">
                    Free Shipping $50+
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-300 rounded-3xl transform rotate-6"></div>
              <Image
                src="/HeroImage.webp?height=600&width=500"
                alt="Organic spices and sauces"
                width={500}
                height={600}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-600 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Hand-picked favorites that bring exceptional flavor to your
              kitchen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white rounded-2xl"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-100/50 to-transparent z-10"></div>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-brand-500 to-brand-400 text-white shadow-lg z-20 rounded-full px-3 py-1">
                    {product.badge}
                  </Badge>
                  {product.originalPrice && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg z-20 rounded-full px-3 py-1">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </Badge>
                  )}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg z-20">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-brand-400 text-brand-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400"></div>
                  <h3 className="text-neutral-700 mb-2 group-hover:text-brand-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 mb-3 text-sm leading-relaxed">
                    Premium organic quality with exceptional flavor
                  </p>
                  <div className="flex items-center mb-4 text-xs text-neutral-500">
                    <span className="bg-neutral-100 px-2 py-1 rounded-full">
                      {product.rating} ★ ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-neutral-600">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-brand-300 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button className="bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-600 hover:to-brand-500 text-white shadow-lg rounded-full px-6 py-2 transform hover:scale-105 transition-all duration-300">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-600 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-neutral-600">
              Explore our carefully organized collections
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.name.toLowerCase()}`}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg overflow-hidden">
                  <div className="relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <p className="text-sm opacity-90">
                        {category.count} products
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-600">
                100% Organic
              </h3>
              <p className="text-neutral-500">
                Certified organic ingredients from trusted farms
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-200 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-600">
                Free Shipping
              </h3>
              <p className="text-neutral-500">
                Free delivery on orders over $50
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-300 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-brand-700" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-600">
                Award Winning
              </h3>
              <p className="text-neutral-500">
                Recognized for quality and taste
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-600">
                5-Star Rated
              </h3>
              <p className="text-neutral-500">
                Loved by thousands of customers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
