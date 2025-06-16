import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, Leaf } from "lucide-react";

const recipes = [
  {
    id: 1,
    title: "Golden Turmeric Latte",
    description: "A warming, anti-inflammatory drink perfect for cozy evenings",
    image: "/spices.png?height=300&width=400",
    cookTime: "10 mins",
    servings: 2,
    difficulty: "Easy",
    category: "Beverages",
    ingredients: [
      "Organic Turmeric Powder",
      "Coconut Milk",
      "Honey",
      "Black Pepper",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Smoky Chipotle Chicken Tacos",
    description:
      "Tender chicken with our signature chipotle sauce in soft tortillas",
    image: "/spices.png?height=300&width=400",
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Medium",
    category: "Main Course",
    ingredients: [
      "Smoky Chipotle Sauce",
      "Chicken Breast",
      "Tortillas",
      "Lime",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Mediterranean Herb Roasted Vegetables",
    description: "Colorful vegetables seasoned with our Mediterranean blend",
    image: "/spices.png?height=300&width=400",
    cookTime: "35 mins",
    servings: 6,
    difficulty: "Easy",
    category: "Side Dish",
    ingredients: ["Mediterranean Herb Blend", "Mixed Vegetables", "Olive Oil"],
    featured: false,
  },
  {
    id: 4,
    title: "Himalayan Salt Chocolate Cookies",
    description: "Rich chocolate cookies with a hint of pink salt",
    image: "/spices.png?height=300&width=400",
    cookTime: "20 mins",
    servings: 12,
    difficulty: "Easy",
    category: "Dessert",
    ingredients: ["Himalayan Pink Salt", "Dark Chocolate", "Flour", "Butter"],
    featured: false,
  },
  {
    id: 5,
    title: "Spicy Ghost Pepper Wings",
    description: "For the brave - wings with our ghost pepper sauce",
    image: "/spices.png?height=300&width=400",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Hard",
    category: "Appetizer",
    ingredients: [
      "Ghost Pepper Hot Sauce",
      "Chicken Wings",
      "Celery",
      "Blue Cheese",
    ],
    featured: true,
  },
  {
    id: 6,
    title: "Ceylon Cinnamon French Toast",
    description: "Elevated French toast with aromatic Ceylon cinnamon",
    image: "/spices.png?height=300&width=400",
    cookTime: "15 mins",
    servings: 4,
    difficulty: "Easy",
    category: "Breakfast",
    ingredients: ["Ceylon Cinnamon Sticks", "Brioche", "Eggs", "Maple Syrup"],
    featured: false,
  },
];

const categories = [
  "All",
  "Beverages",
  "Main Course",
  "Side Dish",
  "Dessert",
  "Appetizer",
  "Breakfast",
];

export default function RecipesPage() {
  const featuredRecipes = recipes.filter((recipe) => recipe.featured);
  const allRecipes = recipes;

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-neutral-600 mb-6">
              Recipes That Inspire
            </h1>
            <p className="text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed">
              Discover delicious ways to use our organic spices and sauces. From
              quick weeknight dinners to impressive weekend feasts, we've got
              recipes for every occasion and skill level.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-neutral-600">
              Featured Recipes
            </h2>
            <Badge className="bg-brand-600 text-white px-4 py-2 text-sm">
              <ChefHat className="w-4 h-4 mr-1" />
              Chef's Picks
            </Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <Card
                key={recipe.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white rounded-2xl relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-100/40 to-transparent z-10"></div>
                  <Image
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-brand-500 to-brand-400 text-white shadow-lg z-20 rounded-full px-3 py-1">
                    {recipe.category}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg z-20">
                    <div className="flex items-center space-x-1 text-xs text-neutral-600">
                      <Clock className="w-3 h-3" />
                      <span>{recipe.cookTime}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-neutral-600 mb-2 group-hover:text-brand-700 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-neutral-500 mb-4 leading-relaxed">
                    {recipe.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-sm text-brand-500">
                    <div className="flex items-center space-x-1 bg-neutral-100 px-2 py-1 rounded-full">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings} servings</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-neutral-200 px-2 py-1 rounded-full">
                      <ChefHat className="w-4 h-4" />
                      <span>{recipe.difficulty}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-neutral-600 mb-2">
                      Key Ingredients:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {recipe.ingredients
                        .slice(0, 2)
                        .map((ingredient, index) => (
                          <Badge
                            key={index}
                            className="text-xs bg-neutral-100 text-neutral-700 border-0 rounded-full"
                          >
                            {ingredient}
                          </Badge>
                        ))}
                      {recipe.ingredients.length > 2 && (
                        <Badge className="text-xs bg-neutral-200 text-neutral-700 border-0 rounded-full">
                          +{recipe.ingredients.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-600 hover:to-brand-500 text-white shadow-lg rounded-full transform hover:scale-105 transition-all duration-300">
                    View Recipe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Recipes */}
      <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-600 mb-8">
            All Recipes
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-600 hover:to-brand-500 text-white"
                    : "border-brand-200 text-neutral-600 hover:bg-brand-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allRecipes.map((recipe) => (
              <Card
                key={recipe.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-brand-600 text-white text-xs">
                    {recipe.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-neutral-600 mb-1">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-3">
                    {recipe.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-brand-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{recipe.cookTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{recipe.servings}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ChefHat className="w-3 h-3" />
                      <span>{recipe.difficulty}</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white"
                  >
                    View Recipe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-600 mb-4">
            Get New Recipes Weekly
          </h2>
          <p className="text-xl text-neutral-500 mb-8">
            Join our community of food lovers and receive fresh recipe ideas
            every week, plus exclusive tips from our chef.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-brand-200 rounded-lg focus:outline-none focus:border-brand-600"
            />
            <Button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
