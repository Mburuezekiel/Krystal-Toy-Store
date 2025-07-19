import { useState, useMemo } from "react";
import { Search, Filter, Grid, List, Sparkles, Star, ShoppingCart, Gift, Puzzle, Blocks, Car, Feather, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/ui/breadcrumb";


const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const products = [
    {
      id: 1,
      name: "Sparkle Star Unicorn Plush",
      price: 3200,
      originalPrice: 3500,
      image: "https://images.unsplash.com/photo-1618398327299-a417387e834b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "plush-toys",
      rating: 4.9,
      inStock: true
    },
    {
      id: 2,
      name: "Galactic Robot Builder Kit",
      price: 7500,
      originalPrice: 9000,
      image: "https://images.unsplash.com/photo-1627063065662-e60d13c7a99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "building-sets",
      rating: 4.8,
      inStock: true
    },
    {
      id: 3,
      name: "Rainbow Express Wooden Train",
      price: 4800,
      originalPrice: 6000,
      image: "https://images.unsplash.com/photo-1517743046098-b7692288346e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "vehicles",
      rating: 4.7,
      inStock: false
    },
    {
      id: 4,
      name: "Enchanted Dollhouse Castle",
      price: 9900,
      originalPrice: 11000,
      image: "https://images.unsplash.com/photo-1582234033103-e38029d201a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "dolls-playsets",
      rating: 4.8,
      inStock: true
    },
    {
      id: 5,
      name: "Dinosaur Digging Adventure Kit",
      price: 2500,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1549488344-93c66a4f2249?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "educational-toys",
      rating: 4.6,
      inStock: true
    },
    {
      id: 6,
      name: "Magical Music Keyboard",
      price: 5500,
      originalPrice: 6200,
      image: "https://images.unsplash.com/photo-1586546375086-4f4a3f7f0e33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "musical-toys",
      rating: 4.7,
      inStock: true
    },
    {
      id: 7,
      name: "Cosmic Rocket Launch Pad",
      price: 6800,
      originalPrice: 7500,
      image: "https://images.unsplash.com/photo-1563851502447-f274a2608d06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "building-sets",
      rating: 4.5,
      inStock: true
    },
    {
      id: 8,
      name: "Wizard's Apprentice Wand",
      price: 1500,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1543781700-1c002279b946?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "role-play",
      rating: 4.9,
      inStock: true
    }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, products]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50">
      
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs />

        <div className="mb-10 text-center">
          <h1
            className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-4 drop-shadow-lg"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Our Toy Collection
          </h1>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Dive into a world of fun and discovery with our enchanting selection of toys!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center">
          <div className="flex-1 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-pink-400 group-focus-within:text-purple-600 transition-colors" />
              <Input
                placeholder="Search for magical toys..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 border-2 border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/80 group-hover:bg-white shadow-md"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-44 border-2 border-pink-200 rounded-full shadow-md text-gray-700 font-medium bg-white/80 hover:bg-white transition-colors">
                <Filter className="h-4 w-4 mr-2 text-purple-500" />
                <SelectValue placeholder="Toy Category" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-lg shadow-lg border-pink-100">
                <SelectItem value="all">All Toy Types</SelectItem>
                <SelectItem value="plush-toys">Plush Toys</SelectItem>
                <SelectItem value="building-sets">Building Sets</SelectItem>
                <SelectItem value="vehicles">Vehicles</SelectItem>
                <SelectItem value="dolls-playsets">Dolls & Playsets</SelectItem>
                <SelectItem value="educational-toys">Educational Toys</SelectItem>
                <SelectItem value="musical-toys">Musical Toys</SelectItem>
                <SelectItem value="role-play">Role Play & Dress Up</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-44 border-2 border-pink-200 rounded-full shadow-md text-gray-700 font-medium bg-white/80 hover:bg-white transition-colors">
                <Sparkles className="h-4 w-4 mr-2 text-orange-500" />
                <SelectValue placeholder="Sort by Magic" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-lg shadow-lg border-pink-100">
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border-2 border-pink-200 rounded-full shadow-md bg-white/80 overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className={`rounded-full px-3 py-2 flex items-center justify-center transition-colors ${viewMode === "grid" ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-inner' : 'text-gray-600 hover:bg-pink-100'}`}
              >
                <Grid className="h-5 w-5" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
                className={`rounded-full px-3 py-2 flex items-center justify-center transition-colors ${viewMode === "list" ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-inner' : 'text-gray-600 hover:bg-pink-100'}`}
              >
                <List className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className={`grid gap-8 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
          {filteredAndSortedProducts.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white rounded-2xl overflow-hidden border-2 border-transparent hover:border-pink-300">
                <CardContent className="p-0">
                  <div className="aspect-square mb-4 overflow-hidden rounded-t-2xl bg-gradient-to-br from-pink-100 to-purple-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Magical+Toy';
                      }}
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <Badge className="bg-yellow-400 text-purple-800 font-bold px-3 py-1 rounded-full text-sm shadow-md">
                      {product.category.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </Badge>
                    <h3
                      className="font-bold text-xl text-gray-900 group-hover:text-purple-700 transition-colors"
                      style={{ fontFamily: "'Fredoka One', cursive" }}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-2xl font-black text-purple-600"
                        style={{ fontFamily: "'Fredoka One', cursive" }}
                      >
                        KSh {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-base text-gray-400 line-through">
                          KSh {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({product.rating} Joy Score)</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    className={`w-full font-bold rounded-full px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105 group/btn ${
                      product.inStock
                        ? 'bg-gradient-to-r from-green-500 to-green-500 hover:from-green-600 hover:to-green-600 text-white'
                        : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (product.inStock) {
                            console.log(`Added "${product.name}" to Play Cart!`);
                        }
                    }}
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    {product.inStock ? (
                      <>
                        <ShoppingCart className="h-5 w-5 mr-2 transition-transform group-hover/btn:scale-110" />
                        Add to Play Cart!
                      </>
                    ) : (
                      "Currently Out of Stock"
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg" style={{ fontFamily: "'Fredoka One', cursive" }}>
              Oops! No magical toys found matching your quest. Try a different spell!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;