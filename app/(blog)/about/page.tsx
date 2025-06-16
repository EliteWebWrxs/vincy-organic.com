import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-neutral-600 leading-tight">
                Our Story: From Farm to
                <span className="text-brand-600 block">Your Kitchen</span>
              </h1>
              <p className="text-xl text-neutral-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-lg text-brand-500">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/HeroImage.webp?height=500&width=600"
                alt="Margaret Johnson"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-600 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
              Every decision we make is guided by our commitment to quality,
              sustainability, and community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg bg-white rounded-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500"></div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-600 mb-4">
                Value 1
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-white rounded-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500"></div>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-600 mb-4">
                Value 2
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-white rounded-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500"></div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-600 mb-4">
                Value 3
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-600 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-500">
              The passionate people behind Vincy Organic Products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg bg-white rounded-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500"></div>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Margaret Johnson"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-neutral-600 mb-2">
                Margaret Johnson
              </h3>
              <p className="text-brand-600 font-medium mb-3">
                Founder & Head Chef
              </p>
              <p className="text-neutral-500 text-sm">
                Former Michelin-starred chef with 15 years of experience in
                sourcing the world's finest ingredients.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg bg-white rounded-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500"></div>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="James Chen"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-neutral-600 mb-2">
                James Chen
              </h3>
              <p className="text-brand-600 font-medium mb-3">
                Quality Director
              </p>
              <p className="text-neutral-500 text-sm">
                Food scientist and quality expert ensuring every product meets
                our rigorous standards for purity and flavor.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg bg-white rounded-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500"></div>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Sarah Thompson"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-neutral-600 mb-2">
                Sarah Thompson
              </h3>
              <p className="text-brand-600 font-medium mb-3">
                Sustainability Manager
              </p>
              <p className="text-neutral-500 text-sm">
                Environmental advocate working to ensure our supply chain
                supports both farmers and the planet.
              </p>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-500">50+</div>
              <div className="text-lg font-semibold text-neutral-600">
                Partner Farms
              </div>
              <div className="text-neutral-500">Across 15 countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-500">10,000+</div>
              <div className="text-lg font-semibold text-neutral-600">
                Happy Customers
              </div>
              <div className="text-neutral-500">And growing daily</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-500">100%</div>
              <div className="text-lg font-semibold text-neutral-600">
                Organic Certified
              </div>
              <div className="text-neutral-500">Every single product</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-500">6</div>
              <div className="text-lg font-semibold text-neutral-600">
                Years
              </div>
              <div className="text-neutral-500">Of excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-500 to-brand-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Flavor Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the difference that authentic, organic spices can make in
            your cooking. Start your culinary adventure with Vincy Organic
            Products today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-brand-600 hover:bg-brand-50 px-8 py-3 text-lg"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-brand-600 hover:bg-brand-50 hover:text-brand-600 px-8 py-3 text-lg"
            >
              View Recipes
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
