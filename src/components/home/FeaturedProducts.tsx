
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "KSh 125,000",
    originalPrice: "KSh 150,000",
    rating: 4.8,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80",
    badge: "Best Seller",
    discount: "17% OFF"
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: "KSh 180,000",
    originalPrice: "KSh 200,000",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&q=80",
    badge: "New Arrival",
    discount: "10% OFF"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: "KSh 35,000",
    originalPrice: "KSh 42,000",
    rating: 4.7,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=400&q=80",
    badge: "Popular",
    discount: "17% OFF"
  },
  {
    id: 4,
    name: "iPad Pro 12.9",
    price: "KSh 95,000",
    originalPrice: "KSh 115,000",
    rating: 4.6,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80",
    badge: "Featured",
    discount: "17% OFF"
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">
              Hand-picked deals on premium electronics
            </p>
          </div>
          <Button variant="outline">View All Products</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {/* Badges */}
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    {product.badge}
                  </Badge>
                  <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                    {product.discount}
                  </Badge>
                  
                  {/* Wishlist button */}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full group/btn">
                    <ShoppingCart className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
