import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, ToyBrick, Sparkles, Gift } from "lucide-react";
import { Link } from "react-router-dom";


const featuredToys = [
  {
    id: 1,
    name: "Sparkle Star Unicorn",
    price: "KSh 3,200",
    originalPrice: "KSh 3,500",
    rating: 4.9,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1618398327299-a417387e834b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Fan Favorite",
    discount: "9% OFF"
  },
  {
    id: 2,
    name: "Galactic Robot Builder",
    price: "KSh 7,500",
    originalPrice: "KSh 9,000",
    rating: 4.9,
    reviews: 450,
    image: "https://images.unsplash.com/photo-1627063065662-e60d13c7a99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Top Pick!",
    discount: "15% OFF"
  },
  {
    id: 3,
    name: "Rainbow Express Train Set",
    price: "KSh 4,800",
    originalPrice: "KSh 6,000",
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1517743046098-b7692288346e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "New Arrival",
    discount: "20% OFF"
  },
  {
    id: 4,
    name: "Enchanted Dollhouse Castle",
    price: "KSh 9,900",
    originalPrice: "KSh 11,000",
    rating: 4.8,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1582234033103-e38029d201a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Limited Edition",
    discount: "10% OFF"
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-center md:text-left">
          <div>
            <h2
              className="text-4xl font-bold text-gray-900 mb-4 drop-shadow-md"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              Our Star Toys!
            </h2>
            <p className="text-gray-700 text-lg">
              Discover the most loved and exciting toys, hand-picked for maximum fun!
            </p>
          </div>
          <Link to="/products" className="mt-6 md:mt-0">
            <Button
              variant="default"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              <Gift className="h-5 w-5 mr-2" /> View All  Toys
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredToys.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="block">
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white rounded-2xl overflow-hidden border-2 border-transparent hover:border-pink-300">
                <CardContent className="p-0">
                  <div className="relative mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x224?text=Toy+Image';
                      }}
                    />
                    <Badge className="absolute top-3 left-3 bg-yellow-400 text-purple-800 font-bold px-3 py-1 rounded-full text-sm shadow-md">
                      {product.badge}
                    </Badge>
                    <Badge className="absolute top-3 right-3 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-md animate-pulse">
                      {product.discount}
                    </Badge>
                    
                    <Button
                      size="icon"
                      variant="default"
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/80 hover:bg-white text-pink-500 hover:text-purple-600 rounded-full w-10 h-10 shadow-md flex items-center justify-center transform group-hover:scale-110"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Added to wishlist');
                      }}
                    >
                      <Heart className="h-5 w-5 fill-grey-500 group-hover:fill-purple-600" />
                    </Button>
                  </div>

                  <div className="p-4 space-y-3">
                    <h3
                      className="font-bold text-xl text-gray-900 group-hover:text-purple-700 transition-colors"
                      style={{ fontFamily: "'Fredoka One', cursive" }}
                    >
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse" />
                        <span className="ml-1 text-base font-semibold text-gray-700">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        ({product.reviews} ratings)
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span
                        className="text-2xl font-black "
                        style={{ fontFamily: "'Fredoka One', cursive" }}
                      >
                        {product.price}
                      </span>
                      <span className="text-base text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-green-500 to-green-500 hover:from-green-600 hover:to-green-600 text-white font-bold rounded-full px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105 group/btn"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Added to cart');
                      }}
                      style={{ fontFamily: "'Fredoka One', cursive" }}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2 transition-transform group-hover/btn:scale-110" />
                      Add to  Cart!
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}